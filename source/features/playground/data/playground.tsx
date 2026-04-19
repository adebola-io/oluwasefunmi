import type { PlaygroundItem } from "@/features/playground/types";
import { CubeIcon } from "@/components/icons/cube";
import { RippleIcon } from "@/components/icons/ripple";
import { CarouselIcon } from "@/components/icons/carousel";
import { PaintingWheelIcon } from "@/components/icons/painting-wheel";
import { ShoppingCartIcon } from "@/components/icons/shopping-cart";
import { HaloIcon } from "@/components/icons/halo";
import { KeyboardIcon } from "@/components/icons/keyboard";
import { MusicIcon } from "@/components/icons/music";

interface ExternalLinkProps {
  url: string;
  children: string;
}

function ExternalLink(props: ExternalLinkProps) {
  const { url, children } = props;
  return (
    <a
      onClick--stop={() => {}}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      class="hover:underline"
    >
      {children}
    </a>
  );
}

export const playgroundItems: PlaygroundItem[] = [
  {
    path: "/playground/music-player",
    title: "music-player",
    description: () => (
      <>A sleek music player with animated album artwork and smooth playback.</>
    ),
    icon: () => <MusicIcon />,
  },
  {
    path: "/playground/painting-wheel",
    title: "painting-wheel",
    description: () => (
      <>A specialized painting carousel that rotates like a wheel.</>
    ),
    icon: () => <PaintingWheelIcon />,
  },
  {
    path: "/playground/css-keyboard",
    title: "css-keyboard",
    description: () => (
      <>A 3D keyboard implementation using pure CSS transformations.</>
    ),
    icon: () => <KeyboardIcon />,
  },
  {
    path: "/playground/three-dimensional-marquee",
    title: "three-dimensional-marquee",
    description: () => (
      <>
        3d marquee rotating text with a halo effect, in pure CSS. Original by{" "}
        <ExternalLink url="https://x.com/dejager/status/2012219287952380320">
          @dejager
        </ExternalLink>
      </>
    ),
    icon: () => <HaloIcon />,
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
];
