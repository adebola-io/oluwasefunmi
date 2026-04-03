import PaintingWheel from "@/features/playground/experiments/PaintingWheel";
import CurvedCssSolid from "@/features/playground/experiments/CurvedCssSolid";
import RippleEffect from "@/features/playground/experiments/RippleEffect";
import BlurCarouselDemo from "@/features/playground/experiments/BlurCarousel";
import ProductTransition from "@/features/playground/experiments/ProductTransition";
import ProductDetailsPage from "@/features/playground/experiments/ProductDetailsPage";
import ThreeDimensionalMarquee from "@/features/playground/experiments/ThreeDimensionalMarquee";
import CssKeyboard from "@/features/playground/experiments/CssKeyboard";
import Stickers from "@/features/playground/experiments/Stickers";

export const playgroundExperimentRoutes = [
  {
    path: "/painting-wheel",
    component: PaintingWheel,
  },
  {
    path: "/curved-css-solid",
    component: CurvedCssSolid,
  },
  {
    path: "/ripple-effect",
    component: RippleEffect,
  },
  {
    path: "/blur-carousel",
    component: BlurCarouselDemo,
  },
  {
    path: "/product-transitions",
    component: ProductTransition,
    children: [{ path: "/:productId", component: ProductDetailsPage }],
  },
  {
    path: "/three-dimensional-marquee",
    component: ThreeDimensionalMarquee,
  },
  {
    path: "/css-keyboard",
    component: CssKeyboard,
  },
  {
    path: "/stickers",
    component: Stickers,
  },
];
