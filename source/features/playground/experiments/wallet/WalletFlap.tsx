import { JSX } from "retend/jsx-runtime";
import { WalletFlapScope } from "./WalletScope";

interface WalletFlapProps {
  children: JSX.Children;
}

export function WalletRightFlap(props: WalletFlapProps) {
  const { children } = props;
  return (
    <WalletFlapScope.Provider value="right">
      {children}
    </WalletFlapScope.Provider>
  );
}

export function WalletLeftFlap(props: WalletFlapProps) {
  const { children } = props;
  return (
    <WalletFlapScope.Provider value="left">{children}</WalletFlapScope.Provider>
  );
}

Object.defineProperty(WalletRightFlap, "name", { value: "Wallet.RightFlap" });
Object.defineProperty(WalletLeftFlap, "name", { value: "Wallet.LeftFlap" });
