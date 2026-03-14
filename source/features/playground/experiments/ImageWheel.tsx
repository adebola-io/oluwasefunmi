import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { paintings } from "@/data/paintings";
import { For } from "retend";
import { Viewer } from "../components/Viewer/Viewer";
import { PaintingImage } from "./Painting";

const ImageWheel: RouteComponent = () => {
  return (
    <div class="w-dvw min-h-dvh bg-[#050505] text-gray-300">
      <PlaygroundLayout title="Image Wheel">
        <div class="w-dvw h-dvh flex items-center justify-center">
          <Viewer>
            <div
              class={[
                "relative grid h-[90dvh] w-[90dvw] items-center justify-center",
                "transition-transform duration-200 transform-3d",
                "transform-[rotate(-90deg)_rotateY(80deg)] [--offset-path:circle(40%)] max-sm:[--offset-path:circle(25%)]",
              ]}
            >
              {For(paintings, (painting, index) => (
                <PaintingImage data={painting} index={index} />
              ))}
            </div>
          </Viewer>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

ImageWheel.metadata = () => ({
  title: "Image Wheel | Playground",
  description: "A specialized image carousel that rotates like a wheel.",
  ogTitle: "Image Wheel | Playground",
  ogDescription: "A specialized image carousel that rotates like a wheel.",
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "Image Wheel | Playground",
  twitterDescription: "A specialized image carousel that rotates like a wheel.",
  twitterImage: `${SITE_URL}/og/playground.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default ImageWheel;
