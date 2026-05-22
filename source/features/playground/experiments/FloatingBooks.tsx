import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import { books } from "../data/books";
import { Book } from "./books/Book";
import { Viewer } from "../components/Viewer/Viewer";

const FloatingBooks: RouteComponent = () => {
  return (
    <div class="h-full w-full min-h-screen grid place-items-center">
      <PlaygroundLayout title="Floating Books">
        <ul class="h-full grid place-items-center pt-20">
          <Viewer>
            <Book item={books[5]} />
          </Viewer>
        </ul>
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
