import { Hono } from "hono";

const app = new Hono();

app.get("/__api", (c) => {
  return c.text("The server is running.");
});

app.all("/__api/*", (c) => {
  return c.text("Not found", 404);
});

app.all("*", (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
