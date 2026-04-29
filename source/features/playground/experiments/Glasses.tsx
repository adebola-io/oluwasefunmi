import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Glass } from "./glasses/Glass";
import { Cell } from "retend";

const Glasses: RouteComponent = () => {
  const state = Cell.source<"expanded" | "collapsed">("expanded");
  const animationCell = Cell.source({ rx: 0, ry: 0, rz: 0, scale: 1 });
  const style = Cell.derived(() => {
    if (state.get() === "expanded") {
      return {
        transform: `rotateY(180deg)`,
      };
    }
    return {
      transform: `rotateY(-25deg) rotateX(20deg)`,
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
        <div class="w-screen h-screen grid place-items-center overflow-hidden">
          <div style={style} class="duration-650 ease transform-3d w-fit h-fit">
            <Glass state={state} />
          </div>
          <div class="fixed bottom-5 w-full grid place-items-center">
            <button onClick={toggleState}>Close.</button>
          </div>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default Glasses;
