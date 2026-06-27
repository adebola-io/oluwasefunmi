import { Cell, createScope, type SourceCell } from "retend";

interface InfiniteCanvasCtx {
  cameraX: SourceCell<number>;
  cameraY: SourceCell<number>;
  viewportRef: SourceCell<HTMLElement | null>;
  width: Cell<number>;
  height: Cell<number>;
}

export interface CenterOptions {
  offsetX?: number;
  offsetY?: number;
}

interface InfiniteRepeatedPatternCtx {
  center(row: number, col: number, options?: CenterOptions): Promise<boolean>;
}

export const InfiniteCanvasScope =
  createScope<InfiniteCanvasCtx>("InfiniteCanvas");

export const InfiniteRepeatedPatternScope =
  createScope<InfiniteRepeatedPatternCtx>("InfiniteRepeatedPattern");
