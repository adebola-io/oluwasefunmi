import { Cell, If } from "retend";
import classes from "./WalletFlapInnerSide.module.css";
import { WalletFlapSewing } from "./WalletFlapSewing";
import { FlapSlots, TemplateFn } from "./WalletScope";

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
        <div class={[classes.subPocket, classes.firstSubPocket]}>
          <Slot content={slot.subPockets[0]} />
          <div class={classes.subPocketCovering} />
        </div>
        <div class={[classes.subPocket, classes.secondSubPocket]}>
          <Slot content={slot.subPockets[1]} />
          <div class={classes.subPocketCovering} />
        </div>
        <div class={[classes.subPocket, classes.thirdSubPocket]}>
          <Slot content={slot.subPockets[2]} />
          <div class={classes.subPocketCovering} />
        </div>
      </div>
    </div>
  );
}

interface SlotProps {
  content: Cell<TemplateFn>;
}

function Slot(props: SlotProps) {
  const { content } = props;
  return If(content, (SlotContent) => <SlotContent />);
}
