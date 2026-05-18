import { Cell, createUnique, SourceCell, Switch } from "retend";
import { RainbowCard } from "./RainbowCard";
import { SereneCard } from "./SereneCard";
import { WalletQRCodeCard } from "./WalletQRCodeCard";
import { IdCard } from "./IdCard";
import { WalletHoverable } from "./WalletHoverable";
import { CreditCard } from "./CreditCard";
import { NairaNote } from "./NairaNote";
import { UniqueTransition } from "retend-utils/components";

export type WalletItemType =
  | "rainbow-card"
  | "serene-card"
  | "qr-code-card"
  | "id-card"
  | "credit-card"
  | "naira-note";

export interface WalletItemProps {
  item: WalletItemType;
  selectedWalletItem: SourceCell<WalletItemType | null>;
}

export const WalletItem = createUnique<WalletItemProps>((props) => {
  const item = Cell.derived(() => props.get().item);
  const selectedWalletItem = props.get().selectedWalletItem;
  const selected = Cell.derived(() => selectedWalletItem.get() === item.get());
  const pulled = Cell.source(false);

  const handlePull = () => {
    pulled.set(true);
  };

  const handleTransitionEnd = () => {
    if (selectedWalletItem.get() !== item.get()) {
      pulled.set(false);
    }
  };

  const handleSelect = () => {
    selectedWalletItem.set(item.get());
  };

  return (
    <WalletHoverable
      pulled={pulled}
      onPull={handlePull}
      onSelect={handleSelect}
    >
      <UniqueTransition
        topLayer
        transitionDuration="300ms"
        transitionTimingFunction="ease"
        respectParentTransform={false}
        onEnd={handleTransitionEnd}
      >
        <div class="not-in-data-wallet:pointer-events-none! *:pointer-events-auto">
          {Switch(item, {
            "rainbow-card": () => <RainbowCard />,
            "serene-card": () => <SereneCard />,
            "qr-code-card": () => <WalletQRCodeCard />,
            "id-card": () => <IdCard />,
            "credit-card": () => <CreditCard />,
            "naira-note": () => <NairaNote selected={selected} />,
          })}
        </div>
      </UniqueTransition>
    </WalletHoverable>
  );
});
