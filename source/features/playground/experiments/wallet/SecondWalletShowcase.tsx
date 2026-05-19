import { Cell, If } from "retend";
import { Wallet } from "./Wallet";
import { WalletContentSpotlightView } from "./WalletContentSpotlightView";
import { WalletItem, WalletItemType } from "./WalletItem";
import { WalletContainer } from "./WalletContainer";

export function SecondWalletShowcase() {
  const selectedWalletItem = Cell.source<WalletItemType | null>(null);

  return (
    <div class="grid place-items-center">
      <WalletContainer texture="burnished-patina" color="#7b322f">
        <Wallet.LeftFlap>
          <Wallet.SubPocket index={0}>
            <WalletItem
              id="pokemon-card"
              item="pokemon-card"
              selectedWalletItem={selectedWalletItem}
            />
          </Wallet.SubPocket>
          <Wallet.SubPocket index={1}>
            <WalletItem
              id="transit-ticket"
              item="transit-ticket"
              selectedWalletItem={selectedWalletItem}
            />
          </Wallet.SubPocket>
          <Wallet.SubPocket index={2}>
            <WalletItem
              id="currency-note"
              item="currency-note"
              selectedWalletItem={selectedWalletItem}
            />
          </Wallet.SubPocket>
        </Wallet.LeftFlap>
        <Wallet.RightFlap>
          <Wallet.SubPocket index={0}>
            <WalletItem
              id="gift-card"
              item="gift-card"
              selectedWalletItem={selectedWalletItem}
            />
          </Wallet.SubPocket>
          <Wallet.SubPocket index={1}>
            <WalletItem
              id="sticker-sheet"
              item="sticker-sheet"
              selectedWalletItem={selectedWalletItem}
            />
          </Wallet.SubPocket>
        </Wallet.RightFlap>
      </WalletContainer>

      {If(selectedWalletItem, () => (
        <div class="[grid-area:1/1]">
          <WalletContentSpotlightView item={selectedWalletItem} />
        </div>
      ))}
    </div>
  );
}
