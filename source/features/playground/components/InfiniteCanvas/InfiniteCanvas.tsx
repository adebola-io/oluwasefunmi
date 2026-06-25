import type { JSX } from "retend/jsx-runtime";
import classes from "./InfiniteCanvas.module.css";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import { Cell } from "retend";

interface InfiniteCanvasProps extends JSX.BaseContainerProps {}

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

  const ctx = { cameraX, cameraY };

  return (
    <InfiniteCanvasScope.Provider value={ctx}>
      <div
        class={[classes.container, className]}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        {...rest}
      >
        {children}
      </div>
    </InfiniteCanvasScope.Provider>
  );
}
