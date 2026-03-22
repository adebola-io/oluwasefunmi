import { Hono } from "hono";
import { bookmarks } from "./source/data/bookmarks";

const app = new Hono();

app.get("/__api", (c) => {
  return c.text("The server is running.");
});

app.get("/__api/bookmarks", (c) => {
  const tag = c.req.query("tag");
  const q = c.req.query("q")?.trim().toLowerCase();
  const rawPage = Number(c.req.query("page"));
  let page = rawPage;
  if (!Number.isInteger(page) || page < 1) {
    page = 1;
  }
  let items = bookmarks;

  if (tag) {
    items = items.filter((bookmark) => bookmark.tags.includes(tag));
  }

  if (q) {
    items = items.filter((bookmark) => {
      return (
        bookmark.id.toLowerCase().includes(q) ||
        bookmark.link.toLowerCase().includes(q) ||
        bookmark.notes.toLowerCase().includes(q) ||
        bookmark.openGraph.title.toLowerCase().includes(q) ||
        bookmark.openGraph.description.toLowerCase().includes(q) ||
        bookmark.openGraph.siteName.toLowerCase().includes(q) ||
        bookmark.tags.some((item) => item.toLowerCase().includes(q))
      );
    });
  }

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / 20));
  if (page > totalPages) {
    page = totalPages;
  }
  return c.json({
    items: items.slice(0, page * 20),
    totalItems,
  });
});

app.get("/__api/bookmarks/:id", (c) => {
  const bookmark = bookmarks.find((item) => item.id === c.req.param("id"));

  if (!bookmark) {
    return c.text("Not found", 404);
  }

  return c.json(bookmark);
});

app.all("/__api/*", (c) => {
  return c.text("Not found", 404);
});

app.all("*", (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
