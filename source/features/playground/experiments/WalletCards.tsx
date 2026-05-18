import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

import { Cell, If } from "retend";

import { PageMeta } from "retend-server/client";
import { SITE_URL } from "@/shared/constants";
import { WalletContentSpotlightView } from "./wallet/WalletContentSpotlightView";
import { WalletItemType } from "./wallet/WalletItem";
import { WalletSelectionScope } from "./wallet/WalletScope";
import { WalletShowcase } from "./wallet/WalletShowcase";

const WalletCards: RouteComponent<PageMeta> = () => {
  const walletIsOpen = Cell.source(false);
  const selectedWalletItem = Cell.source<WalletItemType | null>(null);
  const lastTapAt = Cell.source(0);

  const openWallet = () => {
    walletIsOpen.set(!walletIsOpen.get());
  };

  const handleDoubleTap = (event: TouchEvent) => {
    const now = Date.now();
    const isDoubleTap = now - lastTapAt.get() < 300;
    lastTapAt.set(isDoubleTap ? 0 : now);
    if (!isDoubleTap) return;
    event.preventDefault();
    openWallet();
  };

  const value = { selectedWalletItem, isOpen: walletIsOpen };

  return (
    <WalletSelectionScope.Provider value={value}>
      <div class="grid min-h-dvh place-items-center bg-black px-[5vw] py-[12vh] text-white">
        <PlaygroundLayout title="Wallet Cards">
          <div class="grid place-items-center">
            <button
              class="[grid-area:1/1] touch-manipulation not-has-data-open:cursor-pointer transition-transform duration-500"
              type="button"
              onDblClick={openWallet}
              onTouchEnd={handleDoubleTap}
            >
              <WalletShowcase />
            </button>

            {If(selectedWalletItem, () => (
              <div class="[grid-area:1/1]">
                <WalletContentSpotlightView item={selectedWalletItem} />
              </div>
            ))}
          </div>
        </PlaygroundLayout>
      </div>
    </WalletSelectionScope.Provider>
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
