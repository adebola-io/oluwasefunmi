import { Cell, onSetup } from "retend";

interface Transform {
  tx: number;
  ty: number;
  rotate: number;
}

interface DragGestureResult {
  tx: Cell<number>;
  ty: Cell<number>;
  isDragging: Cell<boolean>;
  zIndex: Cell<number>;
  cursor: Cell<string>;
  handlePointerDown: (e: PointerEvent) => void;
  handlePointerMove: (e: PointerEvent) => void;
  handlePointerUp: (e: PointerEvent) => void;
}

let topZIndex = 0;

function clampPosition(value: number, max: number): number {
  return Math.max(-max, Math.min(max, value));
}

export function useDragGesture(
  initialTransform?: Transform
): DragGestureResult {
  const tx = Cell.source(initialTransform?.tx ?? 0);
  const ty = Cell.source(initialTransform?.ty ?? 0);
  const isDragging = Cell.source(false);
  const zIndexHandle = Cell.source(0);

  const cursor = Cell.derived(() => (isDragging.get() ? "grabbing" : "grab"));
  const zIndex = Cell.derived(() =>
    isDragging.get() ? 99 : zIndexHandle.get()
  );

  let pointerId = -1;
  let animationFrame = 0;
  let velocityX = 0;
  let velocityY = 0;
  let startX = 0;
  let startY = 0;
  let baseX = 0;
  let baseY = 0;
  let lastX = 0;
  let lastY = 0;
  let lastMoveTime = 0;

  const animateMomentum = (element: HTMLElement) => {
    const animate = () => {
      if (isDragging.get()) return;

      const rect = element.getBoundingClientRect();
      const maxX = Math.max((window.innerWidth - rect.width) / 2, 0);
      const maxY = Math.max((window.innerHeight - rect.height) / 2, 0);
      const nextX = tx.get() + velocityX;
      const nextY = ty.get() + velocityY;
      const clampedX = clampPosition(nextX, maxX);
      const clampedY = clampPosition(nextY, maxY);

      if (clampedX !== nextX) velocityX = 0;
      if (clampedY !== nextY) velocityY = 0;

      tx.set(clampedX);
      ty.set(clampedY);
      velocityX *= 0.9;
      velocityY *= 0.9;

      if (Math.abs(velocityX) <= 0.1 && Math.abs(velocityY) <= 0.1) return;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
  };

  const handlePointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;

    cancelAnimationFrame(animationFrame);
    pointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    baseX = tx.get();
    baseY = ty.get();
    lastX = e.clientX;
    lastY = e.clientY;
    lastMoveTime = performance.now();
    velocityX = 0;
    velocityY = 0;

    isDragging.set(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.get() || e.pointerId !== pointerId) return;

    const now = performance.now();
    const elapsed = now - lastMoveTime;
    if (elapsed > 0) {
      velocityX = ((e.clientX - lastX) / elapsed) * 8;
      velocityY = ((e.clientY - lastY) / elapsed) * 8;
    }

    lastX = e.clientX;
    lastY = e.clientY;
    lastMoveTime = now;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const maxX = Math.max((window.innerWidth - rect.width) / 2, 0);
    const maxY = Math.max((window.innerHeight - rect.height) / 2, 0);

    Cell.batch(() => {
      tx.set(clampPosition(baseX + e.clientX - startX, maxX));
      ty.set(clampPosition(baseY + e.clientY - startY, maxY));
    });
  };

  const handlePointerUp = (e: PointerEvent) => {
    if (e.pointerId !== pointerId) return;

    isDragging.set(false);
    zIndexHandle.set(++topZIndex);
    const element = e.currentTarget as HTMLElement;
    element.releasePointerCapture(e.pointerId);
    pointerId = -1;

    animateMomentum(element);
  };

  onSetup(() => {
    return () => cancelAnimationFrame(animationFrame);
  });

  return {
    tx,
    ty,
    isDragging,
    zIndex,
    cursor,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}
