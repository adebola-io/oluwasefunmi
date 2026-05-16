import { SourceCell, Switch } from "retend";
import { JSX } from "retend/jsx-runtime";
import { SereneCard } from "./SereneCard";
import { Passport } from "./Passport";
import { IdCard } from "./IdCard";
import { RainbowCard } from "./RainbowCard";
import { WalletQRCodeCard } from "./WalletQRCodeCard";
import { Teleport } from "retend-web";

export type WalletItemType =
  | "rainbow-card"
  | "serene-card"
  | "qr-code-card"
  | "id-card"
  | "passport";

interface WalletContentSpotlightViewProps {
  item: SourceCell<WalletItemType | null>;
  children?: JSX.Children;
}

export function WalletContentSpotlightView(
  props: WalletContentSpotlightViewProps
) {
  const { item } = props;

  const handleClick = () => {
    item.set(null);
  };

  return (
    <Teleport to="body">
      <div
        class="fixed top-0 w-full h-full grid grid-cols-1 grid-rows-1 place-items-center"
        onClick--self={handleClick}
      >
        <div
          data-wallet-spotlight
          class="[--wallet-flap-width:min(90dvw,800px)] grid grid-cols-1 grid-rows-1 h-auto aspect-[1.75] w-(--wallet-flap-width)"
        >
          {Switch(item, {
            "rainbow-card": () => <RainbowCard />,
            "serene-card": () => <SereneCard />,
            "qr-code-card": () => <WalletQRCodeCard />,
            "id-card": () => <IdCard />,
            passport: () => <Passport />,
          })}
        </div>
      </div>
    </Teleport>
  );
}
