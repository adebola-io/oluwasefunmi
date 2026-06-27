import type { PlaygroundItem } from "@/features/playground/types";
import { MovieCanvasIcon } from "@/components/icons/movie-canvas";
import { CubeIcon } from "@/components/icons/cube";
import { GlassesIcon } from "@/components/icons/glasses";
import { RippleIcon } from "@/components/icons/ripple";
import { PaintingWheelIcon } from "@/components/icons/painting-wheel";
import { ShoppingCartIcon } from "@/components/icons/shopping-cart";
import { HaloIcon } from "@/components/icons/halo";
import { KeyboardIcon } from "@/components/icons/keyboard";
import { MusicIcon } from "@/components/icons/music";
import { WalletCardsIcon } from "@/components/icons/wallet-cards";
import { BookIcon } from "@/components/icons/book";

interface ExternalLinkProps {
  url: string;
  children: string;
}

const handleExternalLinkClick = () => {};

function ExternalLink(props: ExternalLinkProps) {
  const { url, children } = props;
  return (
    <a
      onClick--stop={handleExternalLinkClick}
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
    path: "/playground/movie-canvas",
    title: "movie-canvas",
    description: () => (
      <>
        An empty slot for an infinite movie-poster canvas. The plan is a tiled
        wall of generated posters that can keep extending in every direction as
        the viewport moves.
      </>
    ),
    icon: () => <MovieCanvasIcon />,
  },
  {
    path: "/playground/floating-books",
    title: "floating-books",
    description: () => (
      <>
        Recreating the{" "}
        <ExternalLink url="https://press.stripe.com">Stripe Press</ExternalLink>{" "}
        book wall in CSS, with each cover kept on its own transform layer.
        Selecting one locks the list, teleports the detail view to the body, and
        derives the page wash from the active book.
      </>
    ),
    icon: () => <BookIcon />,
  },
  {
    path: "/playground/wallets",
    title: "wallets",
    description: () => (
      <>
        Three CSS wallets, each packed with cards, notes, IDs, stickers, and
        tickets. The closing path is the awkward part: the shared wallet scope
        keeps the old view alive until its animations settle.
      </>
    ),
    icon: () => <WalletCardsIcon />,
  },
  {
    path: "/playground/glasses",
    title: "glasses",
    description: () => (
      <>
        Switchable glasses on a fixed face preview. Each frame is assembled from
        DOM pieces, masks, ridges, and small marks instead of a flat image.
      </>
    ),
    icon: () => <GlassesIcon />,
  },
  {
    path: "/playground/vinyl-player",
    title: "vinyl-player",
    description: () => (
      <>
        Album collections, a basket view, then a vinyl player. The record,
        cover, tone arm, controls, and track list share context cells, so the
        back action steps through those states instead of resetting the route.
      </>
    ),
    icon: () => <MusicIcon />,
  },
  {
    path: "/playground/painting-wheel",
    title: "painting-wheel",
    description: () => (
      <>
        A rotating painting wheel with a side collection panel and a routed
        detail layer. The selected painting is stored in the query string, which
        lets the wheel stage stay mounted behind the details.
      </>
    ),
    icon: () => <PaintingWheelIcon />,
  },
  {
    path: "/playground/css-keyboard",
    title: "css-keyboard",
    description: () => (
      <>
        A DOM keyboard with CSS depth, key presses, WPM tracking, sound packs,
        and theme controls. View mode passes rotation to the shared viewer. Type
        mode sends input into the keyboard.
      </>
    ),
    icon: () => <KeyboardIcon />,
  },
  {
    path: "/playground/three-dimensional-marquee",
    title: "three-dimensional-marquee",
    description: () => (
      <>
        Editable text on a circular path, rotated through the shared 3D viewer.
        The text and color inputs write straight into cells, and the halo stays
        CSS-only. Original by{" "}
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
        A masonry product grid where each card opens a routed detail page.
        Stable image IDs are reused between the list and detail states, which
        gives the transition a continuous anchor. Original by{" "}
        <ExternalLink url="https://x.com/aydahnizzy/status/2009766429780820131">
          @aydahnizzy
        </ExternalLink>
      </>
    ),
    icon: () => <ShoppingCartIcon />,
  },
  {
    path: "/playground/ripple-effect",
    title: "ripple-effect",
    description: () => (
      <>
        A click ripple across a responsive button grid. Each cell derives its
        row and column from its index, computes Euclidean distance from the
        active click, and uses that as its animation delay.
      </>
    ),
    icon: () => <RippleIcon />,
  },
  {
    path: "/playground/curved-css-solid",
    title: "curved-css-solid",
    description: () => (
      <>
        A CSS solid made from regular elements, not WebGL. Width, height, depth,
        curve, color, rotation, dragging, and autorotate all sit in cells that
        feed the generated box faces and shared viewer.
      </>
    ),
    icon: () => <CubeIcon />,
  },
];
