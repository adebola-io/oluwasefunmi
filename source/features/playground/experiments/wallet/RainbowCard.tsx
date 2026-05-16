import { createUnique } from "retend";
import { WalletCard } from "./WalletCard";

export const RainbowCard = createUnique(() => {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto bg-[linear-gradient(to_right,#ff1f3d_0%,#ff8a00_18%,#fff200_34%,#35e35f_50%,#00c8ff_66%,#355cff_82%,#b000ff_100%)]" />
  );
});
