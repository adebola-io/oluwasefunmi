


const imageModules = import.meta.glob<{ default: string }>(
  "/source/data/images/*.webp",
  { eager: true },
);


const imageMap: Record<string, string> = {};

for (const path of Object.keys(imageModules)) {

  const match = path.match(/\/(\d+-[^/]+)\.webp$/);
  if (match) {
    const key = match[1].toLowerCase();
    imageMap[key] = imageModules[path].default;
  }
}


export function getProductImage(
  productId: number,
  color: string,
): string | undefined {
  const normalizedColor = color.toLowerCase().replace(/\s+/g, "-");
  const key = `${productId}-${normalizedColor}`;
  return imageMap[key];
}


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


export function hasProductImage(productId: number, color: string): boolean {
  return getProductImage(productId, color) !== undefined;
}
