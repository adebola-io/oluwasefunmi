import { WalletQrCode } from "./WalletQrCode";
import { WalletCard } from "./WalletCard";

export function WalletQRCodeCard() {
  return (
    <WalletCard class="bg-black w-full h-auto aspect-[1.75]">
      <div class="size-full grid">
        <WalletQrCode class="size-full" />
      </div>
    </WalletCard>
  );
}
