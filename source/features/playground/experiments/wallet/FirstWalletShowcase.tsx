import { Cell, If } from "retend";
import { Wallet } from "./Wallet";
import { WalletContentSpotlightView } from "./WalletContentSpotlightView";
import { WalletItem, WalletItemType } from "./WalletItem";
import { WalletContainer } from "./WalletContainer";

export function FirstWalletShowcase() {
  const selectedWalletItem = Cell.source<WalletItemType | null>(null);

  return (
    <div class="grid place-items-center">
      <div
        class={[
          "[grid-area:1/1]",
          { "opacity-30 duration-200": selectedWalletItem },
        ]}
      >
        <WalletContainer texture="saffiano-leather" color="#5b475a">
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
        </WalletContainer>
      </div>

      {If(selectedWalletItem, () => (
        <div class="[grid-area:1/1]">
          <WalletContentSpotlightView item={selectedWalletItem} />
        </div>
      ))}
    </div>
  );
}
