import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Glass } from "../components/Glass";
import { Viewer } from "../components/Viewer/Viewer";
import { useWindowSize } from "retend-utils/hooks";
import { Cell } from "retend";

const Glasses = () => {
  const { width } = useWindowSize();
  const transform = Cell.derived(() => {
    return width.get() < 400 ? "scale(0.5) translateX(25%)" : "scale(1)";
  });

  return (
    <PlaygroundLayout title="Glasses">
      <div class="w-screen h-screen grid place-items-center">
        <div class="w-300 h-100 max-w-[90dvw] grid place-items-center">
          <div style={{ transform, transformOrigin: "center left" }}>
            <Viewer>
              <Glass />
            </Viewer>
          </div>
        </div>
      </div>
    </PlaygroundLayout>
  );
};

export default Glasses;
