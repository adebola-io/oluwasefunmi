import { Cell, createUnique, For } from "retend";
import type { JSX } from "retend/jsx-runtime";
import { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import { Basket } from "./Basket";
import { BasketItem } from "./BasketItem";
import { UniqueTransition } from "retend-utils/components";

export interface AlbumBasketProps {
  id: string;
  title: string;
  color: string;
  albums: Album[];
  index: JSX.ValueOrCell<number>;
  isSelected?: boolean;
  selected?: Cell<AlbumBasketProps | null>;
  onSelect?: (props: AlbumBasketProps) => void;
}

export const AlbumBasket = createUnique<AlbumBasketProps>((props) => {
  const {
    id,
    title = "Collection",
    albums = [],
    color,
    onSelect,
    selected,
    index,
  } = props.get();

  const isSelected = Cell.derived(() => Boolean(props.get().isSelected));
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;
  const hovered = Cell.source(false);
  const hidden = Cell.derived(() => {
    return Boolean(selected?.get()?.id && selected.get()?.id !== id);
  });
  const gridArea = Cell.derived(() => {
    const resolvedIndex = index instanceof Cell ? index.get() : index;
    return `basket-${resolvedIndex}`;
  });

  const focused = Cell.derived(() => {
    return isSelected.get() || hovered.get();
  });

  const handleMouseEnter = () => {
    hovered.set(true);
  };

  const handleMouseLeave = () => {
    hovered.set(false);
  };

  const handleClick = () => {
    onSelect?.(props.get());
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
          { "opacity-0 scale-75 pointer-events-none": hidden },
        ]}
        style={{ "--color": color, gridArea }}
        ariaHidden={hidden}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          class={[
            "transform-3d transition-transform duration-500 ease-(--ease-spring)",
            "transform-[rotateX(-20.1357deg)_rotateY(36.994deg)] translate-[0_35%]",
            { "transform-[rotateX(-5.1357deg)_rotateY(5deg)]!": focused },
          ]}
        >
          <Basket color={color}>
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
