import { Cell } from "retend";

import type { Sticker as StickerType } from "../data/stickers";
import classes from "./Sticker.module.css";

interface StickerProps extends StickerType {
  index: Cell<number>;
  initialTransform: Cell<string>;
}

export const Sticker = (props: StickerProps) => {
  const { name, imageUrl, initialTransform } = props;

  return (
    <div class={classes.sticker} style={{ transform: initialTransform }}>
      <div class={classes.clip}>
        <div class={classes.content}>
          <img
            draggable="false"
            src={imageUrl}
            alt={name}
            class={classes.image}
          />
          <p class={classes.text}>{name}</p>
        </div>
      </div>
    </div>
  );
};
