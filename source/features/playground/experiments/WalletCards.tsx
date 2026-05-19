import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

import { PageMeta } from "retend-server/client";
import { SITE_URL } from "@/shared/constants";
import { FirstWalletShowcase } from "./wallet/FirstWalletShowcase";
import { SecondWalletShowcase } from "./wallet/SecondWalletShowcase";
import { Cell, Switch } from "retend";

const WalletCards: RouteComponent<PageMeta> = () => {
  const selectedWallet = Cell.source<"first" | "second">("first");

  return (
    <div class="grid min-h-dvh place-items-center bg-black px-[5vw] py-[12vh] text-white">
      <PlaygroundLayout title="Wallet Cards">
        <div class="grid min-h-full gap-15 place-content-center place-items-center">
          {Switch(selectedWallet, {
            first: FirstWalletShowcase,
            second: SecondWalletShowcase,
          })}
          <div class="inline-flex rounded-full border border-white/10 bg-white/7 p-1 shadow-[0_18px_60px_rgb(0_0_0_/_0.35)] backdrop-blur-md">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              onClick={() => selectedWallet.set("first")}
            >
              <span class="size-2.5 rounded-full bg-[#5b475a] shadow-[0_0_18px_rgb(91_71_90_/_0.9)]" />
              First
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              onClick={() => selectedWallet.set("second")}
            >
              <span class="size-2.5 rounded-full bg-[#7b322f] shadow-[0_0_18px_rgb(123_50_47_/_0.9)]" />
              Second
            </button>
          </div>
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
