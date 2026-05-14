import type { JSX } from "retend/jsx-runtime";
import classes from "./WalletCard.module.css";

interface WalletCardProps {
  children?: JSX.Children;
}

export function WalletCard(props: WalletCardProps) {
  const { children } = props;
  return <div class={classes.card}>{children}</div>;
}
