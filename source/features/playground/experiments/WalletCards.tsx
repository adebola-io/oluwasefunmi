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
              color="gray"
            >
              <Wallet.LeftFlap>
                <Wallet.MainPocket>
                  <WalletCard>
                    <div class="size-full bg-purple-900" />
                  </WalletCard>
                </Wallet.MainPocket>
                <Wallet.SubPocket index={0}>
                  <WalletCard>
                    <div class="size-full bg-red-400">first</div>
                  </WalletCard>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={1}>
                  <WalletCard>
                    <div class="size-full bg-yellow-400">second</div>
                  </WalletCard>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={2}>
                  <WalletCard>
                    <div class="size-full bg-blue-200">second</div>
                  </WalletCard>
                </Wallet.SubPocket>
              </Wallet.LeftFlap>
            </Wallet>
          </Viewer>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default WalletCards;
