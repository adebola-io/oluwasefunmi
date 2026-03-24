import type { Hono } from "hono";
import { bookmarks } from "@/data/bookmarks";

const BOOKMARKS_PAGE_SIZE = 20;

export const BOOKMARKS_API_BASE_PATH = "/__api/bookmarks";

export function bookmarkByIdPath(id: string) {
  return `${BOOKMARKS_API_BASE_PATH}/${id}`;
}

function normalizePage(rawPage: number) {
  if (!Number.isInteger(rawPage) || rawPage < 1) {
    return 1;
  }
  return rawPage;
}

function matchesQuery(bookmark: (typeof bookmarks)[number], query: string) {
  return (
    bookmark.id.toLowerCase().includes(query) ||
    bookmark.link.toLowerCase().includes(query) ||
    bookmark.notes.toLowerCase().includes(query) ||
    bookmark.openGraph.title.toLowerCase().includes(query) ||
    bookmark.openGraph.description.toLowerCase().includes(query) ||
    bookmark.openGraph.siteName.toLowerCase().includes(query) ||
    bookmark.tags.some((item) => item.toLowerCase().includes(query))
  );
}

function queryBookmarks(page: number, tag?: string, query?: string) {
  let currentPage = normalizePage(page);
  let items = bookmarks;

  if (tag) {
    items = items.filter((bookmark) => bookmark.tags.includes(tag));
  }

  const normalizedQuery = query?.trim().toLowerCase();
  if (normalizedQuery) {
    items = items.filter((bookmark) => matchesQuery(bookmark, normalizedQuery));
  }

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / BOOKMARKS_PAGE_SIZE));
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  return {
    items: items.slice(0, currentPage * BOOKMARKS_PAGE_SIZE),
    totalItems,
  };
}

export function registerBookmarksApi(app: Hono) {
  app.get(BOOKMARKS_API_BASE_PATH, (c) => {
    const tag = c.req.query("tag");
    const query = c.req.query("q");
    const page = Number(c.req.query("page"));

    return c.json(queryBookmarks(page, tag, query));
  });

  app.get(`${BOOKMARKS_API_BASE_PATH}/:id`, (c) => {
    const bookmark = bookmarks.find((item) => item.id === c.req.param("id"));
    if (!bookmark) {
      return c.text("Not found", 404);
    }

    return c.json(bookmark);
  });
}
