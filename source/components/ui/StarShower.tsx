import { Cell, useSetupEffect } from "retend";
import classes from "./StarShower.module.css";
import StarShowerWorker from "./starshower.worker?worker";

export function StarShower() {
  const canvasRef = Cell.source<HTMLCanvasElement | null>(null);

  useSetupEffect(() => {
    const canvas = canvasRef.peek();
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const offscreen = canvas.transferControlToOffscreen();
    const worker = new StarShowerWorker();

    worker.postMessage(
      { type: "init", payload: { canvas: offscreen, width, height, dpr } },
      [offscreen]
    );

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newDpr = window.devicePixelRatio || 1;

      canvas.style.width = `${newWidth}px`;
      canvas.style.height = `${newHeight}px`;

      worker.postMessage({
        type: "resize",
        payload: { width: newWidth, height: newHeight, dpr: newDpr },
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      worker.postMessage({ type: "stop" });
      worker.terminate();
      window.removeEventListener("resize", handleResize);
    };
  });

  return <canvas ref={canvasRef} class={classes.canvas} />;
}
