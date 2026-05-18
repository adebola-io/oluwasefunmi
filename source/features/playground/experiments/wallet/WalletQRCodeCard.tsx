import { WalletQrCode } from "./WalletQrCode";
import { WalletCard } from "./WalletCard";

export function WalletQRCodeCard() {
  return (
    <WalletCard class="w-full h-auto overflow-hidden aspect-[1.75] in-data-wallet:rotate-[1.5deg]">
      <WalletQrCode class="size-full" />
    </WalletCard>
  );
}
