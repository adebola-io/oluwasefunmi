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
    <div class={classes.wallet} data-open={open}>
      <div class={classes.flapConnector}>
        <div class={classes.flapConnectorRight} />
        <div class={classes.flapConnectorMiddle} />
        <div class={classes.flapConnectorLeft} />
        <div class={[classes.flap, classes.frontFlap]}>
          <WalletFlapSewing />
          <WalletFlapInnerSide />
        </div>
      </div>
      <div class={[classes.flap, classes.backFlap]}>
        <WalletFlapInnerSide>World!</WalletFlapInnerSide>
      </div>
      <Teleport to="body">
        <button class="fixed bottom-0" type="button" onClick={handleClick}>
          Toggle
        </button>
      </Teleport>
    </div>
  );
}
