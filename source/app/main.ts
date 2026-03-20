/// <reference types="vite/client" />
import { hydrate } from "retend-server/client";
import { createRouter } from "./router";
import { RetendDevTools } from "retend-web-devtools";

hydrate(createRouter, {
  wrap(root) {
    return RetendDevTools({ children: root });
  },
}).then(() => {
  // oxlint-disable-next-line no-console
  console.log("[retend-server] app successfully hydrated.");
});
