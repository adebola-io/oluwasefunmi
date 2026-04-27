import type { ImageModule } from "@/shared/types";
import albumCollectionsData from "./albums.json";

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

const albumCollectionEntries = Object.entries(albumCollectionsData) as Array<
  [string, AlbumSource[]]
>;

export const albumCollections = Object.fromEntries(
  albumCollectionEntries.map(([collection, albums]) => {
    return [
      collection,
      albums.map((album) => {
        return {
          ...album,
          imageUrl: getAlbumImageUrl(album.imageId),
        };
      }),
    ];
  })
) as Record<string, Album[]>;

export const albums = Object.values(albumCollections).flat();
