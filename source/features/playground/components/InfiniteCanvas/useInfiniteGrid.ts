import { Cell, useScopeContext } from "retend";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import { easeOutCubic, mix } from "./infiniteCanvasUtils";

const CENTER_DURATION_MS = 360;

interface InfiniteGridOptions {
  density: Cell<number>;
  overscan: Cell<number>;
}

export function useInfiniteGrid(options: InfiniteGridOptions) {
  const ctx = useScopeContext(InfiniteCanvasScope);
  const {
    cameraX,
    cameraY,
    height: viewportHeight,
    width: viewportWidth,
  } = ctx;

  const { density, overscan } = options;
  const nodeRef = Cell.source<HTMLElement | null>(null);
  const affordance = Cell.derived(() => overscan.get() * 2 + 1);
  const side = Cell.derived(() => affordance.get() * density.get());
  const originX = Cell.derived(() => {
    const width = viewportWidth.get();
    return width === 0 ? 0 : Math.round(-cameraX.get() / width);
  });

  const originY = Cell.derived(() => {
    const height = viewportHeight.get();
    return height === 0 ? 0 : Math.round(-cameraY.get() / height);
  });

  const colOffset = Cell.derived(() => -originX.get() * density.get());
  const rowOffset = Cell.derived(() => -originY.get() * density.get());
  let centerFrame: number | null = null;

  const center = (row: number, col: number) => {
    const width = viewportWidth.get();
    const height = viewportHeight.get();
    if (width === 0 || height === 0) return;

    const cellWidth = width / density.get();
    const cellHeight = height / density.get();
    const startX = cameraX.get();
    const startY = cameraY.get();
    const targetX = width / 2 - (col + 0.5) * cellWidth;
    const targetY = height / 2 - (row + 0.5) * cellHeight;
    const startTime = performance.now();
    let lastAnimationX = startX;
    let lastAnimationY = startY;

    if (centerFrame !== null) cancelAnimationFrame(centerFrame);

    const animate = (time: number) => {
      if (
        cameraX.get() !== lastAnimationX ||
        cameraY.get() !== lastAnimationY
      ) {
        centerFrame = null;
        return;
      }

      const elapsed = time - startTime;
      const progress = Math.min(elapsed / CENTER_DURATION_MS, 1);
      const easedProgress = easeOutCubic(progress);
      const nextX = mix(startX, targetX, easedProgress);
      const nextY = mix(startY, targetY, easedProgress);

      Cell.batch(() => {
        cameraX.set(nextX);
        cameraY.set(nextY);
      });

      lastAnimationX = nextX;
      lastAnimationY = nextY;
      centerFrame = progress < 1 ? requestAnimationFrame(animate) : null;
    };

    centerFrame = requestAnimationFrame(animate);
  };

  return {
    affordance,
    center,
    colOffset,
    originX,
    originY,
    nodeRef,
    rowOffset,
    side,
  };
}
