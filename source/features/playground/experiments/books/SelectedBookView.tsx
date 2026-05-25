import { Cell, If } from "retend";
import { Book as BookType } from "../../data/books";
import { Book } from "./Book";
import classes from "./SelectedBookView.module.css";

export interface SelectedBookViewProps {
  selectedBook: Cell<BookType | null>;
}

export function SelectedBookView(props: SelectedBookViewProps) {
  const { selectedBook } = props;
  const selectedBookAsync = Cell.derivedAsync(async (get) => {
    const selected = get(selectedBook);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    return selected;
  });
  const color = Cell.derived(() => {
    return selectedBook.get()?.foregroundColor ?? "inherit";
  });
  const backgroundColor = Cell.derived(() => {
    return selectedBook.get()?.backgroundColor ?? "transparent";
  });

  return If(selectedBookAsync, (selected) => (
    <div
      class={classes.view}
      style={{
        "--book-detail-ink": color,
        "--book-detail-paper": backgroundColor,
      }}
    >
      <div class={classes.bookStage}>
        <Book
          id={selected.title}
          item={selected}
          selected={selectedBook}
          index={0}
        />
      </div>
      <article class={classes.content}>
        <div>
          <h2 class={classes.title}>{selected.title}</h2>
          <p class={classes.author}>{selected.author}</p>
        </div>
        <p class={classes.blurb}>{selected.blurb}</p>
        <div class={classes.purchaseList}>
          <div class={classes.purchaseRow}>
            <span class={classes.purchaseLabel}>Reader rating</span>
            <span class={classes.purchaseArrow}>{selected.rating}</span>
          </div>
          <a
            href={selected.amazonUrl}
            target="_blank"
            rel="noreferrer noopener"
            class={classes.purchaseRow}
          >
            <span class={classes.purchaseLabel}>
              Purchase on Amazon <span class={classes.purchaseMeta}>↗</span>
            </span>
            <span class={classes.purchaseArrow}>↗</span>
          </a>
        </div>
        <section class={classes.authorSection}>
          <h3 class={classes.authorSectionTitle}>Author</h3>
          <p class={classes.authorInfo}>{selected.authorInfo}</p>
        </section>
      </article>
    </div>
  ));
}
