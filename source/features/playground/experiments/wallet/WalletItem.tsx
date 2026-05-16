import {
  Cell,
  createUnique,
  SourceCell,
  Switch,
  useScopeContext,
} from "retend";
import { RainbowCard } from "./RainbowCard";
import { SereneCard } from "./SereneCard";
import { WalletQRCodeCard } from "./WalletQRCodeCard";
import { IdCard } from "./IdCard";
import { Passport } from "./Passport";
import { WalletHoverable } from "./WalletHoverable";
import { JackOfSpadesCard } from "./JackOfSpadesCard";
import { ViewTransitionScope } from "@/components/ViewTransition";

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
  const containerRef = Cell.source<HTMLDivElement | null>(null);
  const { startTransition, onViewTransitionEnd } =
    useScopeContext(ViewTransitionScope);

  const handleSelect = async () => {
    const div = containerRef.get();
    if (!div) return;
    div.style.viewTransitionName = item.get();
    await startTransition(() => {
      selectedWalletItem.set(item.get());
    });
  };

  onViewTransitionEnd(() => {
    if (selectedWalletItem.get()) return;
    const div = containerRef.get();
    if (!div) return;
    div.style.removeProperty("view-transition-name");
  });

  return (
    <WalletHoverable onSelect={handleSelect}>
      <div ref={containerRef} class="[view-transition-class:wallet-item]">
        {Switch(item, {
          "rainbow-card": () => <RainbowCard />,
          "serene-card": () => <SereneCard />,
          "qr-code-card": () => <WalletQRCodeCard />,
          "id-card": () => <IdCard />,
          passport: () => <Passport />,
          "jack-of-spades-card": () => <JackOfSpadesCard />,
        })}
      </div>
    </WalletHoverable>
  );
});
