import type { RouteComponent } from "retend/router";
import { SimpleListPage } from "@/components/layout/SimpleListPage";
import { SITE_URL } from "@/shared/constants";
import { bookmarks } from "./data/bookmarks";

const bookmarkItems = bookmarks.map((bookmark) => ({
  title: bookmark.openGraph.title,
  subtitle: bookmark.openGraph.description || bookmark.openGraph.siteName,
  href: bookmark.link,
  external: true,
}));

const Bookmarks: RouteComponent = () => {
  return (
    <SimpleListPage
      title="Bookmarks"
      subtitle="A simple index of saved writing, tools, references, and interface material."
      items={bookmarkItems}
      backHref="/"
      backLabel="back to home"
    />
  );
};

Bookmarks.metadata = () => ({
  title: "Bookmarks | Oluwasefunmi",
  description:
    "A curated collection of digital ephemera, tools, and inspirations.",
  ogTitle: "Bookmarks | Oluwasefunmi",
  ogDescription:
    "A curated collection of digital ephemera, tools, and inspirations.",
  ogImage: `${SITE_URL}/og/bookmarks.png`,
  twitterTitle: "Bookmarks | Oluwasefunmi",
  twitterDescription:
    "A curated collection of digital ephemera, tools, and inspirations.",
  twitterImage: `${SITE_URL}/og/bookmarks.png`,
});

export default Bookmarks;
