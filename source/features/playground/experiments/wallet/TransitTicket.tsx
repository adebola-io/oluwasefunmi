import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/transit-card.webp",
  { eager: true }
);

const cardImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/transit-card.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([cardImage]);
}

export function TransitTicket() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <img
        class="size-full"
        src={cardImage}
        alt="Transit ticket card"
        draggable={false}
      />
    </WalletCard>
  );
}
