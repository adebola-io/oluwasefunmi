import { albumGroups } from "./albumGroups";

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
