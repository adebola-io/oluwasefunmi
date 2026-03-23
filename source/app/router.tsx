import { defineRoutes, Router } from "retend/router";

import PortfolioHome from "@/features/home/HomePage";
import Bookmarks from "@/features/bookmarks/BookmarksPage";
import Playground from "@/features/playground/PlaygroundPage";
import RandomNotes from "@/features/notes/RandomNotesPage";
import RandomNote from "@/features/notes/RandomNotePage";
import Contact from "@/features/contact/ContactPage";
import Works from "@/features/works/WorksPage";
import { playgroundExperimentRoutes } from "@/features/playground/playgroundExperimentRoutes";

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
        children: [
          { path: "/", component: Playground },
          ...playgroundExperimentRoutes,
        ],
      },
      {
        path: "/random-notes",
        children: [
          { path: "/", component: RandomNotes },
          { path: "/:slug", component: RandomNote },
        ],
      },
      { path: "/works", component: Works },
      { path: "/bookmarks", component: Bookmarks },
      { path: "/contact", component: Contact },
    ],
  },
]);

export function createRouter() {
  return new Router({ routes, stackMode: true });
}
