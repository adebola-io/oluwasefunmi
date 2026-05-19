import { Cell, If } from "retend";
import { Wallet } from "./Wallet";
import { WalletContentSpotlightView } from "./WalletContentSpotlightView";
import { WalletItem, WalletItemType } from "./WalletItem";

export function FirstWalletShowcase() {
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

  return (
    <div class="grid place-items-center">
      <button
        class="[grid-area:1/1] touch-manipulation not-has-data-open:cursor-pointer transition-transform duration-500"
        type="button"
        onDblClick={openWallet}
        onTouchEnd={handleDoubleTap}
      >
        <Wallet open={walletIsOpen} texture="saffiano-leather" color="#5b475a">
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
                id="credit-card"
                item="credit-card"
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
                id="naira-note"
                item="naira-note"
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
  );
}
