import { createUnique } from "retend";
import { WalletQrCode } from "./WalletQrCode";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";
import { WalletCard } from "./WalletCard";

export const WalletQRCodeCard = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <WalletCard class="bg-black w-full h-auto aspect-[1.75]">
        <WalletCard.Front class="size-full grid">
          <WalletQrCode class="size-full" />
        </WalletCard.Front>
      </WalletCard>
    </WalletSpotlightTransition>
  );
});
