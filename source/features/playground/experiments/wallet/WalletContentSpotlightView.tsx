import { If, SourceCell } from "retend";
import { JSX } from "retend/jsx-runtime";
import { Teleport } from "retend-web";
import { WalletItem, WalletItemType } from "./WalletItem";
import styles from "./WalletContentSpotlightView.module.css";

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
      <div class={styles.overlay} onClick--self={handleClick}>
        <div data-wallet-spotlight class={styles.spotlight}>
          {If(item, (i) => (
            <WalletItem id={i} item={i} selectedWalletItem={item} />
          ))}
        </div>
      </div>
    </Teleport>
  );
}
