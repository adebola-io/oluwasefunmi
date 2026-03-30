const imageModules = import.meta.glob<{ default: string }>(
  "/source/features/playground/data/images/stickers/*.webp",
  { eager: true }
);

export interface Sticker {
  name: string;
  imageUrl: string;
}

export const stickers: Sticker[] = [
  {
    name: "Car",
    imageUrl:
      imageModules["/source/features/playground/data/images/stickers/car.webp"]
        .default,
  },
  {
    name: "Oba",
    imageUrl:
      imageModules["/source/features/playground/data/images/stickers/oba.webp"]
        .default,
  },
  {
    name: "Rapunzel",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/rapunzel.webp"
      ].default,
  },
  {
    name: "Roygbiv",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/roygbiv.webp"
      ].default,
  },
  {
    name: "Strawberry",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/strawberry.webp"
      ].default,
  },
  {
    name: "Afro",
    imageUrl:
      imageModules["/source/features/playground/data/images/stickers/afro.webp"]
        .default,
  },
  {
    name: "Cat",
    imageUrl:
      imageModules["/source/features/playground/data/images/stickers/cat.webp"]
        .default,
  },
  {
    name: "Silhoutte",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/silhoutte.webp"
      ].default,
  },
  {
    name: "Swamp",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/swamp.webp"
      ].default,
  },
  {
    name: "Flowers",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/flowers.webp"
      ].default,
  },
  {
    name: "Garden",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/garden.webp"
      ].default,
  },
  {
    name: "Tiger",
    imageUrl:
      imageModules[
        "/source/features/playground/data/images/stickers/tiger.webp"
      ].default,
  },
  {
    name: "Jack",
    imageUrl:
      imageModules["/source/features/playground/data/images/stickers/jack.webp"]
        .default,
  },
];
