import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Glass } from "./glasses/Glass";
import { Cell } from "retend";
import { Viewer } from "../components/Viewer/Viewer";

const Glasses: RouteComponent = () => {
  const state = Cell.source<"expanded" | "collapsed">("collapsed");
  const animationCell = Cell.source({ rx: 0, ry: 0, rz: 0, scale: 1 });
  const style = Cell.derived(() => {
    if (state.get() === "expanded") {
      return {
        transform: `rotateY(180deg)`,
      };
    }
    return {
      transform: `rotateY(-15deg) rotateX(15deg)`,
      transitionDelay: "300ms",
    };
  });

  const toggleState = () => {
    console.log("toggle");
    Cell.batch(() => {
      const nextState = state.get() === "expanded" ? "collapsed" : "expanded";
      state.set(nextState);
      if (nextState === "expanded") {
        animationCell.set({ rx: 0, ry: 180, rz: 0, scale: 1 });
      } else {
        animationCell.set({ rx: 0, ry: 0, rz: 0, scale: 1 });
      }
    });
  };

  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Glasses">
        <div class="w-screen h-screen grid place-items-center overflow-clip">
          <Viewer>
            <div
              style={style}
              class="duration-800 ease-(--glass-easing) transform-3d w-fit h-fit"
            >
              <Glass state={state} />
            </div>
          </Viewer>
          <div class="fixed bottom-5 w-full grid place-items-center">
            <button onClick={toggleState}>Close.</button>
          </div>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default Glasses;
