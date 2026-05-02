import { lazy } from "retend/router";
import Glasses from "@/features/playground/experiments/Glasses";

export const playgroundExperimentRoutes = [
  {
    path: "/painting-wheel",
    component: lazy(
      () => import("@/features/playground/experiments/PaintingWheel")
    ),
  },
  {
    path: "/curved-css-solid",
    component: lazy(
      () => import("@/features/playground/experiments/CurvedCssSolid")
    ),
  },
  {
    path: "/ripple-effect",
    component: lazy(
      () => import("@/features/playground/experiments/RippleEffect")
    ),
  },
  {
    path: "/blur-carousel",
    component: lazy(
      () => import("@/features/playground/experiments/BlurCarousel")
    ),
  },
  {
    path: "/product-transitions",
    component: lazy(
      () => import("@/features/playground/experiments/ProductTransition")
    ),
    children: [
      {
        path: "/:productId",
        component: lazy(
          () => import("@/features/playground/experiments/ProductDetailsPage")
        ),
      },
    ],
  },
  {
    path: "/three-dimensional-marquee",
    component: lazy(
      () => import("@/features/playground/experiments/ThreeDimensionalMarquee")
    ),
  },
  {
    path: "/css-keyboard",
    component: lazy(
      () => import("@/features/playground/experiments/CssKeyboard")
    ),
  },
  {
    path: "/vinyl-player",
    component: lazy(
      () => import("@/features/playground/experiments/MusicPlayer")
    ),
  },
  {
    path: "/glasses",
    component: Glasses,
  },
];
