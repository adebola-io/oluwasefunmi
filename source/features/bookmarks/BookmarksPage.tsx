import type { RouteComponent } from "retend/router";
import {
  SimpleList,
  SimpleListBackLink,
  SimpleListHeader,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import { SITE_URL } from "@/shared/constants";
import { bookmarks } from "./data/bookmarks";

const bookmarkItems = bookmarks.map((bookmark) => {
  return {
    title: bookmark.openGraph.title,
    subtitle: bookmark.openGraph.description || bookmark.openGraph.siteName,
    href: bookmark.link,
    external: true,
  };
});

const Bookmarks: RouteComponent = () => {
  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <SimpleListHeader title="Bookmarks">
        <p>
          A simple index of saved writing, tools, references, and interface
          material.
        </p>
      </SimpleListHeader>
      <SimpleList items={bookmarkItems} />
    </SimpleListPageLayout>
  );
};

Bookmarks.metadata = () => {
  return {
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
  };
};

export default Bookmarks;
