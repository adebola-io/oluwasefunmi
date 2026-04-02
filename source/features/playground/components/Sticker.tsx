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

function createStyle(
  drag: ReturnType<typeof useDragGesture>,
  isSelected: Cell<boolean>,
  init: Transform | undefined,
  height: string,
  index: Cell<number> | undefined
) {
  return {
    rotate: Cell.derived(() => {
      return isSelected.get() ? "0deg" : `${init?.rotate ?? 0}deg`;
    }),
    scale: Cell.derived(() => {
      if (isSelected.get()) return 2.5;
      return drag.isDragging.get() && drag.hasMoved.get() ? 1.3 : 1;
    }),
    cursor: drag.cursor,
    zIndex: isSelected.get() ? 99 : drag.zIndex,
    translate: Cell.derived(() => {
      return isSelected.get()
        ? `${drag.dismissTx.get()}px ${drag.dismissTy.get()}px`
        : `${drag.tx.get()}px ${drag.ty.get()}px`;
    }),
    transitionProperty: Cell.derived(() => {
      return drag.isDragging.get()
        ? "scale, rotate, opacity"
        : "scale, translate, rotate, opacity";
    }),
    "--height": height,
    "--index": index?.get() ?? 0,
  };
}

export function Sticker(props: StickerProps) {
  const {
    initialTransform,
    index,
    selectedSticker,
    onSelect,
    onDismiss,
    height,
    ...sticker
  } = props;
  const loaded = Cell.source(false);
  const isSelected = Cell.derived(() => {
    return selectedSticker?.get()?.name === sticker.name;
  });
  const drag = useDragGesture(initialTransform, isSelected, onDismiss);
  const style = createStyle(drag, isSelected, initialTransform, height, index);
  const notLoaded = Cell.derived(() => !loaded.get());

  const handleAnimationEnd = () => {
    loaded.set(true);
  };

  const handleClick = () => {
    onSelect?.(sticker);
  };

  function matchZIndexState(this: HTMLElement, event: TransitionEvent) {
    if (isSelected.get() && event.type === "transitionstart") {
      this.style.zIndex = "99";
    } else if (!isSelected.get() && event.type === "transitionend") {
      this.style.zIndex = "0";
    }
  }

  return (
    <button
      type="button"
      class={[classes.sticker, { [classes.animated]: notLoaded }]}
      style={style}
      onPointerDown={drag.handlePointerDown}
      onPointerMove={drag.handlePointerMove}
      onPointerUp={drag.handlePointerUp}
      onClick={handleClick}
      onPointerCancel={drag.handlePointerUp}
      onAnimationEnd={handleAnimationEnd}
      onAnimationCancel={handleAnimationEnd}
      onTransitionStart={matchZIndexState}
      onTransitionEnd={matchZIndexState}
      onTransitionCancel={matchZIndexState}
    >
      <div class={classes.clip}>
        <div
          class={classes.content}
          style={{ backgroundImage: sticker.placeholderGradient }}
        />
      </div>
    </button>
  );
}
