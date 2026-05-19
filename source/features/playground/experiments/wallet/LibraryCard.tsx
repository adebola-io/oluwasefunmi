import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/library-card.webp",
  { eager: true }
);

const libraryCardImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/library-card.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([libraryCardImage]);
}

export function LibraryCard() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <img
        class="size-full"
        src={libraryCardImage}
        alt="University library card"
        draggable={false}
      />
    </WalletCard>
  );
}
