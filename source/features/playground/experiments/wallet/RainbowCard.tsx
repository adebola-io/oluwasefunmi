import { createUnique } from "retend";
import { WalletCard } from "./WalletCard";

export const RainbowCard = createUnique(() => {
  return (
    <WalletCard class="aspect-[1.75] w-full h-auto bg-[lightgreen] overflow-hidden">
      <div
        class="size-full blur-xl"
        style={{
          boxShadow: "-6px 7px 0px 2px white inset",
          background:
            "radial-gradient(100% 130% at 90% 0%, #398f88, transparent), radial-gradient(50% 130% at 0% 90%, #53ab53, lightgreen)",
        }}
      ></div>
    </WalletCard>
  );
});
