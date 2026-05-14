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

  // const colors = ["#602d1c", "#2e224f", "#652d3c"];

  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Wallet Cards">
        <div
          onClick={handleClick}
          class="w-full h-full grid place-items-center"
        >
          <Viewer>
            <Wallet open={open} texture="chevron-twill" color="#2e224f">
              <Wallet.LeftFlap>
                <Wallet.SubPocket index={0}>
                  <WalletCard>
                    <div class="size-full rounded-[inherit] bg-black backdrop-blur-md">
                      first
                    </div>
                  </WalletCard>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={2}>
                  <WalletCard>
                    <div class="size-full bg-green-900">second</div>
                  </WalletCard>
                </Wallet.SubPocket>
              </Wallet.LeftFlap>

              <Wallet.RightFlap>
                <Wallet.SubPocket index={0}>
                  <WalletCard>
                    <div class="size-full rounded-[inherit] bg-black backdrop-blur-md">
                      first
                    </div>
                  </WalletCard>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={1}>
                  <WalletCard>
                    <div class="size-full bg-pink-950">second</div>
                  </WalletCard>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={2}>
                  <WalletCard>
                    <div class="size-full bg-pink-900">second</div>
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
