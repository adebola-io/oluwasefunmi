import { Cell, createUnique, For, useScopeContext } from "retend";
import type { JSX } from "retend/jsx-runtime";
import { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { Basket } from "./Basket";
import { BasketItem } from "./BasketItem";
import { UniqueTransition } from "retend-utils/components";

export interface AlbumBasketProps {
  id: string;
  title: string;
  color: string;
  albums: Album[];
  index: JSX.ValueOrCell<number>;
  onSelect?: (props: AlbumBasketProps) => void;
}

export const AlbumBasket = createUnique<AlbumBasketProps>((props) => {
  const {
    id,
    title = "Collection",
    albums = [],
    color,
    onSelect,
    index,
  } = props.get();

  const selected = useScopeContext(AlbumSelectionScope);

  const isSelected = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id === id : false;
  });
  const isHidden = Cell.derived(() => {
    const selectedValue = selected.get();
    return selectedValue ? selectedValue.id !== id : false;
  });
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;
  const hovered = Cell.source(false);
  const basketContainer = Cell.source<HTMLDivElement | null>(null);
  const gridArea = Cell.derived(() => {
    const resolvedIndex = index instanceof Cell ? index.get() : index;
    return `basket-${resolvedIndex}`;
  });

  const focused = Cell.derived(() => {
    return isSelected.get() || hovered.get();
  });

  const handleMouseEnter = () => {
    if (isSelected.get()) return;
    hovered.set(true);
  };

  const handleMouseLeave = () => {
    hovered.set(false);
  };

  const handleClick = async () => {
    const div = basketContainer.get();
    if (div) {
      const animations = div.getAnimations({ subtree: true });
      await Promise.all(animations.map((animation) => animation.finished));
    }
    onSelect?.(props.get());
    hovered.set(false);
  };

  return (
    <UniqueTransition
      transitionTimingFunction="var(--ease-spring)"
      transitionDuration="500ms"
      maintainWidthDuringTransition
      maintainHeightDuringTransition
    >
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
        <div
          ref={basketContainer}
          class={[
            "transform-3d transition-transform duration-500 ease-(--ease-spring)",
            "transform-[rotateX(-20.1357deg)_rotateY(36.994deg)] translate-[0_35%]",
            { "transform-[rotateX(2deg)_rotateY(5deg)]!": focused },
          ]}
        >
          <Basket color={color} hovered={hovered} selected={isSelected}>
            {For(albums, (album, index) => (
              <BasketItem index={index} depth="min(10px,1.5dvw)">
                <AlbumCover album={album} />
              </BasketItem>
            ))}
          </Basket>
        </div>
        <h2 class="mt-[25%]! text-3xl">{title}</h2>
        <h3
          class="text-sm"
          style={{ color: "color-mix(in srgb, var(--color), white)" }}
        >
          {text}
        </h3>
      </button>
    </UniqueTransition>
  );
});
