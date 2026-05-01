import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Glass } from "./glasses/Glass";
import { Cell } from "retend";

const Glasses: RouteComponent = () => {
  const state = Cell.source<"expanded" | "collapsed">("collapsed");

  const toggleState = () => {
    const nextState = state.get() === "expanded" ? "collapsed" : "expanded";
    state.set(nextState);
  };

  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Glasses">
        <div class="w-screen h-screen grid place-items-center overflow-clip">
          <Glass state={state} />
          <div class="fixed bottom-15 w-full grid place-items-center">
            <button
              class="px-3 py-2 border border-[#ffffff80] cursor-pointer rounded-3xl"
              onClick={toggleState}
            >
              Close.
            </button>
          </div>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default Glasses;
