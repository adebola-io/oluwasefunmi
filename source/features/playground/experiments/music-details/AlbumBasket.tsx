import { Cell, If, useScopeContext } from "retend";
import type { JSX } from "retend/jsx-runtime";
import { Album } from "../../data/music-project";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumBasketPreview } from "./AlbumBasketPreview";
import { AlbumGridOverlay } from "./AlbumGridOverlay";

export interface AlbumBasketProps {
  id: string;
  title: string;
  color: string;
  albums: Album[];
  index: JSX.ValueOrCell<number>;
  onSelect?: (props: AlbumBasketProps) => void;
}

export const AlbumBasket = (props: AlbumBasketProps) => {
  const {
    id,
    title = "Collection",
    albums = [],
    color,
    onSelect,
    index,
  } = props;

  const selected = useScopeContext(AlbumSelectionScope);
  const hovered = Cell.source(false);
  const basketContainer = Cell.source<HTMLDivElement | null>(null);
  const isGridState = Cell.source(false);

  const isSelected = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id === id : false;
  });
  const isHidden = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id !== id : false;
  });
  const gridArea = Cell.derived(() => {
    const resolvedIndex = index instanceof Cell ? index.get() : index;
    return `basket-${resolvedIndex}`;
  });
  const focused = Cell.derived(() => {
    return isSelected.get() || hovered.get();
  });
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;

  const handleMouseEnter = () => {
    if (isSelected.get()) return;
    hovered.set(true);
  };

  const handleMouseLeave = () => {
    hovered.set(false);
  };

  const handleClick = async () => {
    const div = basketContainer.get();
    if (!div) return;
    const hoverAnimations = div.getAnimations({ subtree: true });
    await Promise.all(hoverAnimations.map((animation) => animation.finished));
    onSelect?.(props);
    hovered.set(false);
    setTimeout(() => {
      isGridState.set(true);
    }, 300);
  };

  return (
    <button
      class={[
        "grid place-items-center place-content-center transform-3d text-center cursor-pointer",
        "w-[calc(var(--size)*2)] min-h-(--album-row-height)",
        "transition-[opacity,scale] duration-500 ease-(--ease-spring)",
        { hidden: isHidden },
      ]}
      style={{ "--color": color, gridArea }}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {If(isGridState, {
        true: () => <AlbumGridOverlay albums={albums} />,
        false: () => (
          <AlbumBasketPreview
            albums={albums}
            basketContainer={basketContainer}
            color={color}
            focused={focused}
            hovered={hovered}
            selected={isSelected}
            text={text}
            title={title}
          />
        ),
      })}
    </button>
  );
};
