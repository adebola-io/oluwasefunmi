import type { JSX } from "retend/jsx-runtime";
import { Cell, onConnected, type SourceCell } from "retend";
import classes from "./InfiniteCanvas.module.css";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import { normalizeWheelDelta } from "./infiniteCanvasUtils";
import { usePointerDrag } from "./usePointerDrag";

interface InfiniteCanvasProps extends JSX.BaseContainerProps {
  ref?: SourceCell<HTMLElement | null>;
}

export function InfiniteCanvas(props: InfiniteCanvasProps) {
  const {
    children,
    ref = Cell.source(null),
    class: className,
    ...rest
  } = props;
  const cameraX = Cell.source(0);
  const cameraY = Cell.source(0);
  const viewportHeight = Cell.source(0);
  const viewportWidth = Cell.source(0);
  const { handlePointerDown, handlePointerMove, handlePointerUp } =
    usePointerDrag(cameraX, cameraY);

  function handleWheel(this: HTMLElement, event: WheelEvent) {
    const delta = normalizeWheelDelta(event);

    Cell.batch(() => {
      cameraX.set(cameraX.get() - delta.x);
      cameraY.set(cameraY.get() - delta.y);
    });
  }

  const ctx = {
    cameraX,
    cameraY,
    height: viewportHeight,
    viewportRef: ref,
    width: viewportWidth,
  };

  onConnected(ref, (container) => {
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      Cell.batch(() => {
        viewportWidth.set(entry.contentRect.width);
        viewportHeight.set(entry.contentRect.height);
      });
    });
    observer.observe(container);
    return () => observer.disconnect();
  });

  return (
    <InfiniteCanvasScope.Provider value={ctx}>
      <div
        {...rest}
        ref={ref}
        class={[classes.container, className]}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel--passive={handleWheel}
      >
        {children}
      </div>
    </InfiniteCanvasScope.Provider>
  );
}
