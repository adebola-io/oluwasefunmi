import { createUnique } from "retend";
import { OluwasefunmiText } from "./OluwasefunmiText";
import { SereneCardMosaic } from "./SereneCardMosaic";
import { WalletCard } from "./WalletCard";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";

export const SereneCard = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <WalletCard class="bg-[#2A3D5C] relative overflow-hidden aspect-[1.75] w-full h-auto grid place-items-center place-content-center">
        <OluwasefunmiText class="w-[80%] h-auto aspect-[1.75] opacity-[0.8]" />
        <SereneCardMosaic class="absolute w-[120%] opacity-[0.3]" />
      </WalletCard>
    </WalletSpotlightTransition>
  );
});
