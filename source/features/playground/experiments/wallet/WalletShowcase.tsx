import { useScopeContext } from "retend";
import { WalletSelectionScope } from "./WalletScope";
import { Wallet } from "./Wallet";
import { WalletItem } from "./WalletItem";

export function WalletShowcase() {
  const { selectedWalletItem, isOpen } = useScopeContext(WalletSelectionScope);

  return (
    <Wallet open={isOpen} texture="saffiano-leather" color="#363e46">
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
      </Wallet.RightFlap>
    </Wallet>
  );
}
