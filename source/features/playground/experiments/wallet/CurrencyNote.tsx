import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/reserve-note.webp",
  { eager: true }
);

const noteImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/reserve-note.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([noteImage]);
}

export function CurrencyNote() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto in-data-wallet:rotate-4">
      <img
        class="size-full object-cover"
        src={noteImage}
        alt="Reserve note card"
        draggable={false}
      />
    </WalletCard>
  );
}
