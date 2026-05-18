import type { ImageModule } from "@/shared/types";
import { preloadImages } from "@/shared/utils/imagePreloader";
import { Cell, onSetup } from "retend";
import { WalletCard } from "./WalletCard";

const imageModules = import.meta.glob<ImageModule>(
  "/source/features/playground/data/images/naira-note*.webp",
  { eager: true }
);

const noteImage =
  imageModules["/source/features/playground/data/images/naira-note.webp"]
    .default;
const lowNoteImage =
  imageModules["/source/features/playground/data/images/naira-note-low.webp"]
    .default;

interface NairaNoteProps {
  selected: Cell<boolean>;
}

export function NairaNote(props: NairaNoteProps) {
  const { selected } = props;
  const imageSrc = Cell.derived(() =>
    selected.get() ? noteImage : lowNoteImage
  );

  onSetup(() => {
    preloadImages([noteImage]);
  });

  return (
    <WalletCard class="aspect-[2.18] w-full h-auto rounded-[3%] in-data-wallet:-rotate-1">
      <img
        class="size-full object-cover"
        src={imageSrc}
        alt="Nigerian naira note"
        draggable={false}
      />
    </WalletCard>
  );
}
