import { Cell, For, If, onSetup } from "retend";
import type { RouteComponent } from "retend/router";
import { LayeredCard } from "@/components/ui/LayeredCard";
import classes from "./Bookmarks.module.css";
import { PageTitle } from "@/components/layout/PageTitle";
import { StarShower } from "@/components/ui/StarShower";
import { SITE_URL } from "@/constants";
import type { Bookmark } from "@/types";
import { ArrowIcon } from "@/components/icons/arrow";

interface BookmarkItemProps {
  bookmark: Bookmark;
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
  const { bookmark, index } = props;
  const animationDelay = Cell.derived(() => `${index.get() * 20}ms`);

  return (
    <div class={classes.item} style={{ animationDelay }}>
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
    </div>
  );
};

const Bookmarks: RouteComponent = () => {
  const query = Cell.source("");
  const page = Cell.source(1);
  const bookmarksState = Cell.source(emptyBookmarksState);
  const isLoading = Cell.source(true);
  const bookmarkCount = Cell.derived(() => bookmarksState.get().totalItems);
  const currentPage = Cell.derived(() => bookmarksState.get().page);
  const totalPages = Cell.derived(() => bookmarksState.get().totalPages);
  const items = Cell.derived(() => bookmarksState.get().items);
  const updateUrl = (value: string, nextPage: number) => {
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("q", value); else url.searchParams.delete("q");
    if (nextPage === 1) url.searchParams.delete("page"); else url.searchParams.set("page", String(nextPage));
    window.history.replaceState(window.history.state, "", `${url.pathname}?${url.searchParams.toString()}`);
  };
  const loadBookmarks = async () => {
    const params = new URLSearchParams();
    const search = query.get().trim();
    isLoading.set(true);
    params.set("page", String(page.get()));
    if (search) params.set("q", search);

    try {
      const response = await fetch(`/__api/bookmarks?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to fetch bookmarks");
      bookmarksState.set((await response.json()) as BookmarksResponse);
    } catch {
      bookmarksState.set(emptyBookmarksState);
    }

    isLoading.set(false);
  };
  const handleSearch = (e: InputEvent & { currentTarget: HTMLInputElement }) => {
    const value = e.currentTarget.value;
    query.set(value);
    page.set(1);
    updateUrl(value, 1);
    void loadBookmarks();
  };
  const handlePrev = () => {
    const nextPage = currentPage.get() - 1;
    page.set(nextPage);
    updateUrl(query.get(), nextPage);
    void loadBookmarks();
  };
  const handleNext = () => {
    const nextPage = currentPage.get() + 1;
    page.set(nextPage);
    updateUrl(query.get(), nextPage);
    void loadBookmarks();
  };
  onSetup(() => {
    const url = new URL(window.location.href);
    const nextPage = Number(url.searchParams.get("page"));
    query.set(url.searchParams.get("q") ?? "");
    if (Number.isInteger(nextPage) && nextPage > 0) page.set(nextPage);
    void loadBookmarks();
  });

  return (
    <div class={classes.bookmarks}>
      <StarShower />
      <div class={classes.container}>
        <div class={classes.hero}>
          <PageTitle name="Bookmarks." />
        </div>
        <p class={classes.intro}>A running collection of links I keep around for engineering, interface work, writing, and fictional worlds worth revisiting.</p>

        <div class={classes.controls}>
          <input type="search" value={query} placeholder="Search bookmarks" class={classes.search} onInput={handleSearch} />

          <div class={classes.pagination}>
            <button type="button" class={classes.paginationButton} disabled={Cell.derived(() => currentPage.get() === 1)} onClick={handlePrev}>Prev</button>
            <span class={classes.pageLabel}>{Cell.derived(() => `Page ${currentPage.get()} of ${totalPages.get()}`)}</span>
            <button type="button" class={classes.paginationButton} disabled={Cell.derived(() => currentPage.get() === totalPages.get())} onClick={handleNext}>Next</button>
          </div>
        </div>

        {If(isLoading, () => <div class={classes.loading}>loading archive</div>)}
        {If(Cell.derived(() => !isLoading.get() && bookmarkCount.get() === 0), () => <div class={classes.error}>No bookmarks found.</div>)}
        <div class={classes.board}>{For(items, (bookmark, i) => <BookmarkItem bookmark={bookmark} index={i} />)}</div>
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
