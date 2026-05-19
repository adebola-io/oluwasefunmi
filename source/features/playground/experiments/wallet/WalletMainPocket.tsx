import { onSetup, useScopeContext } from "retend";
import { JSX } from "retend/jsx-runtime";
import { WalletFlapScope, WalletScope } from "./WalletScope";
import classes from "./WalletMainPocket.module.css";

interface WalletMainPocketProps {
  children?: JSX.Children;
}

export function WalletMainPocket(props: WalletMainPocketProps): JSX.Template {
  const { children } = props;
  const { slots: walletSlots } = useScopeContext(WalletScope);
  const walletFlap = useScopeContext(WalletFlapScope);

  walletSlots[walletFlap].mainPocket.set(() => (
    <div class={classes.mainPocketContent}>{children}</div>
  ));

  onSetup(() => {
    return () => {
      walletSlots[walletFlap].mainPocket.set(null);
    };
  });

  return null;
}

Object.defineProperty(WalletMainPocket, "name", { value: "Wallet.MainPocket" });
