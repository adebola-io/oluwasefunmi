import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Glass } from "./glasses/Glass";
import { Cell } from "retend";
import { Viewer } from "../components/Viewer/Viewer";
import { JSX } from "retend/jsx-runtime";

const Glasses: RouteComponent = () => {
  const state = Cell.source<"expanded" | "collapsed">("collapsed");
  const style = Cell.derived((): JSX.StyleValue => {
    return state.get() === "expanded"
      ? { transform: "rotateY(180deg)" }
      : {
          transform: `rotateY(-15deg) rotateX(15deg)`,
          transitionDelay: "300ms",
        };
  });

  const toggleState = () => {
    const nextState = state.get() === "expanded" ? "collapsed" : "expanded";
    state.set(nextState);
  };

  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Glasses">
        <div class="w-screen h-screen grid place-items-center overflow-clip">
          <Viewer>
            <div
              style={style}
              class="duration-800 ease transform-3d w-fit h-fit"
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
