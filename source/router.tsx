import { defineRoutes, Router } from "retend/router";

// Pages
import PortfolioHome from "./pages/PortfolioHome";
import Explorations from "./pages/Explorations";
import RandomNotes from "./pages/RandomNotes";
import RandomNote from "./pages/RandomNote";
import Contact from "./pages/Contact";

// Explorations
import CurvedCssSolid from "./explorations/CurvedCssSolid";
import RippleEffect from "./explorations/RippleEffect";
import BlurCarousel from "./explorations/BlurCarousel";

import { RootLayout } from "./components/RootLayout";

const routes = defineRoutes([
  {
    path: "/",
    component: RootLayout,
    children: [
      { path: "/", component: PortfolioHome },
      {
        path: "/explorations",
        children: [
          { path: "/", component: Explorations },
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
      { path: "/contact", component: Contact },
    ],
  },
]);

export function createRouter() {
  return new Router({ routes });
}
