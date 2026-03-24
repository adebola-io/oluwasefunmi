import { Cell, createUnique } from "retend";
import { useRouteQuery } from "retend/router";
import { UniqueTransition } from "retend-utils/components";
import { paintings } from "@/features/playground/data/paintings";
import { Viewer, type ViewerAnimation } from "../components/Viewer/Viewer";
import { Wheel } from "./Wheel";
import { ClientOnly } from "retend-server";

export const PaintingStage = createUnique(() => {
  const query = useRouteQuery();
  const rx = Cell.source(0);
  const ry = Cell.source(0);
  const rz = Cell.source(0);
  const scale = Cell.source(1);
  const animateTo = Cell.source<ViewerAnimation | null>(null);
  const paintingId = query.get("paintingId");
  const selectedPainting = Cell.derived(() => {
    const id = paintingId.get();
    if (!id) return null;
    return (
      paintings.find((painting) => painting.id === Number.parseInt(id, 10)) ??
      null
    );
  });
  const noPaintingSelected = Cell.derived(() => {
    return selectedPainting.get() === null;
  });
  noPaintingSelected.listen((value) => {
    if (!value) {
      animateTo.set({ rx: 0, ry: 0, rz: 0, scale: 1 });
    }
  });

  return (
    <ClientOnly>
      <UniqueTransition transitionDuration="500ms">
        <Viewer
          rx={rx}
          ry={ry}
          rz={rz}
          scale={scale}
          animateTo={animateTo}
          isEnabled={noPaintingSelected}
        >
          <Wheel selectedPainting={selectedPainting} />
        </Viewer>
      </UniqueTransition>
    </ClientOnly>
  );
});
