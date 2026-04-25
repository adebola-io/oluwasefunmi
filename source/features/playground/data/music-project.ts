import type { ImageModule } from "@/shared/types";
import albumDecadesData from "./albums.json";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/music-project/*.webp",
  { eager: true }
);

function getAlbumImageUrl(imageId: string) {
  return imageModules[
    `/source/features/playground/data/images/music-project/${imageId}.webp`
  ].default;
}

interface AlbumSource {
  name: string;
  artist: string;
  imageId: string;
  themeColor: string;
  tracks: Track[];
}

export interface Album extends AlbumSource {
  imageUrl: string;
}

export interface Track {
  name: string;
  duration: number;
  previewUrl: string;
}

const albumDecadeEntries = Object.entries(albumDecadesData) as Array<
  [string, AlbumSource[]]
>;

export const albumDecades = Object.fromEntries(
  albumDecadeEntries.map(([decade, albums]) => {
    return [
      decade,
      albums.map((album) => {
        return {
          ...album,
          imageUrl: getAlbumImageUrl(album.imageId),
        };
      }),
    ];
  })
) as Record<string, Album[]>;

export const albums = Object.values(albumDecades).flat();
