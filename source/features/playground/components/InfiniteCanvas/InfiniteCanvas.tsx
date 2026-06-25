import type { JSX } from "retend/jsx-runtime";
import classes from "./InfiniteCanvas.module.css";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import { Cell } from "retend";

interface InfiniteCanvasProps extends JSX.BaseContainerProps {}

function normalizeWheelDelta(event: WheelEvent) {
  const multiplier =
    event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? 16
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
        ? window.innerHeight
        : 1;

  return {
    x: event.deltaX * multiplier,
    y: event.deltaY * multiplier,
  };
}

export function InfiniteCanvas(props: InfiniteCanvasProps) {
  const { children, class: className, ...rest } = props;
  const cameraX = Cell.source(0);
  const cameraY = Cell.source(0);

  let startPointerX = 0;
  let startPointerY = 0;
  let startCanvasX = 0;
  let startCanvasY = 0;

  function handlePointerDown(this: HTMLElement, event: PointerEvent) {
    if (event.button === 2) return;

    startPointerX = event.clientX;
    startPointerY = event.clientY;
    startCanvasX = cameraX.get();
    startCanvasY = cameraY.get();

    this.setPointerCapture(event.pointerId);
  }

  function handlePointerUp(this: HTMLElement, event: PointerEvent) {
    if (this.hasPointerCapture(event.pointerId)) {
      this.releasePointerCapture(event.pointerId);
    }
  }

  function handlePointerMove(this: HTMLElement, event: PointerEvent) {
    if (!this.hasPointerCapture(event.pointerId)) return;
    const dx = event.clientX - startPointerX;
    const dy = event.clientY - startPointerY;

    Cell.batch(() => {
      cameraX.set(startCanvasX + dx);
      cameraY.set(startCanvasY + dy);
    });
  }

  function handleWheel(this: HTMLElement, event: WheelEvent) {
    const delta = normalizeWheelDelta(event);

    Cell.batch(() => {
      cameraX.set(cameraX.get() - delta.x);
      cameraY.set(cameraY.get() - delta.y);
    });
  }

  const ctx = { cameraX, cameraY };

  return (
    <InfiniteCanvasScope.Provider value={ctx}>
      <div
        class={[classes.container, className]}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel--passive={handleWheel}
        {...rest}
      >
        {children}
      </div>
    </InfiniteCanvasScope.Provider>
  );
}
