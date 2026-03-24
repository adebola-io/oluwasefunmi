import type { RouteComponent } from "retend/router";
import { useRouteQuery } from "retend/router";
import { If } from "retend";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import { CollectionPanel } from "./CollectionPanel";
import PaintingDetailsPage from "./PaintingDetailsPage";
import { PaintingStage } from "./PaintingStage";

const PaintingWheel: RouteComponent = () => {
  const query = useRouteQuery();

  return (
    <div class="w-dvw h-dvh overflow-hidden bg-[#050505] text-gray-400">
      <PlaygroundLayout title="Painting Wheel">
        <div class="grid relative w-full h-full place-items-center justify-center overflow-hidden">
          {If(query.has("paintingId"), {
            false: () => <PaintingStage />,
          })}
          <CollectionPanel />
          {If(query.has("paintingId"), () => (
            <PaintingDetailsPage />
          ))}
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
