import { JSX } from "retend/jsx-runtime";
import classes from "./Wallet.module.css";
import { WalletFlapSewing } from "./WalletFlapSewing";

interface WalletFlapInnerSideProps {
  children?: JSX.Children;
}

export function WalletFlapInnerSide(props: WalletFlapInnerSideProps) {
  const { children: _children } = props;

  return (
    <div class={classes.flapInnerSide}>
      <WalletFlapSewing />
      <div class={classes.flapInnerSideContent}>
        <div class={classes.innerSideSubPockets}>
          <div class={[classes.pocket, classes.innerSideSecondPocket]} />
          <div class={[classes.pocket, classes.innerSideThirdPocket]} />
          <div class={[classes.pocket, classes.innerSideFourthPocket]} />
        </div>
        <div class={classes.innerSideMainPocket} />
      </div>
    </div>
  );
}
