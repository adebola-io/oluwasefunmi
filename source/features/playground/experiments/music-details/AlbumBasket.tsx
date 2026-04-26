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
  onSelect?: (props: AlbumBasketProps) => void;
}

export const AlbumBasket = (props: AlbumBasketProps) => {
  const { id, title = "Collection", albums = [], color, onSelect } = props;

  const selected = useScopeContext(AlbumSelectionScope);
  const basketContainer = Cell.source<HTMLElement | null>(null);
  const isGridState = Cell.source(false);

  const isSelected = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id === id : false;
  });
  const isHidden = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id !== id : false;
  });
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;

  const handleClick = async () => {
    onSelect?.(props);
    const el = basketContainer.get();
    if (!el) return;
    const animations = el.getAnimations({ subtree: true });
    const waitingForAnimations = Promise.allSettled(
      animations.map((anim) => anim.finished)
    );
    const timeout = new Promise((resolve) => setTimeout(resolve, 550));
    await Promise.race([waitingForAnimations, timeout]);
    isGridState.set(true);
  };

  return (
    <button
      type="button"
      ref={basketContainer}
      ariaHidden={isHidden}
      class={[
        "grid place-items-center place-content-center transform-3d text-center cursor-pointer",
        "w-[calc(var(--size)*2)] min-h-(--album-row-height)",
        "transition-[opacity,scale] duration-800 ease-(--ease-spring)",
        { "opacity-0 scale-50 pointer-events-none": isHidden },
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
