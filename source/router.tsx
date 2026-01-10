import { defineRoutes, Router } from "retend/router";

// Pages
import PortfolioHome from "./pages/PortfolioHome";
import Playground from "./pages/Playground";
import RandomNotes from "./pages/RandomNotes";
import RandomNote from "./pages/RandomNote";
import Contact from "./pages/Contact";
import Works from "./pages/Works";

// Playground
import CurvedCssSolid from "./playground/CurvedCssSolid";
import RippleEffect from "./playground/RippleEffect";
import BlurCarousel from "./playground/BlurCarousel";

import { RootLayout } from "./components/RootLayout";

const routes = defineRoutes([
  {
    path: "/",
    component: RootLayout,
    children: [
      { path: "/", component: PortfolioHome },
      {
        path: "/playground",
        children: [
          { path: "/", component: Playground },
          { path: "/curved-css-solid", component: CurvedCssSolid },
          { path: "/ripple-effect", component: RippleEffect },
          { path: "/blur-carousel", component: BlurCarousel },
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
      { path: "/contact", component: Contact },
    ],
  },
]);

export function createRouter() {
  return new Router({ routes });
}
