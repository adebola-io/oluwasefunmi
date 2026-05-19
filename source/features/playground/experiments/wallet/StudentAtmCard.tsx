import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/student-card.webp",
  { eager: true }
);

const studentCardImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/student-card.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([studentCardImage]);
}

export function StudentAtmCard() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <img
        class="size-full"
        src={studentCardImage}
        alt="Student ATM card"
        draggable={false}
      />
    </WalletCard>
  );
}
