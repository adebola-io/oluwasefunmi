import { Cell } from "retend";

import type { Sticker as StickerType } from "../data/stickers";
interface StickerProps extends StickerType {
  index: Cell<number>;
}

export const Sticker = (props: StickerProps) => {
  const { name, imageUrl } = props;

  return (
    <div class="h-[30dvh] w-auto aspect-[0.7] grid grid-rows-[80%_auto] grid-cols-1 place-items-center outline-2 outline-black bg-amber-50">
      <img
        draggable="false"
        src={imageUrl}
        alt={name}
        class="w-[85%] h-[89%] self-end pointer-events-none outline-2 outline-gray-500 object-cover"
      />
      <p class="text-amber-950 font-light italic font-serif w-[85%]">{name}</p>
    </div>
  );
};
