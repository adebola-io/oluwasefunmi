import type { RouteComponent } from "retend/router";
import { SimpleListPage } from "@/components/layout/SimpleListPage";
import { playgroundItems } from "@/features/playground/data/playground";
import { SITE_URL } from "@/shared/constants";

const playgroundSubtitles: Record<string, string> = {
  "floating-books":
    "Recreation of the Stripe Press website and effects with 3D CSS.",
  wallets: "3D wallets with pull-out cards.",
  glasses: "Clipped path glasses-like transitions with CSS transforms.",
  "vinyl-player":
    "A tactile vinyl player with animated record artwork and playback.",
  "painting-wheel":
    "A specialized painting carousel that rotates like a wheel.",
  "css-keyboard":
    "A 3D keyboard implementation using pure CSS transformations.",
  "three-dimensional-marquee":
    "3D marquee rotating text with a halo effect in pure CSS.",
  "product-transitions":
    "Product card transitions with a drag-to-dismiss gesture.",
  "blur-carousel":
    "A carousel that uses scroll-driven animation to mimic depth of field.",
  "ripple-effect":
    "A grid interaction where clicks trigger cascading ripple effects.",
  "curved-css-solid": "A pure DOM volumetric 3D box built with CSS transforms.",
};

const playgroundListItems = playgroundItems.map((item) => ({
  title: item.title,
  subtitle: playgroundSubtitles[item.title],
  href: item.path,
  actionLabel: "view",
  icon: item.icon,
}));

const Playground: RouteComponent = () => {
  return (
    <SimpleListPage
      title="Playground"
      subtitle="A simple index of interactive UI experiments and visual effects."
      items={playgroundListItems}
    />
  );
};

Playground.metadata = () => ({
  title: "Playground | Oluwasefunmi Akomolafe",
  description:
    "Interactive UI experiments and visual effects showcasing creative web development.",
  ogTitle: "Playground | Oluwasefunmi Akomolafe",
  ogDescription: "Interactive UI experiments and visual effects.",
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "Playground | Oluwasefunmi Akomolafe",
  twitterDescription: "Interactive UI experiments and visual effects.",
  twitterImage: `${SITE_URL}/og/playground.png`,
});

export default Playground;
