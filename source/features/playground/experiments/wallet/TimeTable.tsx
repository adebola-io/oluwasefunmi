import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/wallet-cards/time-table.webp",
  { eager: true }
);

const timeTableImage =
  imageModules[
    "/source/features/playground/data/images/wallet-cards/time-table.webp"
  ].default;

if (typeof window !== "undefined") {
  preloadImages([timeTableImage]);
}

export function TimeTable() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <img
        class="size-full"
        src={timeTableImage}
        alt="Student timetable card"
        draggable={false}
      />
    </WalletCard>
  );
}
