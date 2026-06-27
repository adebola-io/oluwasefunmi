import { Cell, createScope } from "retend";

interface InfiniteCanvasCtx {
  cameraX: Cell<number>;
  cameraY: Cell<number>;
  viewportRef: Cell<HTMLElement | null>;
  viewportWidth: Cell<number>;
  viewportHeight: Cell<number>;
}

export const InfiniteCanvasScope =
  createScope<InfiniteCanvasCtx>("InfiniteCanvas");
