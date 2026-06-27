import { Cell, type SourceCell } from "retend";

const DRAG_THRESHOLD = 4;

export function usePointerDrag(
  cameraX: SourceCell<number>,
  cameraY: SourceCell<number>
) {
  let activePointerId: number | null = null;
  let isDragging = false;
  let startPointerX = 0;
  let startPointerY = 0;
  let startCanvasX = 0;
  let startCanvasY = 0;

  function handlePointerDown(event: PointerEvent) {
    if (event.button === 2) return;

    activePointerId = event.pointerId;
    isDragging = false;
    startPointerX = event.clientX;
    startPointerY = event.clientY;
    startCanvasX = cameraX.get();
    startCanvasY = cameraY.get();
  }

  function handlePointerUp(this: HTMLElement, event: PointerEvent) {
    if (this.hasPointerCapture(event.pointerId)) {
      this.releasePointerCapture(event.pointerId);
    }

    activePointerId = null;
    isDragging = false;
  }

  function handlePointerMove(this: HTMLElement, event: PointerEvent) {
    if (activePointerId !== event.pointerId) return;
    const dx = event.clientX - startPointerX;
    const dy = event.clientY - startPointerY;

    if (!isDragging) {
      const hasDragged = Math.hypot(dx, dy) >= DRAG_THRESHOLD;
      if (!hasDragged) return;

      isDragging = true;
      this.setPointerCapture(event.pointerId);
    }

    Cell.batch(() => {
      cameraX.set(startCanvasX + dx);
      cameraY.set(startCanvasY + dy);
    });
  }

  return { handlePointerDown, handlePointerMove, handlePointerUp };
}
