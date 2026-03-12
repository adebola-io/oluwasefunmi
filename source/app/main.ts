/// <reference types="vite/client" />
import { hydrate } from "retend-server/client";
import { createRouter } from "./router";
import { RetendDevTools } from "retend-web-devtools";

hydrate(createRouter, {
  wrap(root) {
    return RetendDevTools({ children: root });
  },
}).then(() => {
  console.log("[retend-server] app successfully hydrated.");
});
