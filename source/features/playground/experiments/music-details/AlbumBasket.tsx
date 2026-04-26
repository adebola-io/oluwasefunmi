import { Cell, If, useScopeContext } from "retend";
import type { JSX } from "retend/jsx-runtime";
import { Album } from "../../data/music-project";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumBasketPreview } from "./AlbumBasketPreview";
import { AlbumGridOverlay } from "./AlbumGridOverlay";
import { Viewer } from "../../components/Viewer/Viewer";

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
  const gridArea = Cell.derived(() => {
    const resolvedIndex = index instanceof Cell ? index.get() : index;
    return `basket-${resolvedIndex}`;
  });
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;

  const handleClick = async () => {
    onSelect?.(props);
    const el = basketContainer.get();
    if (!el) return;
    const animations = el.getAnimations({ subtree: true });
    await Promise.allSettled(animations.map((anim) => anim.finished));
    isGridState.set(true);
  };

  return (
    <Viewer
      ref={basketContainer}
      class={[
        "grid place-items-center place-content-center transform-3d text-center cursor-pointer",
        "w-[calc(var(--size)*2)] min-h-(--album-row-height)",
        "transition-[opacity,scale] duration-500 ease-(--ease-spring)",
        { hidden: isHidden },
      ]}
      style={{ "--color": color, gridArea }}
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
    </Viewer>
  );
};
