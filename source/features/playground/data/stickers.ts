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
];
