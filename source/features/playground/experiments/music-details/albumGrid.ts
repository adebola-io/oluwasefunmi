import { albumGroups } from "./albumGroups";

export const SIZING_CLASSES = [
  "[--size:min(12dvh,20dvw)] max-md:[--size:min(10dvh,15dvw)]",
  "[--album-row-height:calc(var(--size)*4.75)] md:[--album-row-height:calc(var(--size)*3.75)]",
];

export function getAlbumGridColumns(isTablet: boolean, isDesktop: boolean) {
  if (isDesktop) return 3;
  if (isTablet) return 2;
  return 1;
}

export function getAlbumGridRows(columnCount: number) {
  return Math.ceil(albumGroups.length / columnCount);
}

export function getAlbumGridTemplateAreas(columnCount: number) {
  return Array.from(
    { length: getAlbumGridRows(columnCount) },
    (_, rowIndex) => {
      const rowStart = rowIndex * columnCount;
      const rowAreas = Array.from({ length: columnCount }, (_, columnIndex) => {
        const albumIndex = rowStart + columnIndex;
        return albumIndex < albumGroups.length ? `basket-${albumIndex}` : ".";
      });

      return `"${rowAreas.join(" ")}"`;
    }
  ).join(" ");
}
