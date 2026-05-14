import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

import { Wallet } from "./wallet/Wallet";
import { WalletCard } from "./wallet/WalletCard";
import { Teleport } from "retend-web";
import { Cell } from "retend";
import { IdCard } from "./wallet/IdCard";

const WalletCards: RouteComponent = () => {
  const walletIsOpen = Cell.source(false);

  const toggleWallet = () => {
    walletIsOpen.set(!walletIsOpen.get());
  };

  return (
    <div class="grid min-h-dvh place-items-center bg-black px-[5vw] py-[12vh] text-white">
      <PlaygroundLayout title="Wallet Cards">
        <Wallet open={walletIsOpen} texture="saffiano-leather" color="#4f4d4d">
          <Wallet.RightFlap>
            <Wallet.SubPocket index={0}>
              <WalletCard>
                <IdCard />
              </WalletCard>
            </Wallet.SubPocket>
            <Wallet.SubPocket index={1}>
              <WalletCard />
            </Wallet.SubPocket>
          </Wallet.RightFlap>
        </Wallet>
        <Teleport to="body">
          <div class="fixed bottom-0 grid w-full place-items-center pb-10">
            <button
              class="rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-[0.85rem] font-semibold text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-black/60 hover:text-white active:scale-95"
              type="button"
              onClick={toggleWallet}
            >
              Open Wallet
            </button>
          </div>
        </Teleport>
      </PlaygroundLayout>
    </div>
  );
};

export default WalletCards;
