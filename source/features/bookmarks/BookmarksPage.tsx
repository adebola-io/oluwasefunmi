import { For } from "retend";
import type { RouteComponent } from "retend/router";
import {
  SimpleListBackLink,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { SITE_URL } from "@/shared/constants";
import { bookmarks } from "./data/bookmarks";

const Bookmarks: RouteComponent = () => {
  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <header class={listClasses.header}>
        <h1 id="page-title" class={listClasses.title} title="Bookmarks">
          Bookmarks
        </h1>
        <div class={listClasses.subtitle}>
          <p>
            A simple index of saved writing, tools, references, and interface
            material.
          </p>
        </div>
      </header>
      <ul class={listClasses.list}>
        {For(bookmarks, (bookmark) => {
          const title = bookmark.openGraph.title;
          const description =
            bookmark.openGraph.description || bookmark.openGraph.siteName;

          return (
            <li class={listClasses.item}>
              <a
                class={listClasses.itemContent}
                href={bookmark.link}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 class={listClasses.itemTitle} title={title}>
                  {title}
                </h2>
                <div class={listClasses.itemSubtitle}>{description}</div>
              </a>
            </li>
          );
        })}
      </ul>
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
