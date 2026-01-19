import type { JSX } from "retend/jsx-runtime";
import { CubeIcon } from "@/components/icons/cube";
import { RippleIcon } from "@/components/icons/ripple";
import { CarouselIcon } from "@/components/icons/carousel";
import { ShoppingCartIcon } from "@/components/icons/shopping-cart";

export interface PlaygroundItem {
  path: string;
  title: string;
  description: () => JSX.Element;
  icon: () => JSX.Element;
}

function ExternalLink({ url, children }: { url: string; children: string }) {
  return (
    <a
      onClick--stop={() => {}}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export const playgroundItems: PlaygroundItem[] = [
  {
    path: "/playground/curved-css-solid",
    title: "curved-css-solid",
    description: () => (
      <>
        Using CSS transforms to create a volumetric 3D box. It uses pure DOM
        elements to achieve smooth curves and full interactivity.
      </>
    ),
    icon: () => <CubeIcon />,
  },
  {
    path: "/playground/ripple-effect",
    title: "ripple-effect",
    description: () => (
      <>
        Optimized grid interaction where clicks trigger cascading ripple effects
        across cells.
      </>
    ),
    icon: () => <RippleIcon />,
  },
  {
    path: "/playground/blur-carousel",
    title: "blur-carousel",
    description: () => (
      <>
        A carousel using scroll-driven animations to mimic physical depth of
        field. Items dynamically blur and recede as they move out of focus.
        Original by{" "}
        <ExternalLink url="https://x.com/SebJVidal/status/2005309959056338981">
          @SebJVidal
        </ExternalLink>
      </>
    ),
    icon: () => <CarouselIcon />,
  },
  {
    path: "/playground/product-transitions",
    title: "product-transitions",
    description: () => (
      <>
        Product card transitions with drag to dismiss gesture. Original by{" "}
        <ExternalLink url="https://x.com/aydahnizzy/status/2009766429780820131">
          @aydahnizzy
        </ExternalLink>
      </>
    ),
    icon: () => <ShoppingCartIcon />,
  },
];
