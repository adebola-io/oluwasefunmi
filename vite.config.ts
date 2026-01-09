import { defineConfig } from "vite";
import path from "node:path";
import { retend } from "retend-web/plugin";
import { retendSSG } from "retend-server/plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "./source") },
  },
  plugins: [
    tailwindcss(),
    retend(),
    retendSSG({
      pages: ["/curved-css-solid", "/blur-carousel", "/ripple-effect"],
      routerModulePath: "./source/router.ts",
    }),
  ],
});
