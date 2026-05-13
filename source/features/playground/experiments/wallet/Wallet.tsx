import { useDerivedValue } from "retend-utils/hooks";
import classes from "./Wallet.module.css";
import { WalletFlapInnerSide } from "./WalletFlapInnerSide";
import { WalletFlapSewing } from "./WalletFlapSewing";
import type { JSX } from "retend/jsx-runtime";
import { Cell } from "retend";

type WalletTexture =
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
  open: JSX.ValueOrCell<boolean>;
  color: JSX.ValueOrCell<string>;
  texture: JSX.ValueOrCell<WalletTexture>;
}

export function Wallet(props: WalletProps) {
  const {
    open,
    color = "green",
    texture: textureProp = "brushed-leather",
  } = props;
  const texture = useDerivedValue(textureProp);
  const textureVar = Cell.derived(
    () => `var(--wallet-${texture.get()}-texture)`
  );

  return (
    <div
      data-wallet
      class={classes.wallet}
      data-open={open}
      style={{ "--wallet-color": color, "--wallet-texture": textureVar }}
    >
      <div class={classes.flapConnector}>
        <div class={classes.flapConnectorRight} />
        <div class={classes.flapConnectorMiddle} />
        <div class={classes.flapConnectorLeft} />
        <div class={classes.flapConnectorInner}>
          <div class={classes.flapConnectorInnerMainSewing} />
          <div class={classes.flapConnectorInnerSmallerSewingContainer}>
            <div class={classes.flapConnectorInnerSmallerSewing} />
          </div>
        </div>
        <div class={[classes.flap, classes.frontFlap]}>
          <WalletFlapSewing />
          <WalletFlapInnerSide />
        </div>
      </div>
      <div class={[classes.flap, classes.backFlap]}>
        <WalletFlapInnerSide>World!</WalletFlapInnerSide>
      </div>
    </div>
  );
}
