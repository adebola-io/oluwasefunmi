import { Cell, If } from "retend";
import type { RouteComponent } from "retend/router";
import { FluidList } from "retend-utils/components";
import classes from "./Bookmarks.module.css";
import { PageHeader } from "@/components/layout/PageHeader";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";
import { BookmarkItem } from "./BookmarkItem";
import { useBookmarks } from "./Bookmarks.hooks";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={classes.searchIcon}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const Bookmarks: RouteComponent = () => {
  const { state, loaded, query, layout, handleSearch, handlePagination } =
    useBookmarks();
  const items = Cell.derived(() => state.get().items);
  const page = Cell.derived(() => state.get().page);
  const totalItems = Cell.derived(() => state.get().totalItems);
  const totalPages = Cell.derived(() => state.get().totalPages);
  const showEmpty = Cell.derived(() => loaded.get() && totalItems.get() === 0);

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
        {If(showEmpty, () => (
          <div class={classes.error}>No items found in the archive.</div>
        ))}
        <div class={classes.centeredGrid}>
          <FluidList
            items={items}
            itemKey="id"
            class={classes.board}
            direction="inline"
            maxColumns={Cell.derived(() => layout.get().columns)}
            itemWidth={Cell.derived(() => layout.get().width)}
            gap="24px"
            speed="300ms"
            easing="var(--ease-spring)"
            Template={BookmarkItem}
          />
        </div>
        <div class={classes.pagination}>
          <button
            type="button"
            class={classes.paginationButton}
            disabled={Cell.derived(() => page.get() === 1)}
            onClick={() => handlePagination(-1)}
          >
            Prev
          </button>
          <span class={classes.pageLabel}>
            {Cell.derived(() => `${page.get()} / ${totalPages.get()}`)}
          </span>
          <button
            type="button"
            class={classes.paginationButton}
            disabled={Cell.derived(() => page.get() === totalPages.get())}
            onClick={() => handlePagination(1)}
          >
            Next
          </button>
        </div>
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
