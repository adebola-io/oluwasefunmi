import { onSetup, useScopeContext } from "retend";
import { JSX } from "retend/jsx-runtime";
import { WalletCardScope } from "./WalletScope";

export function WalletCardFront(props: JSX.BaseContainerProps): JSX.Template {
  const { front } = useScopeContext(WalletCardScope);
  const { children, ...rest } = props;

  front.set(() => <div {...rest}>{children}</div>);

  onSetup(() => {
    return () => front.set(null);
  });

  return null;
}

export function WalletCardBack(props: JSX.BaseContainerProps): JSX.Template {
  const { back } = useScopeContext(WalletCardScope);
  const { children, ...rest } = props;

  back.set(() => <div {...rest}>{children}</div>);

  onSetup(() => {
    return () => back.set(null);
  });

  return null;
}

Object.defineProperty(WalletCardFront, "name", { value: "WalletCard.Front" });
Object.defineProperty(WalletCardBack, "name", { value: "WalletCard.Back" });
