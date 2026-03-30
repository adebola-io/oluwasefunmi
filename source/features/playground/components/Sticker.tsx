import { Cell } from "retend";

import type { Sticker as StickerType } from "../data/stickers";
import classes from "./Sticker.module.css";
import { ClientOnly } from "retend-server";

interface StickerProps extends StickerType {
  index: Cell<number>;
  initialTransform: Cell<string>;
  height: Cell<string>;
}

let topZIndex = 0;

export const Sticker = (props: StickerProps) => {
  const { name, imageUrl, initialTransform, height, index } = props;
  const transform = Cell.source(initialTransform.get());
  const isDragging = Cell.source(false);
  const zIndex = Cell.source(0);
  const style = Cell.derived(() => ({
    transform,
    scale: isDragging.get() ? 1.1 : 1,
    cursor: isDragging.get() ? "grabbing" : "grab",
    zIndex: isDragging.get() ? 99 : zIndex.get(),
    "--height": height.get(),
    "--index": index.get(),
  }));
  let pointerId = -1;
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;
  let rotation = 0;

  const handlePointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    const match = transform
      .get()
      .match(/translate\(([-\d.]+)px, ([-\d.]+)px\) rotate\(([-\d.]+)deg\)/);

    if (!match) return;

    pointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    baseX = Number(match[1]);
    baseY = Number(match[2]);
    rotation = Number(match[3]);
    isDragging.set(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.get() || e.pointerId !== pointerId) return;

    transform.set(
      `translate(${baseX + e.clientX - startX}px, ${baseY + e.clientY - startY}px) rotate(${rotation}deg)`
    );
  };

  const handlePointerUp = (e: PointerEvent) => {
    if (e.pointerId !== pointerId) return;

    isDragging.set(false);
    zIndex.set(++topZIndex);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    pointerId = -1;
  };

  return (
    <ClientOnly>
      <div
        class={classes.sticker}
        style={style}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div class={classes.clip}>
          <div class={classes.content}>
            <img
              draggable="false"
              src={imageUrl}
              alt={name}
              class={classes.image}
            />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};
