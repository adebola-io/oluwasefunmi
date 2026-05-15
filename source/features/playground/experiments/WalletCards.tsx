import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

import { Wallet } from "./wallet/Wallet";
import { Cell, If } from "retend";
import { IdCard } from "./wallet/IdCard";
import { Passport } from "./wallet/Passport";
import { PageMeta } from "retend-server/client";
import { SITE_URL } from "@/shared/constants";
import { WalletHoverable } from "./wallet/WalletHoverable";
import { SereneCard } from "./wallet/SereneCard";
import {
  WalletContentSpotlightView,
  WalletItemType,
} from "./wallet/WalletContentSpotlightView";
import { WalletQRCodeCard } from "./wallet/WalletQRCodeCard";
import { Viewer } from "../components/Viewer/Viewer";
import { RainbowCard } from "./wallet/RainbowCard";

const WalletCards: RouteComponent<PageMeta> = () => {
  const walletIsOpen = Cell.source(false);
  const selectedWalletItem = Cell.source<WalletItemType | null>(null);

  const openWallet = () => {
    walletIsOpen.set(!walletIsOpen.get());
  };

  return (
    <div class="grid min-h-dvh place-items-center bg-black px-[5vw] py-[12vh] text-white">
      <PlaygroundLayout title="Wallet Cards">
        <div class="grid place-items-center">
          <button
            class={[
              "[grid-area:1/1] scale-90 rotate-5 not-has-data-open:cursor-pointer transition-transform duration-500",
              "hover:scale-100 hover:rotate-0 has-data-open:scale-100 has-data-open:rotate-0",
            ]}
            type="button"
            onClick={openWallet}
          >
            <Wallet
              open={walletIsOpen}
              texture="saffiano-leather"
              color="#454c48"
            >
              <Wallet.LeftFlap>
                <Wallet.SubPocket index={0}>
                  <WalletHoverable
                    onSelect={() => selectedWalletItem.set("rainbow-card")}
                  >
                    <RainbowCard />
                  </WalletHoverable>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={1}>
                  <WalletHoverable
                    onSelect={() => selectedWalletItem.set("serene-card")}
                  >
                    <SereneCard />
                  </WalletHoverable>
                </Wallet.SubPocket>
              </Wallet.LeftFlap>
              <Wallet.RightFlap>
                <Wallet.SubPocket index={0}>
                  <WalletHoverable
                    onSelect={() => selectedWalletItem.set("id-card")}
                  >
                    <IdCard />
                  </WalletHoverable>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={1}>
                  <WalletHoverable
                    onSelect={() => selectedWalletItem.set("qr-code-card")}
                  >
                    <WalletQRCodeCard />
                  </WalletHoverable>
                </Wallet.SubPocket>
                <Wallet.SubPocket index={2}>
                  <WalletHoverable
                    onSelect={() => selectedWalletItem.set("passport")}
                  >
                    <Passport />
                  </WalletHoverable>
                </Wallet.SubPocket>
              </Wallet.RightFlap>
            </Wallet>
          </button>

          {If(selectedWalletItem, (item) => (
            <div class="[grid-area:1/1]">
              <Viewer>
                <WalletContentSpotlightView item={item} />
              </Viewer>
            </div>
          ))}
        </div>
      </PlaygroundLayout>
      {/*<Viewer>
        <div class="w-[50dvw] transform-3d">
          <SereneCard />
        </div>
      </Viewer>*/}
    </div>
  );
};

WalletCards.metadata = {
  title: "Wallet Cards | Playground",
  description: "",
  ogTitle: "Wallet Cards | Playground",
  ogDescription:
    "An interactive CSS wallet demo with style previews and animated try-on transitions.",
  ogImage: `${SITE_URL}/og/wallet.png`,
  twitterTitle: "Wallet Cards | Playground",
  twitterDescription:
    "An interactive CSS wallet demo with style previews and animated try-on transitions.",
  twitterImage: `${SITE_URL}/og/wallet.png`,
  viewport: "width=device-width, initial-scale=1.0",
};

export default WalletCards;
