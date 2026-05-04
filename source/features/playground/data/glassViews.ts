import type { ImageModule } from "@/shared/types";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/glassviews/*.webp",
  { eager: true }
);

interface GlassviewSource {
  id: number;
  imageId: string;
  name: string;
  themeColor: string;
}

export interface Glassview {
  id: number;
  imageUrl: string;
  name: string;
  themeColor: string;
}

const glassViewSources: GlassviewSource[] = [
  {
    id: 1,
    imageId: "base",
    name: "Base",
    themeColor: "#8a8f98",
  },
  {
    id: 2,
    imageId: "colorized",
    name: "Colorized",
    themeColor: "#41b883",
  },
  {
    id: 3,
    imageId: "comic",
    name: "Comic",
    themeColor: "#f66b3e",
  },
  {
    id: 4,
    imageId: "anime",
    name: "Anime",
    themeColor: "#f08ab8",
  },
  {
    id: 5,
    imageId: "hand-drawn",
    name: "Hand Drawn",
    themeColor: "#d6d0c4",
  },
  {
    id: 6,
    imageId: "impressionist",
    name: "Impressionist",
    themeColor: "#6aa6c8",
  },
  {
    id: 7,
    imageId: "lego",
    name: "Lego",
    themeColor: "#f2c230",
  },
  {
    id: 8,
    imageId: "pixar",
    name: "Pixar",
    themeColor: "#6ea7ff",
  },
  {
    id: 9,
    imageId: "renaissance",
    name: "Renaissance",
    themeColor: "#b9793f",
  },
];

export const glassViews: Glassview[] = glassViewSources.map(
  ({ imageId, ...glassView }) => {
    return {
      ...glassView,
      imageUrl:
        imageModules[
          `/source/features/playground/data/images/glassviews/${imageId}.webp`
        ].default,
    };
  }
);
