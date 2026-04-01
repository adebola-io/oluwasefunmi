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

function createStickerStyle(
  drag: ReturnType<typeof useDragGesture>,
  isSelected: Cell<boolean>,
  init: Transform | undefined,
  height: string,
  index: Cell<number> | undefined
) {
  return {
    rotate: Cell.derived(() =>
      isSelected.get() ? "0deg" : `${init?.rotate ?? 0}deg`
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
    "--index": index?.get() ?? 0,
  };
}

function useSelectionState(
  selectedSticker: Cell<StickerType | null> | undefined,
  stickerName: string
) {
  return Cell.derived(() => selectedSticker?.get()?.name === stickerName);
}

function useStickerLogic(
  initialTransform: Transform | undefined,
  index: Cell<number> | undefined,
  selectedSticker: Cell<StickerType | null> | undefined,
  onSelect: ((item: StickerType) => void) | undefined,
  onDismiss: (() => void) | undefined,
  shouldLoadImages: Cell<boolean> | undefined,
  onInitialAnimationEnd: (() => void) | undefined,
  isFinalSticker: boolean | undefined,
  height: string,
  sticker: StickerType
) {
  const loaded = Cell.source(false);
  const imageLoaded = Cell.source(false);
  const isSelected = useSelectionState(selectedSticker, sticker.name);
  const drag = useDragGesture(initialTransform, isSelected, onDismiss);
  const imageSrc = Cell.derived(() =>
    shouldLoadImages?.get() ? sticker.imageUrl : undefined
  );
  const style = createStickerStyle(
    drag,
    isSelected,
    initialTransform,
    height,
    index
  );
  const handlePointerUp = (e: PointerEvent) => {
    drag.handlePointerUp(e);
    if (drag.hasMoved.get()) return;
    onSelect?.(sticker);
  };
  const handleAnimationEnd = () => {
    loaded.set(true);
    if (isFinalSticker) onInitialAnimationEnd?.();
  };
  const imageOpacity = Cell.derived(() =>
    imageLoaded.get() && isSelected.get() ? 1 : 0
  );
  return {
    sticker,
    isSelected,
    drag,
    imageSrc,
    style,
    loaded,
    imageLoaded,
    imageOpacity,
    handlePointerUp,
    handleAnimationEnd,
  };
}

export const Sticker = (props: StickerProps) => {
  const {
    initialTransform,
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
  const {
    isSelected,
    drag,
    imageSrc,
    style,
    loaded,
    imageLoaded,
    imageOpacity,
    handlePointerUp,
    handleAnimationEnd,
  } = useStickerLogic(
    initialTransform,
    index,
    selectedSticker,
    onSelect,
    onDismiss,
    shouldLoadImages,
    onInitialAnimationEnd,
    isFinalSticker,
    height,
    sticker
  );
  return (
    <button
      type="button"
      class={[
        classes.sticker,
        {
          [classes.animated]: Cell.derived(() => !loaded.get()),
          [classes.selected]: isSelected,
        },
      ]}
      style={style}
      onPointerDown={drag.handlePointerDown}
      onPointerMove={drag.handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={drag.handlePointerUp}
      onAnimationEnd={handleAnimationEnd}
      onAnimationCancel={handleAnimationEnd}
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
            style={{ opacity: imageOpacity }}
            onLoad={() => imageLoaded.set(true)}
          />
        </div>
      </div>
    </button>
  );
};
