import { createUnique } from "retend";
import { WalletCard } from "./WalletCard";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";

export const RainbowCard = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <WalletCard class="aspect-[1.75] w-full h-auto bg-white" />
    </WalletSpotlightTransition>
  );
});
