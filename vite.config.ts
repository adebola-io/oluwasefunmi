import { defineConfig } from "vite";
import path from "node:path";
import fs from "node:fs";
import { cloudflare } from "@cloudflare/vite-plugin";
import { retend } from "retend-web/plugins/vite";
import { retendSSG } from "retend-server/plugin";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import { products } from "./source/features/playground/data/products";

const notes = fs.existsSync("./source/content/notes")
  ? fs
      .readdirSync("./source/content/notes")
      .map((name) => `/random-notes/${name}`)
  : [];
const productRoutes = products.map((product: (typeof products)[number]) => {
  return `/playground/product-transitions/${product.id}`;
});

const pages = [
  "/",
  "/playground",
  "/playground/curved-css-solid",
  "/playground/ripple-effect",
  "/playground/blur-carousel",
  "/playground/product-transitions",
  "/playground/three-dimensional-marquee",
  "/playground/css-keyboard",
  "/playground/music-player",
  "/playground/painting-wheel",
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
    cloudflare(),
  ],
});
