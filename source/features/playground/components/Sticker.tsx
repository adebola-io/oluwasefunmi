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
  selectedSticker?: Cell<StickerType | null>;
  onSelect?: (item: StickerType) => void;
  onDismiss?: () => void;
}

export const Sticker = (props: StickerProps) => {
  const {
    initialTransform: init,
    index,
    selectedSticker,
    onSelect,
    onDismiss,
    height,
    ...sticker
  } = props;

  const txdeg = Cell.source(init ? `${init.rotate}deg` : "0deg");
  const loaded = Cell.source(false);

  const isSelected = Cell.derived(() => {
    return selectedSticker?.get()?.name === sticker.name;
  });
  const hasSelectedSticker = Cell.derived(() => {
    return selectedSticker?.get() !== null;
  });
  const isNotSelected = Cell.derived(() => {
    return hasSelectedSticker.get() && !isSelected.get();
  });
  const drag = useDragGesture(init, isSelected, onDismiss);
  const notLoaded = Cell.derived(() => !loaded.get());

  const translate = Cell.derived(() => {
    return isSelected.get()
      ? `${drag.dismissTx.get()}px ${drag.dismissTy.get()}px`
      : `${drag.tx.get()}px ${drag.ty.get()}px`;
  });
  const rotate = Cell.derived(() => {
    return isSelected.get() ? "0deg" : txdeg.get();
  });

  const scale = Cell.derived(() => {
    if (isSelected.get()) return 3.25;
    return drag.isDragging.get() && drag.hasMoved.get() ? 1.3 : 1;
  });

  const style = {
    rotate,
    scale,
    cursor: drag.cursor,
    zIndex: drag.zIndex,
    translate,
    transitionProperty: drag.transitionProperty,
    "--height": height,
    "--index": index?.get() || 0,
  };

  const handleClick = () => {
    // Don't select if the user was dragging
    if (drag.hasMoved.get()) return;
    onSelect?.(props);
  };

  const handleInitialLoad = () => {
    loaded.set(true);
  };

  return (
    <button
      type="button"
      class={[
        classes.sticker,
        { [classes.animated]: notLoaded, [classes.inactive]: isNotSelected },
      ]}
      style={style}
      onPointerDown={drag.handlePointerDown}
      onPointerMove={drag.handlePointerMove}
      onPointerUp={drag.handlePointerUp}
      onPointerCancel={drag.handlePointerUp}
      onClick={handleClick}
      onAnimationEnd={handleInitialLoad}
      onAnimationCancel={handleInitialLoad}
    >
      <div class={classes.clip}>
        <div class={classes.content}>
          <img
            draggable="false"
            src={sticker.imageUrl}
            alt={sticker.name}
            class={classes.image}
          />
        </div>
      </div>
    </button>
  );
};
