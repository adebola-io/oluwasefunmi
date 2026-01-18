import { defineConfig } from "vite";
import path from "node:path";
import fs from "node:fs";
import { retend } from "retend-web/plugin";
import { retendSSG } from "retend-server/plugin";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import { products } from "./source/data/products";

const notes = fs.existsSync("./source/content/notes")
  ? fs
      .readdirSync("./source/content/notes")
      .map((name) => `/random-notes/${name}`)
  : [];
const productRoutes = products.map(
  (product) => `/playground/product-transitions/${product.id}`,
);

const pages = [
  "/",
  "/playground",
  "/playground/curved-css-solid",
  "/playground/ripple-effect",
  "/playground/blur-carousel",
  "/playground/product-transitions",
  "/random-notes",
  "/contact",
  "/works",
  ...notes,
  ...productRoutes,
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
      routerModulePath: "./source/app/router.tsx",
    }),
  ],
});
