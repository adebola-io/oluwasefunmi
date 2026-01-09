import { defineConfig } from "vite";
import path from "node:path";
import fs from "node:fs";
import { retend } from "retend-web/plugin";
import { retendSSG } from "retend-server/plugin";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";

const notes = fs.existsSync("./source/content/notes")
  ? fs.readdirSync("./source/content/notes").map((name) => `/random-notes/${name}`)
  : [];

const pages = [
  "/",
  "/explorations",
  "/curved-css-solid",
  "/ripple-effect",
  "/blur-carousel",
  "/random-notes",
  "/contact",
  ...notes,
];

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "./source") },
  },
  plugins: [
    tailwindcss(),
    { enforce: "pre", ...mdx({ jsxImportSource: "retend" }) },
    retend(),
    retendSSG({
      pages,
      routerModulePath: "./source/router.tsx",
    }),
  ],
});
