import { useDerivedValue } from "retend-utils/hooks";
import classes from "./Wallet.module.css";
import { WalletFlapInnerSide } from "./WalletFlapInnerSide";
import { WalletFlapSewing } from "./WalletFlapSewing";
import { WalletFlapConnectorInnerSewing } from "./WalletFlapConnectorInnerSewing";
import type { JSX } from "retend/jsx-runtime";
import { Cell, If, useScopeContext } from "retend";
import { WalletContext, WalletScope, WalletStateScope } from "./WalletScope";
import { WalletLeftFlap, WalletRightFlap } from "./WalletFlap";
import { WalletMainPocket } from "./WalletMainPocket";
import { WalletSubPocket } from "./WalletSubPocket";
import { WalletFlapConnectorSmallerSewing } from "./WalletFlapConnectorSmallerSewing";

export type WalletTexture =
  | "brushed-leather"
  | "crosshatch-weave"
  | "fine-canvas"
  | "herringbone-twill"
  | "windowpane-stitch"
  | "chevron-twill"
  | "crocodile-glaze"
  | "saffiano-leather"
  | "burnished-patina"
  | "moire-silk"
  | "topographic-grain"
  | "kintsugi-crackle"
  | "damascus-fold"
  | "constellation-jacquard";

interface WalletProps {
  open?: JSX.ValueOrCell<boolean>;
  color?: JSX.ValueOrCell<string>;
  texture?: JSX.ValueOrCell<WalletTexture>;
  width?: JSX.ValueOrCell<string>;
  children?: JSX.Children;
}

export function Wallet(props: WalletProps) {
  const {
    color = "green",
    texture: textureProp = "brushed-leather",
    width = "min(300px, 38dvw, 60dvh)",
    children,
  } = props;
  const texture = useDerivedValue(textureProp);
  const textureVar = Cell.derived(() => {
    return `var(--wallet-${texture.get()}-texture)`;
  });
  const walletState = useScopeContext(WalletStateScope);
  const { isOpen, isOpenOrIsClosing, walletRef } = walletState;

  const ctx: WalletContext = {
    open: isOpen,
    slots: {
      left: {
        mainPocket: Cell.source(null),
        subPockets: [Cell.source(null), Cell.source(null), Cell.source(null)],
      },
      right: {
        mainPocket: Cell.source(null),
        subPockets: [Cell.source(null), Cell.source(null), Cell.source(null)],
      },
    },
  };

  return (
    <WalletScope.Provider value={ctx}>
      {If(isOpenOrIsClosing, () => children)}
      <div
        ref={walletRef}
        data-wallet
        class={classes.wallet}
        data-open={isOpen}
        style={{
          "--wallet-color": color,
          "--wallet-texture": textureVar,
          "--wallet-flap-width": width,
        }}
      >
        <div data-wallet-flap="back" class={[classes.flap, classes.backFlap]}>
          <WalletFlapInnerSide slot={ctx.slots.right} />
        </div>
        <div class={classes.flapConnector}>
          <div class={classes.flapConnectorRight}>
            <WalletFlapConnectorInnerSewing />
          </div>
          <div class={classes.flapConnectorMiddle} />
          <div class={classes.flapConnectorLeft} />
          <div class={classes.flapConnectorInner}>
            <WalletFlapConnectorInnerSewing />
            <div class={classes.flapConnectorInnerMainSewing} />
            <div class={classes.flapConnectorInnerSmallerSewingContainer}>
              <div class={classes.flapConnectorInnerSmallerSewing}>
                <WalletFlapConnectorSmallerSewing />
              </div>
            </div>
          </div>
          <div
            data-wallet-flap="front"
            class={[classes.flap, classes.frontFlap]}
          >
            <WalletFlapSewing />
            <WalletFlapInnerSide slot={ctx.slots.left} />
          </div>
        </div>
      </div>
    </WalletScope.Provider>
  );
}

Wallet.MainPocket = WalletMainPocket;
Wallet.RightFlap = WalletRightFlap;
Wallet.LeftFlap = WalletLeftFlap;
Wallet.SubPocket = WalletSubPocket;
