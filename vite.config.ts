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
  "/playground",
  "/playground/curved-css-solid",
  "/playground/ripple-effect",
  "/playground/blur-carousel",
  "/random-notes",
  "/contact",
  "/works",
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
