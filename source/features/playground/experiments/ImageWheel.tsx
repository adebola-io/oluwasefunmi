import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { type Painting, paintings } from "@/data/paintings";
import { Cell, For, If } from "retend";
import { Viewer } from "../components/Viewer/Viewer";
import { PaintingImage } from "./Painting";
import { InteractionPanel } from "../components/InteractionPanel/InteractionPanel";

const MODE_OPTIONS = [
  {
    value: "select",
    label: "Select",
    hint: "Click on paintings to select them",
  },
  { value: "view", label: "Pan View", hint: "Drag to rotate the wheel view" },
];

const ImageWheel: RouteComponent = () => {
  const selectedPainting = Cell.source<Painting | null>(null);
  const mode = Cell.source<"view" | "select">("select");

  const isViewerEnabled = Cell.derived(() => mode.get() === "view");
  const isSelectMode = Cell.derived(() => mode.get() === "select");

  return (
    <div class="w-dvw h-dvh overflow-hidden bg-[#050505] text-gray-400">
      <PlaygroundLayout title="Image Wheel">
        <div class="relative w-full h-full grid place-items-center">
          {If(selectedPainting, {
            true: (selected: Painting | null) =>
              selected && (
                <PaintingImage
                  id={String(selected.id)}
                  data={selected}
                  index={Cell.source(0)}
                  isSelected
                />
              ),
            false: () => (
              <>
                <Viewer isEnabled={isViewerEnabled} initialRx={-19.57}>
                  <div
                    class={[
                      "relative grid h-[90dvh] w-[90dvw] items-center justify-center",
                      "transition-transform duration-200 transform-3d",
                      "[--offset-path:circle(40%)] max-sm:[--offset-path:circle(25%)]",
                      "transform-[rotate(-90deg)_rotateY(90deg)]",
                      "animate-rotate",
                    ]}
                  >
                    {For(paintings, (painting, index) => {
                      const handleSelect = () => {
                        console.log("Hello world.");
                        // selectedPainting.set(painting)
                      };
                      return (
                        <PaintingImage
                          data={painting}
                          index={index}
                          onSelected={handleSelect}
                          isInteractive={isSelectMode}
                        />
                      );
                    })}
                  </div>
                </Viewer>
                <InteractionPanel mode={mode} modeOptions={MODE_OPTIONS} />
              </>
            ),
          })}
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
