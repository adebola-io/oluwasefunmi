import { Hono } from "hono";
import { bookmarks } from "./source/data/bookmerks";

const app = new Hono();

app.get("/__api", (c) => {
  return c.text("The server is running.");
});

app.get("/__api/bookmarks", (c) => {
  const tag = c.req.query("tag");

  if (tag) {
    return c.json(bookmarks.filter((bookmark) => bookmark.tags.includes(tag)));
  }

  return c.json(bookmarks);
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
