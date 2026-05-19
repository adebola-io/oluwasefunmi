import { Cell, If } from "retend";
import { Wallet } from "./Wallet";
import { WalletContentSpotlightView } from "./WalletContentSpotlightView";
import { WalletContainer } from "./WalletContainer";
import { WalletItem, WalletItemType } from "./WalletItem";

export function ThirdWalletShowcase() {
  const selectedWalletItem = Cell.source<WalletItemType | null>(null);

  return (
    <div class="grid place-items-center">
      <div
        class={[
          "[grid-area:1/1]",
          { "opacity-30 duration-200": selectedWalletItem },
        ]}
      >
        <WalletContainer texture="topographic-grain" color="#2f4f46">
          <Wallet.LeftFlap>
            <Wallet.SubPocket index={0}>
              <WalletItem
                id="time-table"
                item="time-table"
                selectedWalletItem={selectedWalletItem}
              />
            </Wallet.SubPocket>
            <Wallet.SubPocket index={1}>
              <WalletItem
                id="library-card"
                item="library-card"
                selectedWalletItem={selectedWalletItem}
              />
            </Wallet.SubPocket>
          </Wallet.LeftFlap>
          <Wallet.RightFlap>
            <Wallet.SubPocket index={0}>
              <WalletItem
                id="student-atm-card"
                item="student-atm-card"
                selectedWalletItem={selectedWalletItem}
              />
            </Wallet.SubPocket>
            <Wallet.SubPocket index={1}>
              <WalletItem
                id="campus-flier"
                item="campus-flier"
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
