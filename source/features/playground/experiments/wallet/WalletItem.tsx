import { Cell, createUnique, SourceCell, Switch } from "retend";
import { RainbowCard } from "./RainbowCard";
import { SereneCard } from "./SereneCard";
import { WalletQRCodeCard } from "./WalletQRCodeCard";
import { IdCard } from "./IdCard";
import { WalletHoverable } from "./WalletHoverable";
import { JackOfSpadesCard } from "./JackOfSpadesCard";
import { UniqueTransition } from "retend-utils/components";

export type WalletItemType =
  | "rainbow-card"
  | "serene-card"
  | "qr-code-card"
  | "id-card"
  | "jack-of-spades-card";

export interface WalletItemProps {
  item: WalletItemType;
  selectedWalletItem: SourceCell<WalletItemType | null>;
}

export const WalletItem = createUnique<WalletItemProps>((props) => {
  const item = Cell.derived(() => props.get().item);
  const selectedWalletItem = props.get().selectedWalletItem;

  const handleSelect = () => {
    selectedWalletItem.set(item.get());
  };

  return (
    <WalletHoverable onSelect={handleSelect}>
      <UniqueTransition
        topLayer
        transitionDuration="1000ms"
        transitionTimingFunction="var(--ease-spring)"
        respectParentTransform={false}
      >
        <div class="not-in-data-wallet:pointer-events-none! *:pointer-events-auto">
          {Switch(item, {
            "rainbow-card": () => <RainbowCard />,
            "serene-card": () => <SereneCard />,
            "qr-code-card": () => <WalletQRCodeCard />,
            "id-card": () => <IdCard />,
            "jack-of-spades-card": () => <JackOfSpadesCard />,
          })}
        </div>
      </UniqueTransition>
    </WalletHoverable>
  );
});
