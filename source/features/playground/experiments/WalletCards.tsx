import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { Wallet } from "./wallet/Wallet";
import { Viewer } from "../components/Viewer/Viewer";

const WalletCards: RouteComponent = () => {
  return (
    <div class="w-dvw h-dvh bg-black text-white">
      <PlaygroundLayout title="Wallet Cards">
        <div class="w-full h-full grid place-items-center">
          <Viewer>
            <Wallet />
          </Viewer>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

export default WalletCards;
