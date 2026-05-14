import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Wallet } from "./wallet/Wallet";
import { Cell } from "retend";
import { WalletCard } from "./wallet/WalletCard";
import { Viewer } from "../components/Viewer/Viewer";

const WalletCards: RouteComponent = () => {
  const open = Cell.source(true);

  const handleClick = () => {
    open.set(!open.get());
  };

  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Wallet Cards">
        <div
          onClick={handleClick}
          class="w-full h-full grid place-items-center"
        >
          <Viewer>
            <Wallet
              width="30dvw"
              open={open}
              texture="chevron-twill"
              color="#602d1c"
            >
              <Wallet.RightFlap>
                <Wallet.SubPocket index={0}>
                  <WalletCard>
                    <div class="size-full rounded-[inherit] bg-white/20 backdrop-blur-md">
                      first
                    </div>
                  </WalletCard>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={1}>
                  <WalletCard>
                    <div class="size-full bg-yellow-500/50">second</div>
                  </WalletCard>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={2}>
                  <WalletCard>
                    <div class="size-full bg-green-600">second</div>
                  </WalletCard>
                </Wallet.SubPocket>
              </Wallet.RightFlap>
            </Wallet>
          </Viewer>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default WalletCards;
