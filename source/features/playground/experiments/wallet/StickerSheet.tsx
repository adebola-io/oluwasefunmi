import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/sticker-sheet.webp",
  { eager: true }
);

const sheetImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/sticker-sheet.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([sheetImage]);
}

export function StickerSheet() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <img
        class="size-full"
        src={sheetImage}
        alt="Sticker sheet card"
        draggable={false}
      />
    </WalletCard>
  );
}
