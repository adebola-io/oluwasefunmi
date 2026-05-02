import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import { GlassesList } from "./glasses/GlassesList";

const Glasses: RouteComponent = () => {
  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Glasses">
        <div class="w-screen h-screen grid place-items-center overflow-hidden">
          <GlassesList />
        </div>
      </PlaygroundLayout>
    </div>
  );
};

Glasses.metadata = () => ({
  title: "Glasses | Playground",
  description:
    "An interactive CSS glasses demo with style previews and animated try-on transitions.",
  ogTitle: "Glasses | Playground",
  ogDescription:
    "An interactive CSS glasses demo with style previews and animated try-on transitions.",
  ogImage: `${SITE_URL}/og/glasses.png`,
  twitterTitle: "Glasses | Playground",
  twitterDescription:
    "An interactive CSS glasses demo with style previews and animated try-on transitions.",
  twitterImage: `${SITE_URL}/og/glasses.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default Glasses;
