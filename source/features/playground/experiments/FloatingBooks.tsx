import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import { Book as BookType, books } from "../data/books";
import { Book } from "./books/Book";
import { Cell, For } from "retend";
import { Teleport } from "retend-web";
import { SelectedBookView } from "./books/SelectedBookView";

const FloatingBooks: RouteComponent = () => {
  const selectedBook = Cell.source<BookType | null>(null);
  const listRef = Cell.source<HTMLUListElement | null>(null);
  const backgroundColor = Cell.derived(() => {
    return selectedBook.get()?.backgroundColor ?? "transparent";
  });

  const handleSelect = (item: BookType) => {
    const ul = listRef.get();
    if (!ul) return;

    ul.style.overflow = "hidden";

    selectedBook.set(item);
  };

  const handleClose = async () => {
    selectedBook.set(null);

    const ul = listRef.get();
    if (!ul) return;

    const animations = ul.getAnimations({ subtree: true });
    const promises = animations.map((animation) => animation.finished);
    await Promise.allSettled(promises);

    ul.style.removeProperty("overflow");
  };

  return (
    <div
      style={{ backgroundColor }}
      class="h-full w-full min-h-screen grid place-items-center"
    >
      <PlaygroundLayout title="Floating Books">
        <ul
          ref={listRef}
          class={[
            "h-full w-screen grid place-items-center py-30",
            { "pointer-events-none": selectedBook },
          ]}
        >
          {For(books, (book, index) => (
            <li class="h-[min(30dvh,25dvw)]">
              <Book
                id={book.title}
                item={book}
                selected={selectedBook}
                index={index}
                onSelect={handleSelect}
              />
            </li>
          ))}
        </ul>
        <Teleport to="body">
          <SelectedBookView selectedBook={selectedBook} onClose={handleClose} />
        </Teleport>
      </PlaygroundLayout>
    </div>
  );
};

FloatingBooks.metadata = () => ({
  title: "floating-books | Playground",
  description: "floating-books",
  ogTitle: "floating-books | Playground",
  ogDescription: "floating-books",
  ogImage: `${SITE_URL}/og/floating-books.png`,
  twitterTitle: "floating-books | Playground",
  twitterDescription: "floating-books",
  twitterImage: `${SITE_URL}/og/floating-books.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default FloatingBooks;
