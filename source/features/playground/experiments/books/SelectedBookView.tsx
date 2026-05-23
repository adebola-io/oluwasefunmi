import { Cell, If } from "retend";
import { Book as BookType } from "../../data/books";
import { Book } from "./Book";

export interface SelectedBookViewProps {
  selectedBook: Cell<BookType | null>;
  onClose: () => void;
}

export function SelectedBookView(props: SelectedBookViewProps) {
  const { selectedBook, onClose } = props;
  const selectedBookAsync = Cell.derivedAsync(async (get) => {
    const selected = get(selectedBook);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    return selected;
  });
  const color = Cell.derived(() => {
    return selectedBook.get()?.foregroundColor ?? "inherit";
  });

  return If(selectedBookAsync, (selected) => (
    <div
      class={[
        "fixed top-0 w-full h-full grid grid-cols-2",
        "before:absolute before:size-full before:bg-(--book-color)",
      ]}
      style={{ color }}
    >
      <div class="place-self-center relative">
        <Book
          id={selected.title}
          item={selected}
          selected={selectedBook}
          index={0}
        />
      </div>
      <div class="place-self-center relative">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ));
}
