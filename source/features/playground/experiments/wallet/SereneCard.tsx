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
        <div class="grid grid-cols-1 grid-rows-1 size-full relative overflow-hidden">
          <SereneCardMosaic class="[grid-area:1/1]" />
          <SereneCardText class="[grid-area:1/1] w-[80%] place-self-center" />
        </div>
      </WalletCard>
    </WalletSpotlightTransition>
  );
});
