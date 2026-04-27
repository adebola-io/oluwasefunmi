import { Cell, If, useScopeContext } from "retend";
import { Album } from "../../data/music-project";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumBasketPreview } from "./AlbumBasketPreview";
import { AlbumGridOverlay } from "./AlbumGridOverlay";

export interface AlbumBasketProps {
  id: string;
  title: string;
  color: string;
  albums: Album[];
}

export const AlbumBasket = (props: AlbumBasketProps) => {
  const { id, title = "Collection", albums = [], color } = props;

  const { collection: selected, back } = useScopeContext(AlbumSelectionScope);
  const basketContainer = Cell.source<HTMLElement | null>(null);
  const selectedValue = selected.get();
  const isInitSelected = selectedValue ? selectedValue.id === id : false;
  const isGridState = Cell.source(isInitSelected);

  const isSelected = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id === id : false;
  });

  const isHidden = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id !== id : false;
  });
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;

  const animations = async (maxDuration = 300) => {
    const el = basketContainer.get();
    if (!el) return;
    const animations = el.getAnimations({ subtree: true });
    const waitingForAnimations = Promise.allSettled(
      animations.map((anim) => anim.finished)
    );
    const timeout = new Promise((resolve) => setTimeout(resolve, maxDuration));
    await Promise.race([waitingForAnimations, timeout]);
  };

  const handleClick = async () => {
    selected.set(props);
    await animations();
    isGridState.set(true);
    back.set(handleReturnFromGrid);
  };

  const handleReturnFromGrid = async () => {
    isGridState.set(false);
    await animations(450);
    selected.set(null);
    back.set(null);
  };

  return (
    <button
      type="button"
      ref={basketContainer}
      ariaHidden={isHidden}
      class={[
        "grid place-items-center place-content-center transform-3d text-center cursor-pointer",
        "w-[calc(var(--size)*2)] min-h-(--album-row-height)",
        "[transition:opacity_800ms,scale_800ms] ease-(--ease-spring) will-change-[opacity,scale]",
        {
          "opacity-0 invisible scale-50 pointer-events-none [transition:opacity_800ms,scale_800ms,visibility_1ms_800ms]!":
            isHidden,
        },
      ]}
      style={{ "--color": color }}
      onClick={handleClick}
    >
      {If(isGridState, {
        true: () => <AlbumGridOverlay albums={albums} />,
        false: () => (
          <AlbumBasketPreview
            albums={albums}
            color={color}
            selected={isSelected}
            text={text}
            title={title}
          />
        ),
      })}
    </button>
  );
};
