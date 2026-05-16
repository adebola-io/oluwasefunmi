import { WalletCard } from "./WalletCard";
import { SereneCardText } from "./SereneCardText";

export function SereneCard() {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto">
      <div class="grid grid-cols-1 grid-rows-1 size-full relative overflow-hidden">
        <SereneCardText />
      </div>
    </WalletCard>
  );
}
