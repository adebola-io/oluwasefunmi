import { Cell, If, onConnected, onSetup } from "retend";
import classes from "./HomePage.module.css";

const BIRTHDAY_DAY = 28;
const BIRTHDAY_MONTH = 5;

let hasRun = false;

interface WorkerCompleteMessage {
  type: "complete";
}

const readColor = (style: CSSStyleDeclaration, variable: string) => {
  return style.getPropertyValue(variable).trim();
};

const isBirthday = () => {
  const today = new Date();
  return (
    today.getDate() === BIRTHDAY_DAY && today.getMonth() === BIRTHDAY_MONTH
  );
};

const readPalette = () => {
  const style = getComputedStyle(document.documentElement);
  const colors = [
    readColor(style, "--avatar-cobalt"),
    readColor(style, "--avatar-klein"),
    readColor(style, "--avatar-egyptian"),
    readColor(style, "--avatar-royal"),
    readColor(style, "--avatar-spectrum"),
    readColor(style, "--avatar-majorelle"),
    readColor(style, "--avatar-lavender"),
  ].filter(Boolean);

  return colors.length > 0
    ? colors
    : ["#041c7e", "#1e2c96", "#0335a8", "#5b59eb", "#895bd8"];
};

const readSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    ratio: Math.min(window.devicePixelRatio, 2),
  };
};

const startCelebration = (canvas: HTMLCanvasElement) => {
  if (!("transferControlToOffscreen" in canvas)) return;

  const worker = new Worker(
    new URL("./HomeCelebrationCanvas.worker.ts", import.meta.url),
    { type: "module" }
  );
  const offscreenCanvas = canvas.transferControlToOffscreen();

  const resize = () => {
    worker.postMessage({ type: "resize", ...readSize() });
  };

  const stop = () => {
    worker.postMessage({ type: "stop" });
    window.removeEventListener("resize", resize);
  };

  worker.onmessage = (event: MessageEvent<WorkerCompleteMessage>) => {
    if (event.data.type !== "complete") return;

    window.removeEventListener("resize", resize);
    worker.terminate();
    canvas.remove();
  };

  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  worker.postMessage(
    {
      type: "start",
      canvas: offscreenCanvas,
      palette: readPalette(),
      ...readSize(),
    },
    [offscreenCanvas]
  );
  window.addEventListener("resize", resize);

  return stop;
};

export function HomeCelebrationCanvas() {
  const showBirthday = Cell.source(false);
  const canvasRef = Cell.source<HTMLCanvasElement | null>(null);

  onSetup(() => {
    if (hasRun) return;

    hasRun = isBirthday();
    showBirthday.set(hasRun);
  });

  onConnected(canvasRef, (canvas) => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return motionQuery.matches ? undefined : startCelebration(canvas);
  });

  return If(showBirthday, () => (
    <canvas
      ref={canvasRef}
      class={classes.celebrationCanvas}
      aria-hidden="true"
    />
  ));
}
