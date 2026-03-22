import { Cell } from "retend";
import { useMatchMedia } from "retend-utils/hooks";
import type { Bookmark } from "@/types";

export interface BookmarksResponse {
  items: Bookmark[];
  page: number;
  totalItems: number;
  totalPages: number;
}

export const emptyBookmarksState: BookmarksResponse = {
  items: [],
  page: 1,
  totalItems: 0,
  totalPages: 1,
};

export function useBookmarks() {
  const url = new URL(window.location.href);
  const pageFromUrl = Number(url.searchParams.get("page"));
  const query = Cell.source(url.searchParams.get("q") ?? "");
  const tag = Cell.source(url.searchParams.get("tag") ?? "");
  const debouncedQuery = Cell.source(query.get());
  const page = Cell.source(
    Number.isInteger(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1,
  );
  const loaded = Cell.source(false);
  const state = Cell.source(emptyBookmarksState);
  let searchTimeout = 0;

  const isMobile = useMatchMedia("(max-width: 768px)");
  const isTablet = useMatchMedia("(max-width: 1024px)");
  const isDesktopSmall = useMatchMedia("(max-width: 1160px)");

  const response = Cell.derivedAsync(async (get, signal) => {
    const params = new URLSearchParams();
    const q = get(debouncedQuery).trim();
    const t = get(tag);
    params.set("page", String(get(page)));
    if (q) params.set("q", q);
    if (t) params.set("tag", t);

    try {
      const response = await fetch(`/__api/bookmarks?${params.toString()}`, {
        signal,
      });
      if (!response.ok) throw new Error("Failed to fetch bookmarks");
      return (await response.json()) as BookmarksResponse;
    } catch {
      return emptyBookmarksState;
    }
  });

  void response.get().then((data) => {
    state.set(data);
    loaded.set(true);
  });
  response.pending.listen((isPending) => {
    if (!isPending) {
      void response.get().then((data) => {
        state.set(data);
        loaded.set(true);
      });
    }
  });

  const layout = Cell.derived(() => {
    if (isMobile.get()) return { columns: 1, width: "100%" };
    if (isTablet.get()) return { columns: 2, width: "340px" };
    if (isDesktopSmall.get()) return { columns: 3, width: "310px" };
    return { columns: 4, width: "266px" };
  });

  const updateUrl = (q: string, t: string, p: number) => {
    const url = new URL(window.location.href);
    if (q) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    if (t) url.searchParams.set("tag", t);
    else url.searchParams.delete("tag");
    if (p === 1) url.searchParams.delete("page");
    else url.searchParams.set("page", String(p));
    window.history.replaceState(
      null,
      "",
      `${url.pathname}?${url.searchParams.toString()}`,
    );
  };

  const handleSearch = (e: Event) => {
    if (e.currentTarget instanceof HTMLInputElement) {
      const val = e.currentTarget.value;
      query.set(val);
      page.set(1);
      updateUrl(val, tag.get(), 1);
      window.clearTimeout(searchTimeout);
      searchTimeout = window.setTimeout(() => {
        debouncedQuery.set(val);
      }, 250);
    }
  };

  const handleTagSelect = (t: string) => {
    const nextTag = tag.get() === t ? "" : t;
    tag.set(nextTag);
    page.set(1);
    updateUrl(query.get(), nextTag, 1);
  };

  const handlePagination = (delta: number) => {
    const next = page.get() + delta;
    page.set(next);
    updateUrl(query.get(), tag.get(), next);
  };

  return {
    state,
    loaded,
    query,
    tag,
    layout,
    handleSearch,
    handleTagSelect,
    handlePagination,
  };
}
