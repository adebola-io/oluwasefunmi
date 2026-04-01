import { Cell } from "retend";

import type { Sticker as StickerType } from "../data/stickers";
import { useDragGesture } from "./useDragGesture";
import classes from "./Sticker.module.css";

interface Transform {
  tx: number;
  ty: number;
  rotate: number;
}

interface StickerProps extends StickerType {
  index?: Cell<number>;
  initialTransform?: Transform;
  height: string;
  shouldLoadImages?: Cell<boolean>;
  selectedSticker?: Cell<StickerType | null>;
  onSelect?: (item: StickerType) => void;
  onDismiss?: () => void;
  onInitialAnimationEnd?: () => void;
  isFinalSticker?: boolean;
}

export const Sticker = (props: StickerProps) => {
  const {
    initialTransform: init,
    index,
    selectedSticker,
    onSelect,
    onDismiss,
    shouldLoadImages,
    onInitialAnimationEnd,
    isFinalSticker,
    height,
    ...sticker
  } = props;

  const loaded = Cell.source(false);
  const imageLoaded = Cell.source(false);

  const isSelected = Cell.derived(
    () => selectedSticker?.get()?.name === sticker.name
  );
  const isNotSelected = Cell.derived(() => {
    const selected = selectedSticker?.get();
    return selected !== null && selected?.name !== sticker.name;
  });
  const drag = useDragGesture(init, isSelected, onDismiss);
  const imageSrc = Cell.derived(() =>
    shouldLoadImages!.get() ? sticker.imageUrl : undefined
  );

  const style = {
    rotate: Cell.derived(() =>
      isSelected.get() ? "0deg" : `${init!.rotate}deg`
    ),
    scale: Cell.derived(() =>
      isSelected.get()
        ? 2.5
        : drag.isDragging.get() && drag.hasMoved.get()
          ? 1.3
          : 1
    ),
    cursor: drag.cursor,
    zIndex: drag.zIndex,
    translate: Cell.derived(() => {
      return isSelected.get()
        ? `${drag.dismissTx.get()}px ${drag.dismissTy.get()}px`
        : `${drag.tx.get()}px ${drag.ty.get()}px`;
    }),
    transitionProperty: drag.transitionProperty,
    "--height": height,
    "--index": index!.get(),
  };

  const handlePointerUp = (e: PointerEvent) => {
    drag.handlePointerUp(e);
    if (drag.hasMoved.get()) return;
    onSelect?.(props);
  };

  return (
    <button
      type="button"
      class={[
        classes.sticker,
        {
          [classes.animated]: Cell.derived(() => !loaded.get()),
          [classes.inactive]: isNotSelected,
        },
      ]}
      style={style}
      onPointerDown={drag.handlePointerDown}
      onPointerMove={drag.handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={drag.handlePointerUp}
      onAnimationEnd={() => {
        loaded.set(true);
        if (isFinalSticker) onInitialAnimationEnd?.();
      }}
      onAnimationCancel={() => {
        loaded.set(true);
        if (isFinalSticker) onInitialAnimationEnd?.();
      }}
    >
      <div class={classes.clip}>
        <div
          class={classes.content}
          style={{ backgroundImage: sticker.placeholderGradient }}
        >
          <img
            draggable="false"
            src={imageSrc}
            alt={sticker.name}
            class={classes.image}
            style={{
              opacity: Cell.derived(() =>
                imageLoaded.get() && isSelected.get() ? 1 : 0
              ),
            }}
            onLoad={() => imageLoaded.set(true)}
          />
        </div>
      </div>
    </button>
  );
};
