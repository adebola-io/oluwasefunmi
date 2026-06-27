import { Cell, createUnique, If, SourceCell, Switch } from "retend";
import { WalletHoverable } from "./WalletHoverable";
import { UniqueTransition } from "retend-utils/components";
import { RainbowCard } from "./RainbowCard";
import { SereneCard } from "./SereneCard";
import { IdCard } from "./IdCard";
import { CreditCard } from "./CreditCard";
import { NairaNote } from "./NairaNote";
import { PokemonCard } from "./PokemonCard";
import { GiftCard } from "./GiftCard";
import { StickerSheet } from "./StickerSheet";
import { CurrencyNote } from "./CurrencyNote";
import { TransitTicket } from "./TransitTicket";
import { CampusFlier } from "./CampusFlier";
import { LibraryCard } from "./LibraryCard";
import { StudentAtmCard } from "./StudentAtmCard";
import { TimeTable } from "./TimeTable";

function lazyComponent<T>(importer: () => Promise<T>) {
  return () => {
    const LazyComponent = Cell.derivedAsync(importer);
    return If(LazyComponent, (Component) => <Component />);
  };
}

const WalletQRCodeCard = lazyComponent(async () => {
  const module = await import("./WalletQRCodeCard");
  return module.WalletQRCodeCard;
});

export type WalletItemType =
  | "rainbow-card"
  | "serene-card"
  | "qr-code-card"
  | "id-card"
  | "credit-card"
  | "naira-note"
  | "pokemon-card"
  | "gift-card"
  | "sticker-sheet"
  | "currency-note"
  | "transit-ticket"
  | "campus-flier"
  | "library-card"
  | "student-atm-card"
  | "time-table";

export interface WalletItemProps {
  item: WalletItemType;
  selectedWalletItem: SourceCell<WalletItemType | null>;
}

export const WalletItem = createUnique<WalletItemProps>((props) => {
  const item = Cell.derived(() => props.get().item);
  const selectedWalletItem = props.get().selectedWalletItem;
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
            "naira-note": () => <NairaNote />,
            "pokemon-card": () => <PokemonCard />,
            "gift-card": () => <GiftCard />,
            "sticker-sheet": () => <StickerSheet />,
            "currency-note": () => <CurrencyNote />,
            "transit-ticket": () => <TransitTicket />,
            "campus-flier": () => <CampusFlier />,
            "library-card": () => <LibraryCard />,
            "student-atm-card": () => <StudentAtmCard />,
            "time-table": () => <TimeTable />,
          })}
        </div>
      </UniqueTransition>
    </WalletHoverable>
  );
});
