import { For } from "retend";
import listClasses from "@/components/layout/SimpleListPage.module.css";
import uiClasses from "@/components/ui/ui.module.css";
import { bookmarks } from "@/features/bookmarks/data/bookmarks";
import classes from "./HomePage.module.css";

export const BookmarksTabPanel = () => {
  return (
    <section class={classes.tabPanel} aria-labelledby="bookmarks-tab-heading">
      <div class={uiClasses.sectionHeading} id="bookmarks-tab-heading">
        <h2 class={uiClasses.sectionHeadingContent}>Bookmarks</h2>
      </div>
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
                <h3 class={listClasses.itemTitle} title={title}>
                  {title}
                </h3>
                <div class={listClasses.itemSubtitle}>{description}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
