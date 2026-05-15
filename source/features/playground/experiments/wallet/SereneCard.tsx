import { createUnique } from "retend";
import { SereneCardMosaic } from "./SereneCardMosaic";
import { WalletCard } from "./WalletCard";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";
import { SereneCardText } from "./SereneCardText";

export const SereneCard = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <WalletCard
        class={[
          "aspect-[1.75] w-full h-auto",
          "in-data-wallet:rotate-3",
          "hover:rotate-0",
          "transition-transform duration-300",
        ]}
      >
        <WalletCard.Front class="grid grid-cols-1 grid-rows-1 size-full relative overflow-hidden">
          <SereneCardMosaic class="[grid-area:1/1]" />
          <SereneCardText class="[grid-area:1/1] w-[80%] place-self-center" />
        </WalletCard.Front>
        <WalletCard.Back class="bg-[#0A062E] size-full grid [grid:1fr/1fr]">
          <SereneCardMosaic class="[grid-area:1/1]" />
        </WalletCard.Back>
      </WalletCard>
    </WalletSpotlightTransition>
  );
});
