import classes from "./Wallet.module.css";

export function Wallet() {
  return (
    <div class={classes.wallet}>
      <div class={classes.flapConnector}>
        <div class={classes.flapConnectorRight} />
        <div class={classes.flapConnectorJoin} />
      </div>
      <div class={[classes.flap, classes.backFlap]} />
      <div class={[classes.flap, classes.frontFlap]}>
        <div class={classes.flapSewingShade} />
        <div class={classes.flapSewing} />
      </div>
    </div>
  );
}
