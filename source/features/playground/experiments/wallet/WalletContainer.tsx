import { Cell, useScopeContext } from "retend";
import { JSX } from "retend/jsx-runtime";
import { Wallet, WalletTexture } from "./Wallet";
import { WalletStateScope } from "./WalletScope";

interface WalletContainerProps {
  texture?: WalletTexture;
  color?: string;
  children?: JSX.Children;
}

export function WalletContainer(props: WalletContainerProps) {
  const { texture, color, children } = props;
  const { isOpen: walletIsOpen } = useScopeContext(WalletStateScope);
  const lastTapAt = Cell.source(0);

  const openWallet = () => {
    if (!walletIsOpen.get()) return;
    walletIsOpen.set(!walletIsOpen.get());
  };

  const handleDoubleTap = (event: TouchEvent) => {
    if (!walletIsOpen.get()) return;
    const now = Date.now();
    const isDoubleTap = now - lastTapAt.get() < 300;
    lastTapAt.set(isDoubleTap ? 0 : now);
    if (!isDoubleTap) return;
    event.preventDefault();
    openWallet();
  };

  const handleClick = () => {
    if (walletIsOpen.get()) return;
    walletIsOpen.set(true);
  };

  return (
    <button
      class="size-full touch-manipulation not-has-data-open:cursor-pointer transition-transform duration-500"
      type="button"
      onDblClick={openWallet}
      onClick={handleClick}
      onTouchEnd={handleDoubleTap}
    >
      <Wallet open={walletIsOpen} texture={texture} color={color}>
        {children}
      </Wallet>
    </button>
  );
}
