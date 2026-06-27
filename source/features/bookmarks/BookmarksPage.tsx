import { For } from "retend";
import {
  SimpleListBackLink,
  SimpleListPageLayout,
} from "@/components/layout/SimpleListPage";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { SITE_URL } from "@/shared/constants";
import { bookmarks } from "./data/bookmarks";

const Bookmarks = () => {
  return (
    <SimpleListPageLayout>
      <SimpleListBackLink href="/" label="back to home" />
      <header class={listClasses.header}>
        <h1 id="page-title" class={listClasses.title} title="Bookmarks">
          Bookmarks
        </h1>
        <div class={listClasses.subtitle}>
          <p>Saved writing, tools, references, and interface material.</p>
        </div>
      </header>
      <ul class={[listClasses.list, "staggering"]}>
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
    title: "Bookmarks | Oluwasefunmi Akomolafe",
    description: "Saved writing, tools, references, and interface material.",
    ogTitle: "Bookmarks | Oluwasefunmi Akomolafe",
    ogDescription: "Saved writing, tools, references, and interface material.",
    ogImage: `${SITE_URL}/og/home.png`,
    twitterTitle: "Bookmarks | Oluwasefunmi Akomolafe",
    twitterDescription:
      "Saved writing, tools, references, and interface material.",
    twitterImage: `${SITE_URL}/og/home.png`,
  };
};

export default Bookmarks;
