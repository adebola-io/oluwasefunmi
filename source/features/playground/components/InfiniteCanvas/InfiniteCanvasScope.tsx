import { Cell, createScope } from "retend";

interface InfiniteCanvasCtx {
  cameraX: Cell<number>;
  cameraY: Cell<number>;
}

export const InfiniteCanvasScope =
  createScope<InfiniteCanvasCtx>("InfiniteCanvas");
