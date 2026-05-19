import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/campus-flier.webp",
  { eager: true }
);

const flierImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/campus-flier.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([flierImage]);
}

export function CampusFlier() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <img
        class="size-full"
        src={flierImage}
        alt="Campus club fair flier"
        draggable={false}
      />
    </WalletCard>
  );
}
