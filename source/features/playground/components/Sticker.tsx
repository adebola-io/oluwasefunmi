import { Cell } from "retend";
import type { Sticker as StickerType } from "../data/stickers";
import { useDragGesture } from "./useDragGesture";
import classes from "./Sticker.module.css";
import type { JSX } from "retend/jsx-runtime";

interface Transform {
  tx: number;
  ty: number;
  rotate: number;
}

interface StickerProps extends StickerType {
  index?: Cell<number>;
  initialTransform?: Transform;
  height: string;
  selected?: Cell<StickerType | null>;
  onSelect?: (item: StickerType) => void;
  onDismiss?: () => void;
}

function createStyle(
  drag: ReturnType<typeof useDragGesture>,
  props: StickerProps,
  isSelected: Cell<boolean>
) {
  const { initialTransform, height, index } = props;

  return Cell.derived((): JSX.StyleValue => {
    const transitionProperty = drag.isDragging.get()
      ? "scale, rotate, opacity"
      : "scale, translate, rotate, opacity";

    if (isSelected.get()) {
      return {
        "--height": height,
        rotate: "0deg",
        scale: 2.5,
        cursor: drag.cursor,
        zIndex: 99,
        translate: `${drag.dismissTx.get()}px ${drag.dismissTy.get()}px`,
        transitionProperty,
        transitionTimingFunction: "var(--ease-spring)",
        "--index": index?.get() ?? 0,
      };
    }

    return {
      "--height": height,
      rotate: `${initialTransform?.rotate ?? 0}deg`,
      scale: drag.isDragging.get() && drag.hasMoved.get() ? 1.3 : 1,
      cursor: drag.cursor,
      zIndex: drag.zIndex,
      translate: `${drag.tx.get()}px ${drag.ty.get()}px`,
      transitionProperty,
      transitionTimingFunction: "ease",
      "--index": index?.get() ?? 0,
    };
  });
}

export function Sticker(props: StickerProps) {
  const { initialTransform, selected, onSelect, onDismiss, ...sticker } = props;

  const ref = Cell.source<HTMLElement | null>(null);
  const isSelected = Cell.derived(() => {
    return selected?.get()?.name === sticker.name;
  });

  const drag = useDragGesture(initialTransform, isSelected, onDismiss);
  const style = createStyle(drag, props, isSelected);
  const imageOpacity = Cell.derived(() => (isSelected.get() ? 1 : 0));

  const handleClick = () => {
    if (drag.hasMoved.get()) return;
    onSelect?.(sticker);
  };

  return (
    <button
      ref={ref}
      type="button"
      class={classes.sticker}
      style={style}
      onClick={handleClick}
      onPointerDown={drag.handlePointerDown}
      onPointerMove={drag.handlePointerMove}
      onPointerUp={drag.handlePointerUp}
      onPointerCancel={drag.handlePointerUp}
    >
      <div class={classes.clip}>
        <div
          class={classes.content}
          style={{ backgroundImage: sticker.placeholderGradient }}
        >
          <img
            class={classes.image}
            src={sticker.imageUrl}
            alt={sticker.name}
            style={{ opacity: imageOpacity }}
          />
        </div>
      </div>
    </button>
  );
}
