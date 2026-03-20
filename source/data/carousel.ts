import { getAllAvatarImages } from "./avatarImages";

export interface CarouselItem {
  name: string;
  imageUrl: string;
}

const avatarImages = getAllAvatarImages();

export const carouselItems: CarouselItem[] = avatarImages.map((avatar) => ({
  name: avatar.name,
  imageUrl: avatar.url,
}));
