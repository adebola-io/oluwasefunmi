import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Wallet } from "./wallet/Wallet";
import { Cell } from "retend";

const WalletCards: RouteComponent = () => {
  const open = Cell.source(false);

  const handleClick = () => {
    open.set(!open.get());
  };

  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Wallet Cards">
        <div class="w-full h-full grid place-items-center">
          <button onClick={handleClick}>
            <Wallet open={open} texture="chevron-twill" color="#232333" />
          </button>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default WalletCards;
