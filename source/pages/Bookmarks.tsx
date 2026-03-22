import { Await, Cell, For, If } from "retend";
import type { RouteComponent } from "retend/router";
import { FluidList } from "retend-utils/components";
import { useMatchMedia } from "retend-utils/hooks";
import { LayeredCard } from "@/components/ui/LayeredCard";
import classes from "./Bookmarks.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";
import type { Bookmark } from "@/types";
import { ArrowIcon } from "@/components/icons/arrow";

interface BookmarkItemProps {
  item: Bookmark;
  index: Cell<number>;
}

interface BookmarksResponse {
  items: Bookmark[];
  page: number;
  totalItems: number;
  totalPages: number;
}

const emptyBookmarksState: BookmarksResponse = {
  items: [],
  page: 1,
  totalItems: 0,
  totalPages: 1,
};

const BookmarkItem = (props: BookmarkItemProps) => {
  const { item: bookmark } = props;

  return (
    <LayeredCard
      as="a"
      href={bookmark.link}
      target="_blank"
      rel="noreferrer"
      class={classes.bookmarkCard}
    >
      <div class={classes.imageContainer}>
        <div
          class={classes.imageFallback}
          style={{ background: bookmark.backgroundGradient }}
        />
        <img
          src={bookmark.image}
          alt={bookmark.openGraph.title}
          class={classes.image}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div class={classes.content}>
        <div class={classes.header}>
          <span class={classes.siteName}>{bookmark.openGraph.siteName}</span>
          <ArrowIcon class={classes.linkIcon} />
        </div>
        <h2 class={classes.title}>{bookmark.openGraph.title}</h2>
        <p class={classes.description}>{bookmark.openGraph.description}</p>
        <div class={classes.footer}>
          <div class={classes.tags}>
            {For(bookmark.tags, (tag) => (
              <span class={classes.tag}>{tag}</span>
            ))}
          </div>
          <span class={classes.linkLabel}>visit</span>
        </div>
      </div>
    </LayeredCard>
  );
};

const Bookmarks: RouteComponent = () => {
  const url = new URL(window.location.href);
  const pageFromUrl = Number(url.searchParams.get("page"));
  const query = Cell.source(url.searchParams.get("q") ?? "");
  let initialPage = 1;
  if (Number.isInteger(pageFromUrl) && pageFromUrl > 0) initialPage = pageFromUrl;
  const page = Cell.source(initialPage);
  const isMobile = useMatchMedia("(max-width: 720px)");
  const isTablet = useMatchMedia("(max-width: 1100px)");
  const bookmarksState = Cell.derivedAsync(async (get, signal) => {
    const params = new URLSearchParams();
    const q = get(query).trim();
    params.set("page", String(get(page)));
    if (q) params.set("q", q);
    try {
      const response = await fetch(`/__api/bookmarks?${params.toString()}`, { signal });
      if (!response.ok) throw new Error("Failed to fetch bookmarks");
      return (await response.json()) as BookmarksResponse;
    } catch {
      return emptyBookmarksState;
    }
  });
  const maxColumns = Cell.derived(() => {
    if (isMobile.get()) return 1;
    if (isTablet.get()) return 2;
    return 4;
  });
  const itemWidth = Cell.derived(() => {
    if (isMobile.get()) return "320px";
    if (isTablet.get()) return "300px";
    return "260px";
  });
  const updateUrl = (value: string, nextPage: number) => {
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("q", value);
    else url.searchParams.delete("q");
    if (nextPage === 1) url.searchParams.delete("page");
    else url.searchParams.set("page", String(nextPage));
    window.history.replaceState(window.history.state, "", `${url.pathname}?${url.searchParams.toString()}`);
  };
  const handleSearch = (e: InputEvent & { currentTarget: HTMLInputElement }) => {
    const value = e.currentTarget.value;
    query.set(value);
    page.set(1);
    updateUrl(value, 1);
  };
  const handlePrev = () => {
    const nextPage = page.get() - 1;
    page.set(nextPage);
    updateUrl(query.get(), nextPage);
  };
  const handleNext = () => {
    const nextPage = page.get() + 1;
    page.set(nextPage);
    updateUrl(query.get(), nextPage);
  };

  return (
    <div class={classes.bookmarks}>
      <StarShower />
      <div class={classes.container}>
        <div class={classes.hero}>
          <PageTitle name="Bookmarks." />
        </div>
        <p class={classes.intro}>
          A running collection of links I keep around for engineering, interface work, writing, and fictional worlds worth revisiting.
        </p>
        <Await fallback={<div class={classes.loading}>loading archive</div>}>
          {If(bookmarksState, (state) => (
            <>
              <div class={classes.controls}>
                <input type="search" value={query} placeholder="Search bookmarks" class={classes.search} onInput={handleSearch} />
                <div class={classes.pagination}>
                  <button type="button" class={classes.paginationButton} disabled={state.page === 1} onClick={handlePrev}>Prev</button>
                  <span class={classes.pageLabel}>{`Page ${state.page} of ${state.totalPages}`}</span>
                  <button type="button" class={classes.paginationButton} disabled={state.page === state.totalPages} onClick={handleNext}>Next</button>
                </div>
              </div>
              {If(state.totalItems === 0, () => <div class={classes.error}>No bookmarks found.</div>)}
              <FluidList items={Cell.derived(() => state.items)} itemKey="id" class={classes.board} direction="inline" maxColumns={maxColumns} itemWidth={itemWidth} gap="14px" speed="0.25s" easing="var(--ease-spring)" staggeredDelay="12ms" animateSizing={true} Template={BookmarkItem} />
            </>
          ))}
        </Await>
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
