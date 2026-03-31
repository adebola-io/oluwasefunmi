import { Cell, createUnique } from "retend";

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
  isSelected?: boolean;
  onSelect?: (item: StickerType) => void;
}

export const Sticker = createUnique<StickerProps>((props) => {
  const {
    name,
    imageUrl,
    initialTransform: init,
    index,
    onSelect,
  } = props.get();
  const isSelected = Cell.derived(() => Boolean(props.get().isSelected));
  const height = Cell.derived(() => props.get().height);
  const txdeg = Cell.source(init ? `${init.rotate}deg` : "0deg");
  const drag = useDragGesture(init, isSelected);
  const loaded = Cell.source(false);
  const notLoaded = Cell.derived(() => !loaded.get());

  const translate = Cell.derived(() => {
    return isSelected.get() ? "0px" : `${drag.tx.get()}px ${drag.ty.get()}px`;
  });
  const rotate = Cell.derived(() => {
    return isSelected.get() ? "0deg" : txdeg.get();
  });

  const scale = Cell.derived(() => {
    if (isSelected.get()) return 3;
    return drag.isDragging.get() ? 1.3 : 1;
  });

  const style = {
    rotate,
    scale,
    cursor: drag.cursor,
    zIndex: drag.zIndex,
    translate,
    "--height": height,
    "--index": index?.get() || 0,
  };

  const handleClick = () => {
    onSelect?.(props.get());
  };

  const handleInitialLoad = () => {
    loaded.set(true);
  };

  return (
    <button
      type="button"
      class={[classes.sticker, { [classes.animated]: notLoaded }]}
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
            src={imageUrl}
            alt={name}
            class={classes.image}
          />
        </div>
      </div>
    </button>
  );
});
