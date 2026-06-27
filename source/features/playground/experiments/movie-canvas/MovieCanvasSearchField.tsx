import { type Cell, type SourceCell } from "retend";
import { Input } from "retend-utils/components";
import classes from "./MovieCanvasSearch.module.css";

interface MovieCanvasSearchFieldProps {
  activeOptionId: Cell<string | undefined>;
  focused: SourceCell<boolean>;
  inputRef: SourceCell<HTMLInputElement | null>;
  query: SourceCell<string>;
  showMatches: Cell<boolean>;
  onKeyDown: (event: KeyboardEvent) => void;
  onSubmit: () => void;
}

export function MovieCanvasSearchField(props: MovieCanvasSearchFieldProps) {
  const {
    activeOptionId,
    focused,
    inputRef,
    query,
    showMatches,
    onKeyDown,
    onSubmit,
  } = props;

  return (
    <form class={classes.field} onSubmit--prevent={onSubmit}>
      <button
        type="submit"
        class={classes.iconButton}
        aria-label="Search movies"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" class={classes.icon}>
          <path
            d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
      <Input
        ref={inputRef}
        type="search"
        model={query}
        placeholder="Search movies"
        aria-label="Search movies"
        aria-autocomplete="list"
        aria-controls="movie-search-results"
        aria-activedescendant={activeOptionId}
        aria-expanded={showMatches}
        class={classes.input}
        role="combobox"
        onFocus={() => focused.set(true)}
        onBlur={() => focused.set(false)}
        onKeyDown={onKeyDown}
      />
    </form>
  );
}
