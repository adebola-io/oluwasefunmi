import { Cell, createUnique } from "retend";

import type { Sticker as StickerType } from "../data/stickers";
import classes from "./Sticker.module.css";

interface Transform {
  tx: number;
  ty: number;
  rotate: number;
}

interface StickerProps extends StickerType {
  index: Cell<number>;
  initialTransform: Transform;
  height: number;
  isSelected?: boolean;
  onSelect?: (item: StickerType) => void;
}

let topZIndex = 0;

export const Sticker = createUnique<StickerProps>((props) => {
  const { name, imageUrl, initialTransform, height, index } = props.get();
  const isSelected = Cell.derived(() => props.get().isSelected);
  const tx = Cell.source(initialTransform.tx);
  const ty = Cell.source(initialTransform.ty);
  const rotate = Cell.source(`${initialTransform.rotate}deg`);

  const translate = Cell.derived(() => {
    if (isSelected.get()) return "0px";

    return `${tx.get()}px ${ty.get()}px`;
  });

  const isDragging = Cell.source(false);
  const scale = Cell.derived(() => {
    return isDragging.get() ? 1.1 : 1;
  });
  const cursor = Cell.derived(() => {
    return isDragging.get() ? "grabbing" : "grab";
  });
  const zIndexHandle = Cell.source(0);
  const zIndex = Cell.derived(() => {
    return isDragging.get() ? 99 : zIndexHandle.get();
  });

  const style = {
    translate,
    rotate,
    scale,
    cursor,
    zIndex,
    "--height": `${height}px`,
    "--index": index.get(),
  };
  let pointerId = -1;
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;

  const handlePointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;

    pointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    baseX = tx.get();
    baseY = ty.get();

    isDragging.set(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.get() || e.pointerId !== pointerId) return;

    Cell.batch(() => {
      tx.set(baseX + e.clientX - startX);
      ty.set(baseY + e.clientY - startY);
    });
  };

  const handlePointerUp = (e: PointerEvent) => {
    if (e.pointerId !== pointerId) return;

    isDragging.set(false);
    zIndexHandle.set(++topZIndex);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    pointerId = -1;
  };

  return (
    <button
      type="button"
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
    </button>
  );
});
