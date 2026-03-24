import { Cell } from "retend";
import type { Bookmark } from "@/types";
import { LayeredCard } from "@/components/ui/LayeredCard";
import classes from "../BookmarksPage.module.css";

export interface BookmarkItemProps {
  item: Bookmark;
  index: Cell<number>;
}

export const BookmarkItem = (props: BookmarkItemProps) => {
  const { item: bookmark } = props;

  return (
    <LayeredCard
      as="a"
      href={bookmark.link}
      target="_blank"
      rel="noreferrer"
      class={classes.bookmarkCard}
      style={{
        "--layered-border-color": bookmark.themeColor,
        "--layered-shadow-color": bookmark.themeColor,
      }}
    >
      <div class={classes.imageContainer}>
        <div
          class={classes.imageFallback}
          style={{ background: bookmark.themeColor }}
        />
        <img
          src={bookmark.image}
          alt={bookmark.openGraph.title}
          class={classes.image}
          loading="lazy"
          onLoad={(e) => {
            if (e.currentTarget instanceof HTMLElement) {
              e.currentTarget.style.opacity = "1";
            }
          }}
          onError={(e) => {
            const target = e.currentTarget;
            if (target instanceof HTMLImageElement) {
              target.style.display = "none";
            }
          }}
        />
      </div>
      <div class={classes.content}>
        <h2 class={classes.title}>{bookmark.openGraph.title}</h2>
        <p class={classes.url}>
          {new URL(bookmark.link).hostname.replace(/^www\./, "")}
        </p>
      </div>
    </LayeredCard>
  );
};
