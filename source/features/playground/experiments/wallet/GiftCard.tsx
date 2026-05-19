import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/arcade-card.webp",
  { eager: true }
);

const cardImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/arcade-card.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([cardImage]);
}

export function GiftCard() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <img
        class="size-full"
        src={cardImage}
        alt="Arcade credit card"
        draggable={false}
      />
    </WalletCard>
  );
}
