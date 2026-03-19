import { Cell, createUnique } from "retend";
import { useCurrentRoute } from "retend/router";
import { UniqueTransition } from "retend-utils/components";
import { paintings } from "@/data/paintings";
import { Viewer } from "../components/Viewer/Viewer";
import { Wheel } from "./Wheel";

export const PaintingStage = createUnique(() => {
  const currentRoute = useCurrentRoute();
  const selectedPainting = Cell.derived(() => {
    const paintingId = currentRoute.get().params.get("paintingId");
    if (!paintingId) return null;
    return (
      paintings.find(
        (painting) => painting.id === Number.parseInt(paintingId, 10),
      ) ?? null
    );
  });
  const noPaintingSelected = Cell.derived(() => {
    return selectedPainting.get() === null;
  });

  return (
    <UniqueTransition transitionDuration="500ms">
      <div class="w-[90dvw] h-[90dvh] grid place-items-center transform-3d">
        <Viewer isEnabled={noPaintingSelected}>
          <Wheel selectedPainting={selectedPainting} />
        </Viewer>
      </div>
    </UniqueTransition>
  );
});
