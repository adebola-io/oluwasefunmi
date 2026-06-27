import { Cell, For, type SourceCell, useScopeContext } from "retend";
import type { PatternTemplateProps } from "../../components/InfiniteCanvas/InfiniteRepeatedPattern";
import classes from "./MovieCanvasChunk.module.css";
import {
  InfiniteCanvasScope,
  InfiniteRepeatedPatternScope,
} from "../../components/InfiniteCanvas/InfiniteCanvasScope";
import { movieForPoster, type MovieCanvasMovie } from "./movies";
import { MovieCanvasScope } from "./MovieCanvasScope";
import { arrangeMoviesBySimilarity } from "./movieArrangement";
import { getMovieCanvasMode } from "./movieFocus";

export function MovieCanvasChunk(props: PatternTemplateProps) {
  const { width, height } = useScopeContext(InfiniteCanvasScope);
  const { center } = useScopeContext(InfiniteRepeatedPatternScope);
  const { movieFocusRequest, movieList, selectedMovie } =
    useScopeContext(MovieCanvasScope);

  const mode = Cell.derived(() =>
    getMovieCanvasMode(width.get(), height.get())
  );

  const subgridRows = Cell.derived(() => {
    return mode.get()[0];
  });
  const subgridCols = Cell.derived(() => {
    return mode.get()[1];
  });

  const posters = Cell.derived(() => {
    return Array.from(
      { length: subgridRows.get() * subgridCols.get() },
      (_, index) => {
        const localRow = Math.floor(index / subgridCols.get());
        const localCol = index % subgridCols.get();
        return { index, localRow, localCol };
      }
    );
  });

  movieFocusRequest.listen(async (request) => {
    if (!request || movieFocusRequest.get() !== request) return;
    movieFocusRequest.set(null);
    const centered = await center(request.row, request.col, {
      offsetY: request.offsetY,
    });
    const movie = selectedMovie.get();

    if (centered && movie?.id === request.movieId) {
      arrangeMovieList(movieList, movie, request.posterRow, request.posterCol);
    }
    if (selectedMovie.get()?.id === request.movieId) selectedMovie.set(null);
  });

  return (
    <div
      class={classes.container}
      style={{ "--movie-rows": subgridRows, "--movie-cols": subgridCols }}
    >
      {For(posters, (poster) => (
        <Poster
          {...poster}
          {...props}
          subgridRows={subgridRows}
          subgridCols={subgridCols}
        />
      ))}
    </div>
  );
}

interface PosterProps extends PatternTemplateProps {
  subgridRows: Cell<number>;
  subgridCols: Cell<number>;
  localRow: number;
  localCol: number;
}

function Poster(props: PosterProps) {
  const { row, col, localRow, localCol, subgridRows, subgridCols } = props;
  const { width, height } = useScopeContext(InfiniteCanvasScope);
  const { center } = useScopeContext(InfiniteRepeatedPatternScope);
  const { selectedMovie, movieList } = useScopeContext(MovieCanvasScope);
  const animated = Cell.source(false);
  const loaded = Cell.source(false);

  const posterRow = Cell.derived(() => {
    return row.get() * subgridRows.get() + localRow;
  });

  const posterCol = Cell.derived(() => {
    return col.get() * subgridCols.get() + localCol;
  });

  const movie = Cell.derived(() => {
    return movieForPoster(posterRow.get(), posterCol.get(), movieList.get());
  });

  const isSelected = Cell.derived(() => {
    const selected = selectedMovie.get();
    return selected?.id === movie.get().id;
  });

  const isVisible = Cell.derived(() => {
    return isSelected.get() || !selectedMovie.get();
  });

  const isOddColumn = Cell.derived(() => {
    return posterCol.get() % 2 !== 0;
  });

  const marginOffsetY = Cell.derived(() => {
    if (!isOddColumn.get() || height.get() === 0) return 0;
    return (-0.75 * width.get()) / height.get() / subgridCols.get();
  });

  const themeColor = Cell.derived(() => {
    return selectedMovie.get()?.themeColor ?? movie.get().themeColor;
  });

  const src = Cell.derived(() => {
    if (!animated.get()) return undefined;
    return movie.get().posterUrl;
  });

  const alt = Cell.derived(() => {
    return movie.get().title;
  });

  const opacity = Cell.derived(() => {
    return loaded.get() && isVisible.get() ? "1" : "0";
  });

  const handleClick = async () => {
    const movieVal = movie.get();
    selectedMovie.set(movieVal);

    const targetRow = row.get() + (localRow + 0.5) / subgridRows.get() - 0.5;
    const targetCol = col.get() + (localCol + 0.5) / subgridCols.get() - 0.5;
    const centered = await center(targetRow, targetCol, {
      offsetY: marginOffsetY.get(),
    });

    if (centered) {
      arrangeMovieList(movieList, movieVal, posterRow.get(), posterCol.get());
    }
    selectedMovie.set(null);
  };
  const handleAnimationEnd = () => animated.set(true);
  const handleLoad = () => loaded.set(true);

  src.listen(() => loaded.set(false));

  return (
    <button
      type="button"
      class={classes.poster}
      data-odd-column={isOddColumn}
      data-row={posterRow}
      data-col={posterCol}
      style={{ "--poster-theme": themeColor }}
      onClick={handleClick}
      onAnimationEnd--once={handleAnimationEnd}
    >
      <img
        src={src}
        alt={alt}
        class={classes.image}
        loading="lazy"
        style={{ opacity }}
        onLoad={handleLoad}
      />
    </button>
  );
}

function arrangeMovieList(
  movieList: SourceCell<MovieCanvasMovie[]>,
  selectedMovie: MovieCanvasMovie,
  centerRow: number,
  centerCol: number
) {
  movieList.set(
    arrangeMoviesBySimilarity(
      selectedMovie,
      movieList.get(),
      centerRow,
      centerCol
    )
  );
}
