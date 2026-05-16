import { createUnique } from "retend";
import { SereneCardMosaic } from "./SereneCardMosaic";
import { WalletCard } from "./WalletCard";
import { SereneCardText } from "./SereneCardText";

export const SereneCard = createUnique(() => {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <div class="grid grid-cols-1 grid-rows-1 size-full relative overflow-hidden">
        <SereneCardMosaic class="[grid-area:1/1]" />
        <SereneCardText class="[grid-area:1/1] w-[80%] place-self-center" />
      </div>
    </WalletCard>
  );
});
