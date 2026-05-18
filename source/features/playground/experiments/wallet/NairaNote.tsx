import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/naira-note.webp",
  { eager: true }
);

const noteImage =
  imageModules["/source/features/playground/data/images/naira-note.webp"]
    .default;

if (typeof window !== "undefined") {
  preloadImages([noteImage]);
}

export function NairaNote() {
  return (
    <WalletCard class="aspect-[1.9] w-full h-auto rounded-[3%] in-data-wallet:rotate-2">
      <img
        class="size-full object-cover"
        src={noteImage}
        alt="Nigerian naira note"
        draggable={false}
      />
    </WalletCard>
  );
}
