import { TemplateFn } from "@/components/layout/Slot";
import { Cell, createScope, SourceCell } from "retend";

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

export interface WalletCardSlots {
  front: SourceCell<TemplateFn>;
  back: SourceCell<TemplateFn>;
}

export interface WalletContext {
  slots: WalletSlots;
  open: Cell<boolean>;
}

export const WalletScope = createScope<WalletContext>("Wallet");
export const WalletFlapScope = createScope<"left" | "right">("WalletFlap");
export const WalletCardScope = createScope<WalletCardSlots>("WalletCard");
