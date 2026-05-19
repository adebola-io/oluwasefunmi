import { Cell, For } from "retend";
import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";

import { PageMeta } from "retend-server/client";
import { SITE_URL } from "@/shared/constants";
import { FadeSwitch } from "@/components/ui/FadeSwitch";

import { FirstWalletShowcase } from "./wallet/FirstWalletShowcase";
import { SecondWalletShowcase } from "./wallet/SecondWalletShowcase";
import { ThirdWalletShowcase } from "./wallet/ThirdWalletShowcase";
import { WalletStateCtx, WalletStateScope } from "./wallet/WalletScope";

const walletButtonClass =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50";
const walletOptions = [
  {
    id: "first",
    label: "Don Juan",
    badgeClass: "bg-[#5b475a] shadow-[0_0_18px_rgb(91_71_90_/_0.9)]",
  },
  {
    id: "second",
    label: "BBQ",
    badgeClass: "bg-[#7b322f] shadow-[0_0_18px_rgb(123_50_47_/_0.9)]",
  },
  {
    id: "third",
    label: "Slate Green",
    badgeClass: "bg-[#2f4f46] shadow-[0_0_18px_rgb(47_79_70_/_0.9)]",
  },
] as const;

type WalletOption = (typeof walletOptions)[number]["id"];

const WalletCards: RouteComponent<PageMeta> = () => {
  const selectedWallet = Cell.source<WalletOption>("first");
  const isOpen = Cell.source(false);

  const walletRef = Cell.source<HTMLElement | null>(null);
  const isOpenOrIsClosing = Cell.derivedAsync(async (get) => {
    if (get(isOpen)) return true;

    const walletContainer = get(walletRef);
    if (!walletContainer) return false;

    await new Promise<void>((resolve) => queueMicrotask(resolve));
    const animations = walletContainer.getAnimations();
    await Promise.allSettled(animations.map((animation) => animation.finished));
    return get(isOpen);
  });

  const ctx: WalletStateCtx = { isOpen, isOpenOrIsClosing, walletRef };
  const switchToWallet = async (id: WalletOption) => {
    if (id === selectedWallet.get()) {
      isOpen.set(!isOpen.get());
      return;
    }
    Cell.batch(() => {
      isOpen.set(false);
      selectedWallet.set(id);
    });
  };

  const walletButtons = For(walletOptions, (wallet) => {
    const isSelected = Cell.derived(() => selectedWallet.get() === wallet.id);
    const selectedAndOpen = Cell.derived(
      () => selectedWallet.get() === wallet.id && isOpen.get()
    );
    const selectedAndClosed = Cell.derived(
      () => selectedWallet.get() === wallet.id && !isOpen.get()
    );

    return (
      <button
        type="button"
        class={[
          walletButtonClass,
          {
            "bg-white/15 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.16)]":
              selectedAndClosed,
            "bg-emerald-300/20 text-emerald-50 shadow-[inset_0_0_0_1px_rgb(110_231_183/0.3),0_0_24px_rgb(16_185_129/0.18)]":
              selectedAndOpen,
          },
        ]}
        aria-pressed={isSelected}
        onClick={() => switchToWallet(wallet.id)}
      >
        <span class={["size-2.5 rounded-full", wallet.badgeClass]} />
        {wallet.label}
      </button>
    );
  });

  return (
    <WalletStateScope.Provider value={ctx}>
      <div class="grid min-h-dvh place-items-center bg-black px-[5vw] py-[12vh] text-white">
        <PlaygroundLayout title="Wallets">
          <div class="grid min-h-full pt-10 gap-25 place-content-center place-items-center">
            <FadeSwitch
              value={selectedWallet}
              cases={{
                first: FirstWalletShowcase,
                second: SecondWalletShowcase,
                third: ThirdWalletShowcase,
              }}
            />
            <div class="inline-flex gap-2 rounded-full border border-white/10 bg-white/7 p-1 shadow-[0_18px_60px_rgb(0_0_0/0.35)] backdrop-blur-md">
              {walletButtons}
            </div>
          </div>
        </PlaygroundLayout>
      </div>
    </WalletStateScope.Provider>
  );
};

WalletCards.metadata = {
  title: "Wallets | Playground",
  description: "",
  ogTitle: "Wallets | Playground",
  ogDescription: "CSS wallets demo with pull out cards.",
  ogImage: `${SITE_URL}/og/wallet.png`,
  twitterTitle: "Wallets | Playground",
  twitterDescription: "CSS wallets demo with pull out cards.",
  twitterImage: `${SITE_URL}/og/wallet.png`,
  viewport: "width=device-width, initial-scale=1.0",
};

export default WalletCards;
