import { Cell } from "retend";
import { useRouteQuery, useRouter } from "retend/router";
import { useMatchMedia } from "retend-utils/hooks";
import type { Bookmark } from "@/types";
import { BOOKMARKS_API_BASE_PATH } from "@/api/bookmarks";

export interface BookmarksResponse {
  items: Bookmark[];
  totalItems: number;
}

export const emptyBookmarksState: BookmarksResponse = {
  items: [],
  totalItems: 0,
};

export function useBookmarks() {
  const router = useRouter();
  const routeQuery = useRouteQuery();
  const routeSearch = routeQuery.get("q");
  const routeTag = routeQuery.get("tag");
  const query = Cell.source(routeSearch.get() ?? "");
  const tag = Cell.source(routeTag.get() ?? "");
  const debouncedQuery = Cell.source(query.get());
  const page = Cell.source(1);
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
      const response = await fetch(`${BOOKMARKS_API_BASE_PATH}?${params.toString()}`, {
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
  const updateUrl = (q: string, t: string) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (t) params.set("tag", t);
    let href = "/bookmarks";
    const search = params.toString();
    if (search) {
      href = `/bookmarks?${search}`;
    }
    void router.navigate(href);
  };

  const handleSearch = (e: Event) => {
    if (e.currentTarget instanceof HTMLInputElement) {
      const val = e.currentTarget.value;
      query.set(val);
      page.set(1);
      updateUrl(val, tag.get());
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
    updateUrl(query.get(), nextTag);
  };

  const handlePagination = (delta: number) => {
    const next = page.get() + delta;
    page.set(next);
  };

  routeSearch.listen((value) => {
    if (value === query.get()) return;
    window.clearTimeout(searchTimeout);
    query.set(value ?? "");
    debouncedQuery.set(value ?? "");
  });
  routeTag.listen((value) => {
    tag.set(value ?? "");
  });

  return {
    state,
    loaded,
    pending: response.pending,
    query,
    tag,
    layout,
    handleSearch,
    handleTagSelect,
    handlePagination,
  };
}
