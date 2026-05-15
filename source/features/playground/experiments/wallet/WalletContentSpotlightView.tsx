import { Switch } from "retend";
import { JSX } from "retend/jsx-runtime";
import { SereneCard } from "./SereneCard";
import { Passport } from "./Passport";
import { IdCard } from "./IdCard";
import { RainbowCard } from "./RainbowCard";
import { WalletQRCodeCard } from "./WalletQRCodeCard";

export type WalletItemType =
  | "rainbow-card"
  | "serene-card"
  | "qr-code-card"
  | "id-card"
  | "passport";

interface WalletContentSpotlightViewProps {
  item: WalletItemType;
  children?: JSX.Children;
}

export function WalletContentSpotlightView(
  props: WalletContentSpotlightViewProps
) {
  const { item } = props;

  return (
    <div
      data-wallet-spotlight
      class="[--wallet-flap-width:min(90dvw,800px)] h-auto aspect-[1.75] w-(--wallet-flap-width) "
    >
      {Switch(item, {
        "rainbow-card": () => <RainbowCard />,
        "serene-card": () => <SereneCard />,
        "qr-code-card": () => <WalletQRCodeCard />,
        "id-card": () => <IdCard />,
        passport: () => <Passport />,
      })}
    </div>
  );
}
