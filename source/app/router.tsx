import { defineRoutes, Router } from "retend/router";

import PortfolioHome from "@/pages/PortfolioHome";
import Playground from "@/pages/Playground";
import RandomNotes from "@/pages/RandomNotes";
import RandomNote from "@/pages/RandomNote";
import Contact from "@/pages/Contact";
import Works from "@/pages/Works";

import CurvedCssSolid from "@/features/playground/experiments/CurvedCssSolid";
import RippleEffect from "@/features/playground/experiments/RippleEffect";
import BlurCarousel from "@/features/playground/experiments/BlurCarousel";
import ProductTransition from "@/features/playground/experiments/ProductTransition";
import ProductDetailsPage from "@/features/playground/experiments/ProductDetailsPage";

import { RootLayout } from "@/components/layout/RootLayout";

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
          {
            path: "/product-transition",
            component: ProductTransition,
            children: [{ path: "/:productId", component: ProductDetailsPage }],
          },
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
  return new Router({ routes, stackMode: true });
}
