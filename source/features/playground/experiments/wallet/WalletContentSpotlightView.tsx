import { For, If, SourceCell } from "retend";
import { JSX } from "retend/jsx-runtime";
import { Teleport } from "retend-web";
import { WalletItem, WalletItemType } from "./WalletItem";
import classes from "./WalletContentSpotlightView.module.css";

interface WalletContentSpotlightViewProps {
  item: SourceCell<WalletItemType | null>;
  children?: JSX.Children;
}

export function WalletContentSpotlightView(
  props: WalletContentSpotlightViewProps
) {
  const { item } = props;
  const handleClick = () => {
    item.set(null);
  };

  return (
    <Teleport to="body">
      <div class={classes.overlay} onClick--self={handleClick}>
        <div data-wallet-spotlight class={classes.spotlight}>
          <div class={classes.itemContainer}>
            {If(item, (i) => (
              <WalletItem id={i} item={i} selectedWalletItem={item} />
            ))}
          </div>
          <div class={classes.hoverTarget}>
            {For(Array(16).fill(0), () => (
              <div class={classes.hoverBox}></div>
            ))}
          </div>
        </div>
      </div>
    </Teleport>
  );
}
