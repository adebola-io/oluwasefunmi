import type { JSX } from "retend/jsx-runtime";
import { SimpleBox } from "../../components/SimpleBox";
import type { Book as BookType } from "../../data/books";
import classes from "./Book.module.css";
import { Cell, createUnique } from "retend";
import { UniqueTransition } from "retend-utils/components";
import { useDerivedValue } from "retend-utils/hooks";

interface BookProps {
  item: BookType;
  index: JSX.ValueOrCell<number>;
  onSelect: (book: BookType) => void;
  selected: Cell<BookType | null>;
}

export const Book = createUnique<BookProps>((props) => {
  const { item, index: indexProp, selected } = props.get();

  const onSelect = Cell.derived(() => {
    return props.get().onSelect;
  });

  const index = useDerivedValue(indexProp);
  const bookIndex = Cell.derived(() => {
    return index.get() + 1;
  });
  const isSelected = Cell.derived(() => {
    return selected.get() === item;
  });
  const isNotSelected = Cell.derived(() => {
    return selected.get() && selected.get() !== item;
  });

  const handleClick = () => {
    onSelect.get()?.(item);
  };

  const style = {
    "--book-index": bookIndex,
    "--book-foreground-color": item.foregroundColor,
    "--book-background-color": item.backgroundColor,
    "--book-front-aspect-ratio": item.aspectRatio.frontCover,
    "--book-spine-aspect-ratio": item.aspectRatio.spine,
    "--book-gradient": item.gradient,
    "--book-front-url": `url(${item.frontCover})`,
    "--book-spine-url": `url(${item.spine})`,
  };

  return (
    <UniqueTransition
      transitionDuration="var(--book-transition-duration)"
      transitionTimingFunction="ease"
      respectParentTransform={false}
    >
      <div
        class={classes.bookContainer}
        data-selected={isSelected}
        data-not-selected={isNotSelected}
        style={style}
      >
        <button type="button" class={classes.book} onClick={handleClick}>
          <SimpleBox
            class={classes.pages}
            width="calc(var(--book-width) - var(--book-cover-thickness) * 2)"
            height="calc(var(--book-height) - var(--book-cover-thickness) * 4)"
            depth="calc(var(--book-depth) - var(--book-cover-thickness) * 2)"
          />
          <SimpleBox
            class={classes.front}
            width="var(--book-width)"
            height="var(--book-height)"
            depth="var(--book-cover-thickness)"
          />
          <SimpleBox
            class={classes.back}
            width="var(--book-width)"
            height="var(--book-height)"
            depth="var(--book-cover-thickness)"
          />
          <SimpleBox
            class={classes.spine}
            width="var(--book-depth)"
            height="var(--book-height)"
            depth="var(--book-cover-thickness)"
          />
        </button>
      </div>
    </UniqueTransition>
  );
});
