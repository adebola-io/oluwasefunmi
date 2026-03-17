import type { RouteComponent } from "retend/router";
import { Outlet, useCurrentRoute } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { paintings } from "@/data/paintings";
import { For, Cell, If } from "retend";
import { Viewer } from "../components/Viewer/Viewer";
import { PaintingImage } from "./Painting";
import { CollectionPanel } from "./CollectionPanel";

const PaintingWheel: RouteComponent = () => {
  const currentRoute = useCurrentRoute();
  const isDetailView = Cell.derived(() =>
    currentRoute.get().params.has("paintingId"),
  );

  return (
    <div class="w-dvw h-dvh overflow-hidden bg-[#050505] text-gray-400">
      <PlaygroundLayout title="Painting Wheel">
        {If(isDetailView, {
          true: () => <Outlet />,
          false: () => (
            <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div class="relative w-full h-full grid place-items-center">
                <Viewer initialRx={-30} initialRz={10}>
                  <Wheel />
                </Viewer>
              </div>
              <CollectionPanel />
            </div>
          ),
        })}
      </PlaygroundLayout>
    </div>
  );
};

const Wheel = () => {
  return (
    <div
      class={[
        "relative grid h-[90dvh] w-[90dvw] items-center justify-center",
        "transition-transform duration-200 transform-3d",
        "[--offset-path:circle(35%)] max-sm:[--offset-path:circle(23%)]",
        "transform-[rotate(-90deg)_rotateY(90deg)]",
        "animate-rotate",
      ]}
    >
      {For(paintings, (painting, index) => (
        <PaintingImage
          id={`painting-${painting.id}`}
          data={painting}
          index={index}
        />
      ))}
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
