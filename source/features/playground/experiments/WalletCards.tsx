import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

const WalletCards: RouteComponent = () => {
  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Wallet Cards">
        <div class="w-full h-full grid place-items-center">
          <p>wallet cards playground</p>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default WalletCards;
