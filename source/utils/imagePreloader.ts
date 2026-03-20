// Non-blocking image preloader using Web Worker
// All heavy lifting happens in a separate thread

import ImagePreloaderWorker from "./imagePreloader.worker?worker";

const loadedImages = new Set<string>();
let worker: Worker | null = null;

/**
 * Get or create the worker instance
 */
function getWorker(): Worker {
  if (!worker) {
    worker = new ImagePreloaderWorker();

    // Listen for messages from worker
    worker.addEventListener("message", (event) => {
      const { type, url } = event.data;

      if (type === "loaded") {
        loadedImages.add(url);
      }
    });

    worker.addEventListener("error", (error) => {
      console.error("Image preloader worker error:", error);
    });
  }

  return worker;
}

/**
 * Preload images in a background thread without blocking the main thread.
 * Images are fetched and cached by the worker.
 */
export function preloadImages(sources: string[]): void {
  if (sources.length === 0) return;

  const workerInstance = getWorker();

  // Send URLs to the worker
  workerInstance.postMessage({
    type: "preload",
    urls: sources.filter((src) => !loadedImages.has(src)),
  });
}

/**
 * Check if an image has been preloaded and cached.
 */
export function isImageLoaded(src: string): boolean {
  return loadedImages.has(src);
}

/**
 * Terminate the worker (cleanup)
 */
export function terminatePreloader(): void {
  if (worker) {
    worker.terminate();
    worker = null;
  }
}
