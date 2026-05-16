import { Cell, createUnique, SourceCell, Switch } from "retend";
import { RainbowCard } from "./RainbowCard";
import { SereneCard } from "./SereneCard";
import { WalletQRCodeCard } from "./WalletQRCodeCard";
import { IdCard } from "./IdCard";
import { Passport } from "./Passport";
import { WalletHoverable } from "./WalletHoverable";
import { JackOfSpadesCard } from "./JackOfSpadesCard";
import { UniqueTransition } from "retend-utils/components";

export type WalletItemType =
  | "rainbow-card"
  | "serene-card"
  | "qr-code-card"
  | "id-card"
  | "passport"
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
        transitionDuration="300ms"
        transitionTimingFunction="var(--ease-spring)"
      >
        <div class="not-in-data-wallet:pointer-events-none! *:pointer-events-auto">
          {Switch(item, {
            "rainbow-card": () => <RainbowCard />,
            "serene-card": () => <SereneCard />,
            "qr-code-card": () => <WalletQRCodeCard />,
            "id-card": () => <IdCard />,
            passport: () => <Passport />,
            "jack-of-spades-card": () => <JackOfSpadesCard />,
          })}
        </div>
      </UniqueTransition>
    </WalletHoverable>
  );
});
