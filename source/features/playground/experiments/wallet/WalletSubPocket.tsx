import { onSetup, useScopeContext } from "retend";
import { WalletFlapScope, WalletScope } from "./WalletScope";
import classes from "./WalletSubPocket.module.css";
import type { JSX } from "retend/jsx-runtime";

interface WalletSubPocketProps {
  index: 0 | 1 | 2;
  children?: JSX.Children;
}

export function WalletSubPocket(props: WalletSubPocketProps): JSX.Template {
  const { index, children } = props;
  const { slots: walletSlots } = useScopeContext(WalletScope);
  const walletFlap = useScopeContext(WalletFlapScope);

  const WalletSubPocketContent = () => (
    <div data-index={index} class={classes.subPocketContent}>
      {children}
    </div>
  );

  walletSlots[walletFlap].subPockets[index].set(WalletSubPocketContent);

  onSetup(() => {
    return () => {
      walletSlots[walletFlap].subPockets[index].set(null);
    };
  });

  return null;
}

Object.defineProperty(WalletSubPocket, "name", { value: "Wallet.SubPocket" });
