import { Cell } from "retend";

interface Transform {
  tx: number;
  ty: number;
  rotate: number;
}

let topZIndex = 0;

function clampPosition(value: number, max: number): number {
  return Math.max(-max, Math.min(max, value));
}

export function useDragGesture(
  initialTransform: Transform | undefined,
  isSelected: Cell<boolean>,
  onDismiss?: () => void
) {
  const tx = Cell.source(initialTransform?.tx ?? 0);
  const ty = Cell.source(initialTransform?.ty ?? 0);
  const dismissTx = Cell.source(0);
  const dismissTy = Cell.source(0);
  const isDragging = Cell.source(false);
  const hasMoved = Cell.source(false);
  const zIndexHandle = Cell.source(0);

  const DRAG_THRESHOLD = 5; // pixels

  const cursor = Cell.derived(() => (isDragging.get() ? "grabbing" : "grab"));
  const zIndex = Cell.derived(() => {
    if (isSelected.get()) return 99;
    return isDragging.get() ? 98 : zIndexHandle.get();
  });
  const transitionProperty = Cell.derived(() => {
    return isDragging.get()
      ? "scale, rotate, opacity"
      : "scale, translate, rotate, opacity";
  });

  let pointerId = -1;
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;
  let lastY = 0;
  let lastMoveTime = 0;
  let dismissVelocityY = 0;

  const handlePointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;

    pointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    baseX = tx.get();
    baseY = ty.get();
    lastY = e.clientY;
    lastMoveTime = performance.now();
    dismissVelocityY = 0;

    isDragging.set(true);
    hasMoved.set(false);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.get() || e.pointerId !== pointerId) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > DRAG_THRESHOLD) {
      hasMoved.set(true);
    }

    const now = performance.now();
    const elapsed = now - lastMoveTime;
    if (elapsed > 0) {
      dismissVelocityY = (e.clientY - lastY) / elapsed;
    }
    lastY = e.clientY;
    lastMoveTime = now;

    if (isSelected.get()) {
      Cell.batch(() => {
        dismissTx.set(dx * 0.35);
        dismissTy.set(dy);
      });
      return;
    }

    const maxX = window.innerWidth / 2;
    const maxY = window.innerHeight / 2;

    Cell.batch(() => {
      tx.set(clampPosition(baseX + e.clientX - startX, maxX));
      ty.set(clampPosition(baseY + e.clientY - startY, maxY));
    });
  };

  const handlePointerUp = (e: PointerEvent) => {
    if (e.pointerId !== pointerId) return;

    isDragging.set(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    pointerId = -1;

    if (isSelected.get()) {
      const shouldDismiss =
        Math.abs(dismissTy.get()) > window.innerHeight * 0.3 ||
        Math.abs(dismissVelocityY) > 1;
      dismissTx.set(0);
      dismissTy.set(0);
      if (shouldDismiss) onDismiss?.();
      return;
    }

    zIndexHandle.set(++topZIndex);
  };

  return {
    tx,
    ty,
    dismissTx,
    dismissTy,
    isDragging,
    hasMoved,
    zIndex,
    cursor,
    transitionProperty,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}
