import { For } from "retend";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import { bookmarks } from "@/features/bookmarks/data/bookmarks";

export const BookmarksPreviewList = () => {
  return (
    <ul class={listClasses.list}>
      {For(bookmarks.slice(0, 3), (bookmark) => {
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
              <h3 class={listClasses.itemTitle} title={title}>
                {title}
              </h3>
              <div class={listClasses.itemSubtitle}>{description}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
