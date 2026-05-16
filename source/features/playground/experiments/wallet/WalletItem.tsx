import { Switch } from "retend";
import { RainbowCard } from "./RainbowCard";
import { SereneCard } from "./SereneCard";
import { WalletQRCodeCard } from "./WalletQRCodeCard";
import { IdCard } from "./IdCard";
import { Passport } from "./Passport";
import { WalletHoverable } from "./WalletHoverable";
import { JackOfSpadesCard } from "./JackOfSpadesCard";

export type WalletItemType =
  | "rainbow-card"
  | "serene-card"
  | "qr-code-card"
  | "id-card"
  | "passport"
  | "jack-of-spades-card";

export interface WalletItemProps {
  item: WalletItemType;
  onSelect?: () => void;
}

export function WalletItem(props: WalletItemProps) {
  const { item, onSelect } = props;

  return (
    <WalletHoverable onSelect={onSelect}>
      {Switch(item, {
        "rainbow-card": () => <RainbowCard />,
        "serene-card": () => <SereneCard />,
        "qr-code-card": () => <WalletQRCodeCard />,
        "id-card": () => <IdCard />,
        passport: () => <Passport />,
        "jack-of-spades-card": () => <JackOfSpadesCard />,
      })}
    </WalletHoverable>
  );
}
