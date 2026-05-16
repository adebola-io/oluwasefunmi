import { createUnique } from "retend";
import { WalletQrCode } from "./WalletQrCode";
import { WalletCard } from "./WalletCard";

export const WalletQRCodeCard = createUnique(() => {
  return (
    <WalletCard class="bg-black w-full h-auto aspect-[1.75]">
      <div class="size-full grid">
        <WalletQrCode class="size-full" />
      </div>
    </WalletCard>
  );
});
