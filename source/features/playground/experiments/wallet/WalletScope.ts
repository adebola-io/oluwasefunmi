import { TemplateFn } from "@/components/layout/Slot";
import { Cell, createScope, SourceCell } from "retend";
import { WalletItemType } from "./WalletItem";

export interface FlapSlots {
  mainPocket: SourceCell<TemplateFn>;
  subPockets: [
    SourceCell<TemplateFn>,
    SourceCell<TemplateFn>,
    SourceCell<TemplateFn>,
  ];
}

interface WalletSlots {
  left: FlapSlots;
  right: FlapSlots;
}

export interface WalletContext {
  slots: WalletSlots;
  open: Cell<boolean>;
}

export interface WalletSelectionCtx {
  selectedWalletItem: SourceCell<WalletItemType | null>;
  isOpen: Cell<boolean>;
}

export const WalletScope = createScope<WalletContext>("Wallet");
export const WalletSelectionScope =
  createScope<WalletSelectionCtx>("WalletSelection");
export const WalletFlapScope = createScope<"left" | "right">("WalletFlap");
