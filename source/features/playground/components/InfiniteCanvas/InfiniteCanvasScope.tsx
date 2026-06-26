import { Cell, createScope } from "retend";

interface InfiniteCanvasCtx {
  cameraX: Cell<number>;
  cameraY: Cell<number>;
  viewportRef: Cell<HTMLElement | null>;
}

export const InfiniteCanvasScope =
  createScope<InfiniteCanvasCtx>("InfiniteCanvas");
