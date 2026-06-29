import { Cell, type SourceCell } from "retend";

const DRAG_THRESHOLD = 4;
const FLING_DECAY = 0.92;
const FLING_MIN_VELOCITY = 0.05;
const MAX_SAMPLE_TIME_MS = 80;
const FRAME_DURATION_MS = 16.67;

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
  let lastPointerX = 0;
  let lastPointerY = 0;
  let lastPointerTime = 0;
  let velocityX = 0;
  let velocityY = 0;
  let flingFrame: number | null = null;
  let lastFlingTime = 0;

  const stopFling = () => {
    if (flingFrame !== null) cancelAnimationFrame(flingFrame);
    flingFrame = null;
  };

  const fling = (time: number) => {
    const elapsed = Math.min(time - lastFlingTime, MAX_SAMPLE_TIME_MS);
    lastFlingTime = time;

    Cell.batch(() => {
      cameraX.set(cameraX.get() + velocityX * elapsed);
      cameraY.set(cameraY.get() + velocityY * elapsed);
    });

    const decay = Math.pow(FLING_DECAY, elapsed / FRAME_DURATION_MS);
    velocityX *= decay;
    velocityY *= decay;

    flingFrame =
      Math.hypot(velocityX, velocityY) > FLING_MIN_VELOCITY
        ? requestAnimationFrame(fling)
        : null;
  };

  function handlePointerDown(event: PointerEvent) {
    if (event.button === 2) return;

    stopFling();
    activePointerId = event.pointerId;
    isDragging = false;
    startPointerX = event.clientX;
    startPointerY = event.clientY;
    startCanvasX = cameraX.get();
    startCanvasY = cameraY.get();
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    lastPointerTime = event.timeStamp;
    velocityX = 0;
    velocityY = 0;
  }

  function handlePointerUp(this: HTMLElement, event: PointerEvent) {
    if (this.hasPointerCapture(event.pointerId)) {
      this.releasePointerCapture(event.pointerId);
    }

    const hasFreshVelocity =
      event.timeStamp - lastPointerTime <= MAX_SAMPLE_TIME_MS;
    if (
      isDragging &&
      event.type !== "pointercancel" &&
      hasFreshVelocity &&
      Math.hypot(velocityX, velocityY) > FLING_MIN_VELOCITY
    ) {
      lastFlingTime = event.timeStamp;
      flingFrame = requestAnimationFrame(fling);
    }

    activePointerId = null;
    isDragging = false;
  }

  function handlePointerMove(this: HTMLElement, event: PointerEvent) {
    if (activePointerId !== event.pointerId) return;
    const dx = event.clientX - startPointerX;
    const dy = event.clientY - startPointerY;
    const elapsed = Math.min(
      event.timeStamp - lastPointerTime,
      MAX_SAMPLE_TIME_MS
    );

    if (elapsed > 0) {
      velocityX = (event.clientX - lastPointerX) / elapsed;
      velocityY = (event.clientY - lastPointerY) / elapsed;
    }

    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    lastPointerTime = event.timeStamp;

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
