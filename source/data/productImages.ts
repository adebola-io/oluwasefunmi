/**
 * Product images mapping for production-safe imports.
 * Images are imported via Vite's import.meta.glob for dynamic loading.
 */

// Import all product images using Vite's glob import
const imageModules = import.meta.glob<{ default: string }>(
  "/source/data/images/*.webp",
  { eager: true },
);

// Build a lookup map from the imported images
// Key format: "{productId}-{color}" (lowercase, hyphenated)
const imageMap: Record<string, string> = {};

for (const path of Object.keys(imageModules)) {
  // Extract filename from path: "/source/data/images/1-camel.webp" -> "1-camel"
  const match = path.match(/\/(\d+-[^/]+)\.webp$/);
  if (match) {
    const key = match[1].toLowerCase();
    imageMap[key] = imageModules[path].default;
  }
}

/**
 * Gets the image URL for a product in a specific color.
 * @param productId - The product ID
 * @param color - The color name (will be normalized)
 * @returns The bundled image URL, or undefined if not available
 */
export function getProductImage(
  productId: number,
  color: string,
): string | undefined {
  const normalizedColor = color.toLowerCase().replace(/\s+/g, "-");
  const key = `${productId}-${normalizedColor}`;
  return imageMap[key];
}

/**
 * Gets all available images for a product.
 * @param productId - The product ID
 * @returns Record of color names to image URLs
 */
export function getProductImages(productId: number): Record<string, string> {
  const prefix = `${productId}-`;
  const result: Record<string, string> = {};

  for (const [key, url] of Object.entries(imageMap)) {
    if (key.startsWith(prefix)) {
      const color = key.slice(prefix.length);
      result[color] = url;
    }
  }

  return result;
}

/**
 * Checks if an image exists for a product-color combination.
 * @param productId - The product ID
 * @param color - The color name
 * @returns True if the image exists
 */
export function hasProductImage(productId: number, color: string): boolean {
  return getProductImage(productId, color) !== undefined;
}
