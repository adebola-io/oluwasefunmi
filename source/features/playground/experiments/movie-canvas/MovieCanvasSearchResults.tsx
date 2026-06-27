import { Cell, For, If, type SourceCell } from "retend";
import type { MovieCanvasMovie } from "./movies";
import { getOptionId } from "./MovieCanvasSearch";
import classes from "./MovieCanvasSearch.module.css";

interface MovieCanvasSearchResultsProps {
  activeIndex: SourceCell<number>;
  matches: Cell<MovieCanvasMovie[]>;
  showMatches: Cell<boolean>;
  onSelect: (movie: MovieCanvasMovie) => void;
}

export function MovieCanvasSearchResults(props: MovieCanvasSearchResultsProps) {
  const { activeIndex, matches, showMatches, onSelect } = props;

  return If(showMatches, () => (
    <div id="movie-search-results" class={classes.results} role="listbox">
      {For(matches, (movie, index) => (
        <MovieCanvasSearchResult
          activeIndex={activeIndex}
          index={index}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  ));
}

interface MovieCanvasSearchResultProps {
  activeIndex: SourceCell<number>;
  index: Cell<number>;
  movie: MovieCanvasMovie;
  onSelect: (movie: MovieCanvasMovie) => void;
}

function MovieCanvasSearchResult(props: MovieCanvasSearchResultProps) {
  const { activeIndex, index, movie, onSelect } = props;
  const active = Cell.derived(() => activeIndex.get() === index.get());
  const handlePointerDown = (event: PointerEvent) => {
    event.preventDefault();
    onSelect(movie);
  };

  return (
    <button
      id={getOptionId(movie)}
      type="button"
      class={classes.result}
      data-active={active}
      role="option"
      aria-selected={active}
      onPointerDown={handlePointerDown}
    >
      {movie.title}
    </button>
  );
}
