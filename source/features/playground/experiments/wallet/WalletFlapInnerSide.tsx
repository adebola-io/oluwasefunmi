import classes from "./WalletFlapInnerSide.module.css";
import { WalletFlapSewing } from "./WalletFlapSewing";
import { WalletPocketSewing } from "./WalletPocketSewing";
import { FlapSlots } from "./WalletScope";
import { Slot } from "@/components/layout/Slot";
import { WalletSubPocketSewing } from "./WalletSubPocketSewing";

interface WalletFlapInnerSideProps {
  slot: FlapSlots;
}

export function WalletFlapInnerSide(props: WalletFlapInnerSideProps) {
  const { slot } = props;

  return (
    <div class={classes.flapInnerSide}>
      <WalletFlapSewing />
      <div class={classes.mainPocket}>
        <Slot content={slot.mainPocket} />
        <div class={classes.mainPocketCovering} />
      </div>
      <div class={classes.subPockets}>
        <WalletPocketSewing />
        <div class={[classes.subPocket, classes.firstSubPocket]}>
          <Slot content={slot.subPockets[0]} />
          <div class={classes.subPocketCovering} />
        </div>
        <div class={[classes.subPocket, classes.secondSubPocket]}>
          <Slot content={slot.subPockets[1]} />
          <div class={classes.subPocketCovering} />
        </div>
        <div class={[classes.subPocket, classes.thirdSubPocket]}>
          <WalletSubPocketSewing />
          <Slot content={slot.subPockets[2]} />
          <div class={classes.subPocketCovering} />
        </div>
      </div>
    </div>
  );
}
