import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { GlassesList } from "./glasses/GlassesList";

const Glasses: RouteComponent = () => {
  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Glasses">
        <div class="w-screen h-screen grid place-items-center overflow-hidden">
          <GlassesList />
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default Glasses;
