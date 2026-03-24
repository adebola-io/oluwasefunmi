import type { Hono } from "hono";
import { registerBookmarksApi } from "../features/bookmarks/api/bookmarks";

export function registerApiRoutes(app: Hono) {
  app.get("/__api", (c) => c.text("The server is running."));
  registerBookmarksApi(app);
  app.all("/__api/*", (c) => c.text("Not found", 404));
}
