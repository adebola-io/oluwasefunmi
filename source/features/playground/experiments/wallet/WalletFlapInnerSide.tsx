import { JSX } from "retend/jsx-runtime";
import classes from "./Wallet.module.css";
import { WalletFlapSewing } from "./WalletFlapSewing";

interface WalletFlapInnerSideProps {
  children?: JSX.Children;
}

export function WalletFlapInnerSide(props: WalletFlapInnerSideProps) {
  const { children } = props;

  return (
    <div class={classes.flapInnerSide}>
      <WalletFlapSewing />
      <div class={classes.flapInnerSideContent}>{children}</div>
    </div>
  );
}
