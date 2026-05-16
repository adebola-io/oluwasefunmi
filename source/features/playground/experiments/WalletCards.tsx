import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

import { Wallet } from "./wallet/Wallet";
import { Cell, If } from "retend";

import { PageMeta } from "retend-server/client";
import { SITE_URL } from "@/shared/constants";
import { WalletContentSpotlightView } from "./wallet/WalletContentSpotlightView";
import { WalletItem, WalletItemType } from "./wallet/WalletItem";
import { ViewTransition } from "@/components/ViewTransition";

const WalletCards: RouteComponent<PageMeta> = () => {
  const walletIsOpen = Cell.source(false);
  const selectedWalletItem = Cell.source<WalletItemType | null>(null);

  const openWallet = (event: Event) => {
    console.log({ event });
    walletIsOpen.set(!walletIsOpen.get());
  };

  return (
    <div class="grid min-h-dvh place-items-center bg-black px-[5vw] py-[12vh] text-white">
      <ViewTransition>
        <PlaygroundLayout title="Wallet Cards">
          <div class="grid place-items-center">
            <button
              class="[grid-area:1/1] not-has-data-open:cursor-pointer transition-transform duration-500"
              type="button"
              onClick={openWallet}
            >
              <Wallet
                open={walletIsOpen}
                texture="saffiano-leather"
                color="#363e46"
              >
                <Wallet.LeftFlap>
                  <Wallet.SubPocket index={0}>
                    <WalletItem
                      id="serene-card"
                      item="serene-card"
                      selectedWalletItem={selectedWalletItem}
                    />
                  </Wallet.SubPocket>
                  <Wallet.SubPocket index={1}>
                    <WalletItem
                      id="qr-code-card"
                      item="qr-code-card"
                      selectedWalletItem={selectedWalletItem}
                    />
                  </Wallet.SubPocket>
                  <Wallet.SubPocket index={2}>
                    <WalletItem
                      id="jack-of-spades-card"
                      item="jack-of-spades-card"
                      selectedWalletItem={selectedWalletItem}
                    />
                  </Wallet.SubPocket>
                </Wallet.LeftFlap>
                <Wallet.RightFlap>
                  <Wallet.SubPocket index={0}>
                    <WalletItem
                      id="id-card"
                      item="id-card"
                      selectedWalletItem={selectedWalletItem}
                    />
                  </Wallet.SubPocket>
                  <Wallet.SubPocket index={1}>
                    <WalletItem
                      id="rainbow-card"
                      item="rainbow-card"
                      selectedWalletItem={selectedWalletItem}
                    />
                  </Wallet.SubPocket>
                  <Wallet.SubPocket index={2}>
                    <WalletItem
                      id="passport"
                      item="passport"
                      selectedWalletItem={selectedWalletItem}
                    />
                  </Wallet.SubPocket>
                </Wallet.RightFlap>
              </Wallet>
            </button>

            {If(selectedWalletItem, () => (
              <div class="[grid-area:1/1]">
                <WalletContentSpotlightView item={selectedWalletItem} />
              </div>
            ))}
          </div>
        </PlaygroundLayout>
      </ViewTransition>
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
