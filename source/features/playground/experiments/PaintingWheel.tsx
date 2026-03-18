import type { RouteComponent } from "retend/router";
import { Outlet } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { Viewer } from "../components/Viewer/Viewer";
import { CollectionPanel } from "./CollectionPanel";
import { Wheel } from "./Wheel";

const PaintingWheel: RouteComponent = () => {
  return (
    <div class="w-dvw h-dvh overflow-hidden bg-[#050505] text-gray-400">
      <PlaygroundLayout title="Painting Wheel">
        <div class="grid relative w-full h-full place-items-center justify-center overflow-hidden">
          <Viewer initialRx={-30} initialRz={10}>
            <div class="h-[90dvh] w-[90dvw] grid place-items-center transform-3d">
              <Wheel />
            </div>
          </Viewer>
          <CollectionPanel />
          <Outlet class="empty:hidden! fixed block! top-0 z-200 w-dvw h-dvh" />
        </div>
      </PlaygroundLayout>
    </div>
  );
};

PaintingWheel.metadata = () => ({
  title: "Painting Wheel | Playground",
  description: "A specialized painting carousel that rotates like a wheel.",
  ogTitle: "Painting Wheel | Playground",
  ogDescription: "A specialized painting carousel that rotates like a wheel.",
  ogImage: `${SITE_URL}/og/painting-wheel.png`,
  twitterTitle: "Painting Wheel | Playground",
  twitterDescription:
    "A specialized painting carousel that rotates like a wheel.",
  twitterImage: `${SITE_URL}/og/playground.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default PaintingWheel;
