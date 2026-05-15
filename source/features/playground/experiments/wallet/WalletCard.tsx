import type { JSX } from "retend/jsx-runtime";
import classes from "./WalletCard.module.css";

export function WalletCard(props: JSX.BaseContainerProps) {
  const { children, ...rest } = props;
  return (
    <div class={classes.cardContainer}>
      <div {...rest} class={[classes.card, rest.class]}>
        {children}
      </div>
    </div>
  );
}
