import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

import { Wallet } from "./wallet/Wallet";
import { Cell, If } from "retend";

import { PageMeta } from "retend-server/client";
import { SITE_URL } from "@/shared/constants";
import { WalletContentSpotlightView } from "./wallet/WalletContentSpotlightView";
import { WalletItem, WalletItemType } from "./wallet/WalletItem";

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
              color="#363e46"
            >
              <Wallet.LeftFlap>
                <Wallet.SubPocket index={0}>
                  <WalletItem
                    item="serene-card"
                    onSelect={() => selectedWalletItem.set("serene-card")}
                  />
                </Wallet.SubPocket>
                <Wallet.SubPocket index={1}>
                  <WalletItem
                    item="qr-code-card"
                    onSelect={() => selectedWalletItem.set("qr-code-card")}
                  />
                </Wallet.SubPocket>
                <Wallet.SubPocket index={2}>
                  <WalletItem
                    item="jack-of-spades-card"
                    onSelect={() =>
                      selectedWalletItem.set("jack-of-spades-card")
                    }
                  />
                </Wallet.SubPocket>
              </Wallet.LeftFlap>
              <Wallet.RightFlap>
                <Wallet.SubPocket index={0}>
                  <WalletItem
                    item="id-card"
                    onSelect={() => selectedWalletItem.set("id-card")}
                  />
                </Wallet.SubPocket>
                <Wallet.SubPocket index={1}>
                  <WalletItem
                    item="rainbow-card"
                    onSelect={() => selectedWalletItem.set("rainbow-card")}
                  />
                </Wallet.SubPocket>
                <Wallet.SubPocket index={2}>
                  <WalletItem
                    item="passport"
                    onSelect={() => selectedWalletItem.set("passport")}
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
