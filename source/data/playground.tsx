import type { JSX } from "retend/jsx-runtime";
import { CubeIcon } from "../components/icons/cube";
import { RippleIcon } from "../components/icons/ripple";
import { CarouselIcon } from "../components/icons/carousel";
import { TransitionIcon } from "../components/icons/transition";

export interface PlaygroundItem {
  path: string;
  title: string;
  description: () => JSX.Element;
  icon: () => JSX.Element;
}

export const playgroundItems: PlaygroundItem[] = [
  {
    path: "/playground/curved-css-solid",
    title: "Curved CSS Solid",
    description: () => (
      <>
        Pushing the limits of CSS transforms to create a volumetric 3D box
        without WebGL. It uses pure DOM elements to achieve smooth curves and
        full interactivity.
      </>
    ),
    icon: () => <CubeIcon />,
  },
  {
    path: "/playground/ripple-effect",
    title: "Ripple Effect",
    description: () => (
      <>
        An optimized grid interaction where clicks trigger cascading ripple
        effects across hundreds of cells. The focus here was on efficient state
        management to maintain a smooth 60fps.
      </>
    ),
    icon: () => <RippleIcon />,
  },
  {
    path: "/playground/blur-carousel",
    title: "Blur Carousel",
    description: () => (
      <>
        A carousel exploring scroll-driven animations to mimic physical depth of
        field. Items dynamically blur and recede as they move out of focus,
        creating a more natural browsing experience.
      </>
    ),
    icon: () => <CarouselIcon />,
  },
  {
    path: "/playground/product-transition",
    title: "Product Transition",
    description: () => (
      <>
        An exploration of smooth product card transitions and animations for
        e-commerce interfaces.
      </>
    ),
    icon: () => <TransitionIcon />,
  },
];
