import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { For } from "retend";
import { stickers } from "../data/stickers";
import { Sticker } from "../components/Sticker";

const Stickers: RouteComponent = () => {
  return (
    <PlaygroundLayout title="Stickers">
      <div class="w-screen h-screen grid place-items-center *:[grid-area:1/1]">
        {For(stickers, (sticker, index) => {
          return <Sticker index={index} {...sticker} />;
        })}
      </div>
    </PlaygroundLayout>
  );
};

export default Stickers;
