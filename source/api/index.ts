import type { Hono } from "hono";

export function registerApiRoutes(app: Hono) {
  app.get("/__api", (c) => c.text("The server is running."));
  app.all("/__api/*", (c) => c.text("Not found", 404));
}
