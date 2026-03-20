// Web Worker for non-blocking image preloading
// Runs in a separate thread to avoid blocking main thread animations

interface PreloadMessage {
  type: "preload";
  urls: string[];
}

interface StatusMessage {
  type: "loaded" | "error" | "progress";
  url: string;
  loaded?: number;
  total?: number;
}

// Cache name for storing images
const CACHE_NAME = "painting-images-v1";

/**
 * Preload a single image using fetch and cache it
 */
async function preloadImage(url: string): Promise<boolean> {
  try {
    // Check if already in cache
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(url);
    if (cached) {
      // Already cached
      self.postMessage({
        type: "loaded",
        url,
      } as StatusMessage);
      return true;
    }

    // Fetch with low priority
    const response = await fetch(url, {
      priority: "low",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    // Cache the response
    await cache.put(url, response);

    self.postMessage({
      type: "loaded",
      url,
    } as StatusMessage);

    return true;
  } catch (error) {
    self.postMessage({
      type: "error",
      url,
    } as StatusMessage);
    return false;
  }
}

/**
 * Preload multiple images sequentially to avoid overwhelming the network
 */
async function preloadImages(urls: string[]): Promise<void> {
  const total = urls.length;
  let loaded = 0;

  for (const url of urls) {
    await preloadImage(url);
    loaded++;

    self.postMessage({
      type: "progress",
      url,
      loaded,
      total,
    } as StatusMessage);
  }
}

// Listen for messages from main thread
self.addEventListener("message", async (event: MessageEvent<PreloadMessage>) => {
  const { type, urls } = event.data;

  if (type === "preload" && urls.length > 0) {
    await preloadImages(urls);
  }
});

export type { PreloadMessage, StatusMessage };
