import { Cell, If } from "retend";
import type { RouteComponent } from "retend/router";
import { FluidList } from "retend-utils/components";
import { useIntersectionObserver } from "retend-utils/hooks";
import classes from "./BookmarksPage.module.css";
import { PageHeader } from "@/components/layout/PageHeader";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/shared/constants";
import { BookmarkItem } from "./components/BookmarkItem";
import { useBookmarks } from "./hooks/useBookmarks";
import { ClientOnly } from "retend-server";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={classes.searchIcon}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const Bookmarks: RouteComponent = () => {
  const {
    state,
    loaded,
    pending,
    query,
    layout,
    handleSearch,
    handlePagination,
  } = useBookmarks();
  const loadMoreRef = Cell.source<HTMLDivElement | null>(null);
  const items = Cell.derived(() => state.get().items);
  const totalItems = Cell.derived(() => state.get().totalItems);
  const showEmpty = Cell.derived(() => loaded.get() && totalItems.get() === 0);
  const maxColumns = Cell.derived(() => layout.get().columns);
  const itemWidth = Cell.derived(() => layout.get().width);
  useIntersectionObserver(
    loadMoreRef,
    ([entry]) => {
      if (!entry.isIntersecting) return;
      if (!loaded.get()) return;
      if (pending.get()) return;
      if (items.get().length === totalItems.get()) return;
      handlePagination(1);
    },
    () => ({ rootMargin: "400px 0px" })
  );

  return (
    <div>
      <StarShower />
      <div class={classes.container}>
        <PageHeader
          title="Bookmarks."
          subtitle="Here's a curated collection of digital ephemera, tools, and inspirations."
        />
        <div class={classes.controls}>
          <div class={classes.searchContainer}>
            <SearchIcon />
            <input
              type="search"
              value={query}
              placeholder="Search archive"
              class={classes.search}
              onInput={handleSearch}
            />
          </div>
        </div>
        <ClientOnly>
          {If(showEmpty, () => (
            <div class={classes.error}>No items found in the archive.</div>
          ))}
          <div class={classes.centeredGrid}>
            <FluidList
              items={items}
              itemKey="id"
              class={classes.board}
              direction="inline"
              maxColumns={maxColumns}
              itemWidth={itemWidth}
              gap="24px"
              speed="300ms"
              easing="var(--ease-spring)"
              Template={BookmarkItem}
            />
          </div>
        </ClientOnly>
        <div ref={loadMoreRef} class={classes.loadMoreTrigger} />
      </div>
    </div>
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
