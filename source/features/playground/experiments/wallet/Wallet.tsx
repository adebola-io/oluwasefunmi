import { Cell } from "retend";
import classes from "./Wallet.module.css";
import { Teleport } from "retend-web";
import { WalletFlapInnerSide } from "./WalletFlapInnerSide";
import { WalletFlapSewing } from "./WalletFlapSewing";

export function Wallet() {
  const open = Cell.source(true);

  const handleClick = () => {
    open.set(!open.get());
  };

  return (
    <div data-wallet class={classes.wallet} data-open={open}>
      <div class={classes.flapConnector}>
        <div class={classes.flapConnectorRight} />
        <div class={classes.flapConnectorMiddle} />
        <div class={classes.flapConnectorLeft} />
        <div class={classes.flapConnectorInner}>
          <div class={classes.flapConnectorInnerMainSewing} />
          <div class={classes.flapConnectorInnerSmallerSewingContainer}>
            <div class={classes.flapConnectorInnerSmallerSewing} />
          </div>
        </div>
        <div class={[classes.flap, classes.frontFlap]}>
          <WalletFlapSewing />
          <WalletFlapInnerSide />
        </div>
      </div>
      <div class={[classes.flap, classes.backFlap]}>
        <WalletFlapInnerSide>World!</WalletFlapInnerSide>
      </div>
      <Teleport to="body">
        <div class="fixed bottom-10 w-full flex justify-center">
          <button type="button" onClick={handleClick}>
            Toggle
          </button>
        </div>
      </Teleport>
    </div>
  );
}
