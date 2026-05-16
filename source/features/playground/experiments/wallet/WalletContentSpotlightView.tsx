import { If, SourceCell, useScopeContext } from "retend";
import { JSX } from "retend/jsx-runtime";
import { Teleport } from "retend-web";
import { WalletItem, WalletItemType } from "./WalletItem";
import { ViewTransitionScope } from "@/components/ViewTransition";

interface WalletContentSpotlightViewProps {
  item: SourceCell<WalletItemType | null>;
  children?: JSX.Children;
}

export function WalletContentSpotlightView(
  props: WalletContentSpotlightViewProps
) {
  const { item } = props;
  const { startTransition } = useScopeContext(ViewTransitionScope);

  const handleClick = async () => {
    await startTransition(async () => {
      item.set(null);
      await new Promise((resolve) => setTimeout(resolve));
    });
  };

  return (
    <Teleport to="body">
      <div
        class="fixed top-0 w-full h-full grid grid-cols-1 grid-rows-1 place-items-center"
        onClick--self={handleClick}
      >
        <div
          data-wallet-spotlight
          class="[--wallet-flap-width:min(90dvw,800px)] grid grid-cols-1 grid-rows-1 h-auto aspect-[1.75] w-(--wallet-flap-width)"
        >
          {If(item, (i) => (
            <WalletItem id={i} item={i} selectedWalletItem={item} />
          ))}
        </div>
      </div>
    </Teleport>
  );
}
