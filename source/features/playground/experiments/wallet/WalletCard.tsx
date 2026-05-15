import type { JSX } from "retend/jsx-runtime";
import classes from "./WalletCard.module.css";
import { WalletCardScope, WalletCardSlots } from "./WalletScope";
import { Cell } from "retend";
import { WalletCardBack, WalletCardFront } from "./WalletCardSides";
import { Slot } from "@/components/layout/Slot";

export function WalletCard(props: JSX.BaseContainerProps) {
  const { children, ...rest } = props;
  const slots: WalletCardSlots = {
    front: Cell.source(null),
    back: Cell.source(null),
  };

  return (
    <WalletCardScope.Provider value={slots}>
      <div {...rest} class={[classes.card, rest.class]}>
        {children}
        <div class={classes.cardBack}>
          <Slot content={slots.back} />
        </div>
        <div class={classes.cardFront}>
          <Slot content={slots.front} />
        </div>
      </div>
    </WalletCardScope.Provider>
  );
}

WalletCard.Front = WalletCardFront;
WalletCard.Back = WalletCardBack;
