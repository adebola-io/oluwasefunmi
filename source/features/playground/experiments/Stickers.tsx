import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { For } from "retend";
import { stickers } from "../data/stickers";
import { Sticker } from "@/features/playground/components/Sticker";
import classes from "./Stickers.module.css";

const Stickers: RouteComponent = () => {
  return (
    <PlaygroundLayout title="Stickers">
      <div
        class={[
          classes.sticker,
          "w-screen h-screen grid grid-flow-col place-items-center",
        ]}
      >
        {For(stickers, (sticker, index) => {
          return <Sticker index={index} {...sticker} />;
        })}
      </div>
    </PlaygroundLayout>
  );
};

export default Stickers;
