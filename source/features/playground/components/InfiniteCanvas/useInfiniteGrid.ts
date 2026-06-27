import { Cell, useScopeContext } from "retend";
import { InfiniteCanvasScope, type CenterOptions } from "./InfiniteCanvasScope";
import { easeOutCubic, mix } from "./infiniteCanvasUtils";

const CENTER_DURATION_MS = 600;

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
  let resolveCenter: ((completed: boolean) => void) | null = null;

  const settleCenter = (completed: boolean) => {
    if (centerFrame !== null) cancelAnimationFrame(centerFrame);
    centerFrame = null;
    resolveCenter?.(completed);
    resolveCenter = null;
  };

  const center = (row: number, col: number, options?: CenterOptions) => {
    settleCenter(false);

    const width = viewportWidth.get();
    const height = viewportHeight.get();
    if (width === 0 || height === 0) return Promise.resolve(false);

    return new Promise<boolean>((resolve) => {
      const cellWidth = width / density.get();
      const cellHeight = height / density.get();
      const startX = cameraX.get();
      const startY = cameraY.get();
      const targetX =
        width / 2 - (col + 0.5 + (options?.offsetX ?? 0)) * cellWidth;
      const targetY =
        height / 2 - (row + 0.5 + (options?.offsetY ?? 0)) * cellHeight;
      const startTime = performance.now();
      let lastAnimationX = startX;
      let lastAnimationY = startY;
      resolveCenter = resolve;

      const animate = (time: number) => {
        if (
          cameraX.get() !== lastAnimationX ||
          cameraY.get() !== lastAnimationY
        ) {
          settleCenter(false);
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

        if (progress === 1) settleCenter(true);
      };

      centerFrame = requestAnimationFrame(animate);
    });
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
