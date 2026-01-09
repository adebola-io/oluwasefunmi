import { Router } from "retend/router";
import Home from "./Home";
import CurvedCssSolid from "./CurvedCssSolid";
import RippleEffect from "./RippleEffect";
import BlurCarouselDemo from "@/BlurCarousel";

export function createRouter() {
  return new Router({
    routes: [
      { path: "/", component: Home },
      { path: "/curved-css-solid", component: CurvedCssSolid },
      { path: "/ripple-effect", component: RippleEffect },
      { path: "/blur-carousel", component: BlurCarouselDemo },
    ],
  });
}
