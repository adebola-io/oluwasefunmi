import { Hono } from "hono";
import { registerApiRoutes } from "./source/api";

const app = new Hono();

registerApiRoutes(app);

app.all("*", (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
