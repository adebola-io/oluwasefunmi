import { defineRoutes, lazy, Router } from "retend/router";

import PortfolioHome from "@/features/home/HomePage";
import Bookmarks from "@/features/bookmarks/BookmarksPage";
import Works from "@/features/works/WorksPage";

import { RootLayout } from "@/components/layout/RootLayout";

const routes = defineRoutes([
  {
    path: "/",
    component: RootLayout,
    metadata: {
      charset: "utf-8",
      twitterCard: "summary_large_image",
      twitterSite: "@adebola_io",
      twitterCreator: "@adebola_io",
    },
    children: [
      { path: "/", component: PortfolioHome },
      {
        path: "/playground",
        subtree: lazy(() => import("@/features/playground/playgroundRoutes")),
      },
      {
        path: "/random-notes",
        subtree: lazy(() => import("@/features/notes/notesRoutes")),
      },
      { path: "/works", component: Works },
      { path: "/bookmarks", component: Bookmarks },
    ],
  },
]);

export function createRouter() {
  return new Router({ routes, stackMode: true });
}
