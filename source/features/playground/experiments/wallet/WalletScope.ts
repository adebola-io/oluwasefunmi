import { Cell, createScope, SourceCell } from "retend";
import { JSX } from "retend/jsx-runtime";

export type TemplateFn = (() => JSX.Template) | null;

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

export const WalletScope = createScope<WalletContext>("Wallet");
export const WalletFlapScope = createScope<"left" | "right">("WalletFlap");
