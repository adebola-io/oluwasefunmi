import { Cell, If, SourceCell } from "retend";
import { Book as BookType } from "../../data/books";
import { Book } from "./Book";

export interface SelectedBookViewProps {
  selectedBook: SourceCell<BookType | null>;
}

export function SelectedBookView(props: SelectedBookViewProps) {
  const { selectedBook } = props;
  const selectedBookAsync = Cell.derivedAsync(async (get) => {
    const selected = get(selectedBook);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    return selected;
  });

  return If(selectedBookAsync, (selected) => (
    <div class="fixed pointer-events-none top-0 w-full h-full grid grid-cols-2">
      <div class="place-self-center">
        <Book
          id={selected.title}
          item={selected}
          selected={selectedBook}
          index={0}
        />
      </div>
    </div>
  ));
}
