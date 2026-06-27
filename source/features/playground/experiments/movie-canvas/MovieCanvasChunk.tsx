import { Cell, For, useScopeContext } from "retend";
import type { PatternTemplateProps } from "../../components/InfiniteCanvas/InfiniteRepeatedPattern";
import classes from "./MovieCanvasChunk.module.css";
import {
  InfiniteCanvasScope,
  InfiniteRepeatedPatternScope,
} from "../../components/InfiniteCanvas/InfiniteCanvasScope";
import { movieForPoster } from "./movies";

export function MovieCanvasChunk(props: PatternTemplateProps) {
  const { width, height } = useScopeContext(InfiniteCanvasScope);

  const mode = Cell.derived(() => {
    const aspectRatio = width.get() / height.get();
    if (Number.isNaN(aspectRatio)) return [2, 5];

    if (aspectRatio < 0.6) return [4, 3];
    if (aspectRatio < 0.7) return [3, 3];
    if (aspectRatio < 0.8) return [3, 4];
    if (aspectRatio < 1) return [2, 3];
    if (aspectRatio < 1.2) return [3, 5];
    if (aspectRatio < 1.5) return [2, 4];

    return [2, 5];
  });

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

  const posterRow = Cell.derived(() => {
    return row.get() * subgridRows.get() + localRow;
  });

  const posterCol = Cell.derived(() => {
    return col.get() * subgridCols.get() + localCol;
  });

  const movie = Cell.derived(() => {
    return movieForPoster(posterRow.get(), posterCol.get());
  });

  const isOddColumn = Cell.derived(() => {
    return posterCol.get() % 2 !== 0;
  });

  const marginOffsetY = Cell.derived(() => {
    if (!isOddColumn.get() || height.get() === 0) return 0;
    return (-1.5 * width.get()) / height.get() / subgridCols.get();
  });

  const src = Cell.derived(() => {
    return movie.get().posterUrl;
  });

  const alt = Cell.derived(() => {
    return movie.get().title;
  });

  const handleClick = () => {
    const targetRow = row.get() + (localRow + 0.5) / subgridRows.get() - 0.5;
    const targetCol = col.get() + (localCol + 0.5) / subgridCols.get() - 0.5;

    center(targetRow, targetCol, { offsetY: marginOffsetY.get() });
  };

  return (
    <button
      type="button"
      class={classes.poster}
      data-odd-column={isOddColumn}
      data-row={posterRow}
      data-col={posterCol}
      onClick={handleClick}
    >
      <img src={src} alt={alt} class={classes.image} loading="lazy" />
    </button>
  );
}
