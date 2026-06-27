import { Cell, useScopeContext } from "retend";
import { InfiniteCanvasScope } from "../../components/InfiniteCanvas/InfiniteCanvasScope";
import { MovieCanvasScope } from "./MovieCanvasScope";
import { MovieCanvasSearchField } from "./MovieCanvasSearchField";
import { MovieCanvasSearchResults } from "./MovieCanvasSearchResults";
import { getNearestMovieFocusRequest } from "./movieFocus";
import type { MovieCanvasMovie } from "./movies";
import classes from "./MovieCanvasSearch.module.css";

export function MovieCanvasSearch() {
  const search = useMovieCanvasSearch();

  return (
    <div
      class={classes.search}
      onPointerDown={search.handlePointerDown}
      onWheel={search.handleWheel}
    >
      <MovieCanvasSearchResults
        activeIndex={search.activeIndex}
        matches={search.matches}
        showMatches={search.showMatches}
        onSelect={search.selectMovie}
      />
      <MovieCanvasSearchField
        activeOptionId={search.activeOptionId}
        focused={search.focused}
        inputRef={search.inputRef}
        query={search.query}
        showMatches={search.showMatches}
        onKeyDown={search.handleKeyDown}
        onSubmit={search.handleSubmit}
      />
    </div>
  );
}

function useMovieCanvasSearch() {
  const { cameraX, cameraY, height, width } =
    useScopeContext(InfiniteCanvasScope);
  const { movieFocusRequest, movieList, selectedMovie } =
    useScopeContext(MovieCanvasScope);
  const query = Cell.source("");
  const focused = Cell.source(false);
  const requestId = Cell.source(0);
  const activeIndex = Cell.source(0);
  const inputRef = Cell.source<HTMLInputElement | null>(null);

  const normalizedQuery = Cell.derived(() => normalizeSearch(query.get()));
  const matches = Cell.derived(() => {
    const value = normalizedQuery.get();
    const result = value
      ? movieList.get().filter((movie) => {
          return normalizeSearch(movie.title).includes(value);
        })
      : [];

    return result.slice(0, 8);
  });

  const showMatches = Cell.derived(() => {
    return (
      focused.get() &&
      normalizedQuery.get().length > 0 &&
      matches.get().length > 0
    );
  });

  const activeOptionId = Cell.derived(() => {
    return showMatches.get()
      ? getOptionId(matches.get()[activeIndex.get()])
      : undefined;
  });

  const selectMovie = (movie: MovieCanvasMovie) => {
    const id = requestId.get() + 1;
    const request = getNearestMovieFocusRequest({
      cameraX: cameraX.get(),
      cameraY: cameraY.get(),
      height: height.get(),
      id,
      movie,
      movies: movieList.get(),
      width: width.get(),
    });
    if (!request) return;

    Cell.batch(() => {
      requestId.set(id);
      query.set("");
      focused.set(false);
      activeIndex.set(0);
      selectedMovie.set(movie);
      movieFocusRequest.set(request);
    });

    const input = inputRef.get();
    if (input) input.value = "";
  };

  const handleSubmit = () => {
    const movie = getActiveMovie(matches.get(), activeIndex.get());
    if (movie) selectMovie(movie);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const movies = matches.get();
    if (movies.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      activeIndex.set((activeIndex.get() + 1) % movies.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex.set((activeIndex.get() + movies.length - 1) % movies.length);
    } else if (event.key === "Tab") {
      event.preventDefault();
      selectMovie(getActiveMovie(movies, activeIndex.get()));
    }
  };

  const handlePointerDown = (event: PointerEvent) => event.stopPropagation();
  const handleWheel = (event: WheelEvent) => event.stopPropagation();

  query.listen(() => activeIndex.set(0));

  return {
    activeIndex,
    activeOptionId,
    focused,
    handleKeyDown,
    handlePointerDown,
    handleSubmit,
    handleWheel,
    inputRef,
    matches,
    query,
    selectMovie,
    showMatches,
  };
}

function getActiveMovie(
  movies: MovieCanvasMovie[],
  activeIndex: number
): MovieCanvasMovie {
  return movies[activeIndex] ?? movies[0]!;
}

export function getOptionId(movie?: MovieCanvasMovie): string | undefined {
  return movie ? `movie-search-option-${movie.id}` : undefined;
}

function normalizeSearch(value: string): string {
  return value.trim().toLowerCase();
}
