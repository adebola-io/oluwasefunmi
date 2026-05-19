import { TemplateFn } from "@/components/layout/Slot";
import { AsyncDerivedCell, Cell, createScope, SourceCell } from "retend";
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

export interface WalletStateCtx {
  isOpen: SourceCell<boolean>;
  isOpenOrIsClosing: AsyncDerivedCell<boolean>;
  walletRef: Cell<HTMLElement | null>;
}

export const WalletScope = createScope<WalletContext>("Wallet");
export const WalletFlapScope = createScope<"left" | "right">("WalletFlap");
export const WalletStateScope = createScope<WalletStateCtx>("WalletState");
