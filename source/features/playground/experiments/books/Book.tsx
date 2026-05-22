import { SimpleBox } from "../../components/SimpleBox";
import type { Book as BookType } from "../../data/books";
import classes from "./Book.module.css";

interface BookProps {
  item: BookType;
}

export function Book(props: BookProps) {
  const { item } = props;

  return (
    <div
      class={classes.book}
      style={{
        "--book-foreground-color": item.foregroundColor,
        "--book-background-color": item.backgroundColor,
        "--book-front-aspect-ratio": item.aspectRatio.frontCover,
        "--book-spine-aspect-ratio": item.aspectRatio.spine,
        "--book-gradient": item.gradient,
        "--book-front-url": `url(${item.frontCover})`,
        "--book-spine-url": `url(${item.spine})`,
      }}
    >
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
      <SimpleBox
        class={classes.pages}
        width="calc(var(--book-width) - var(--book-cover-thickness) * 2)"
        height="calc(var(--book-height) - var(--book-cover-thickness) * 2)"
        depth="calc(var(--book-depth) - var(--book-cover-thickness) * 2)"
      />
    </div>
  );
}
