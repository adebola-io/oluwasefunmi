import { Cell, For, If } from "retend";
import type { RouteComponent } from "retend/router";
import { FluidList } from "retend-utils/components";
import { useIntersectionObserver } from "retend-utils/hooks";
import classes from "./Bookmarks.module.css";
import { PageHeader } from "@/components/layout/PageHeader";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";
import { BookmarkItem } from "./BookmarkItem";
import { useBookmarks } from "./Bookmarks.hooks";
import { bookmarks } from "@/data/bookmarks";
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

const TAG_COLORS: Record<string, string> = {
  frontend: "#2563eb",
  design: "#db2777",
  fintech: "#059669",
  article: "#7c3aed",
  shaders: "#d97706",
  graphics: "#dc2626",
  product: "#0891b2",
  native: "#4f46e5",
  media: "#ea580c",
  web: "#0d9488",
  tools: "#475569",
  inspiration: "#c026d3",
  dev: "#4338ca",
  react: "#0891b2",
  typescript: "#2563eb",
  css: "#1d4ed8",
  animation: "#db2777",
  portfolio: "#059669",
  blog: "#d97706",
  resource: "#7c3aed",
  interactive: "#0891b2",
};
const ALL_TAGS = Array.from(new Set(bookmarks.flatMap((b) => b.tags))).sort();

const getContrastColor = (hexcolor: string) => {
  if (hexcolor.startsWith("hsl")) {
    const match = hexcolor.match(/hsl\(\d+,\s*\d+%?,\s*(\d+)%?\)/);
    if (match) {
      const lightness = parseInt(match[1]);
      return lightness > 55 ? "#000000" : "#ffffff";
    }
    return "#ffffff";
  }

  // Convert hex to RGB
  const r = parseInt(hexcolor.slice(1, 3), 16);
  const g = parseInt(hexcolor.slice(3, 5), 16);
  const b = parseInt(hexcolor.slice(5, 7), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
};

const getTagStyles = (tagName: string) => {
  const normalized = tagName.toLowerCase();
  let bgColor = TAG_COLORS[normalized];

  if (!bgColor) {
    let hash = 0;
    for (let i = 0; i < normalized.length; i++) {
      hash = normalized.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash % 360);
    bgColor = `hsl(${h}, 65%, 42%)`;
  }

  return {
    "--tag-color": bgColor,
    "--tag-text": getContrastColor(bgColor),
  };
};

const Bookmarks: RouteComponent = () => {
  const {
    state,
    loaded,
    isRefreshing,
    pending,
    query,
    tag,
    layout,
    handleSearch,
    handleTagSelect,
    handlePagination,
  } = useBookmarks();
  const loadMoreRef = Cell.source<HTMLDivElement | null>(null);
  const items = Cell.derived(() => state.get().items);
  const totalItems = Cell.derived(() => state.get().totalItems);
  const showEmpty = Cell.derived(() => loaded.get() && totalItems.get() === 0);

  useIntersectionObserver(
    loadMoreRef,
    ([entry]) => {
      if (!entry.isIntersecting) return;
      if (!loaded.get()) return;
      if (pending.get()) return;
      if (items.get().length === totalItems.get()) return;
      handlePagination(1);
    },
    () => ({ rootMargin: "400px 0px" }),
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
          <div class={classes.tagsWrapper}>
            <div class={classes.tagsContainer}>
              {For(ALL_TAGS, (tagName) => (
                <button
                  type="button"
                  class={[
                    classes.tagPill,
                    Cell.derived(() =>
                      tag.get() === tagName ? classes.active : "",
                    ),
                  ]}
                  style={getTagStyles(tagName)}
                  onClick={() => handleTagSelect(tagName)}
                >
                  {tagName}
                </button>
              ))}
            </div>
          </div>
        </div>
        <ClientOnly>
          {If(showEmpty, () => (
            <div class={classes.error}>No items found in the archive.</div>
          ))}
          <div
            class={[classes.centeredGrid, { [classes.dimmed]: isRefreshing }]}
          >
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
