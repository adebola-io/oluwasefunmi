import { Cell, For } from "retend";
import type { JSX } from "retend/jsx-runtime";
import type { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import { Basket } from "./Basket";
import { BasketItem } from "./BasketItem";

interface AlbumBasketPreviewProps {
  albums: Album[];
  basketContainer: Cell<HTMLDivElement | null>;
  color: string;
  focused: JSX.ValueOrCell<boolean>;
  hovered: JSX.ValueOrCell<boolean>;
  selected: JSX.ValueOrCell<boolean>;
  text: string;
  title: string;
}

export function AlbumBasketPreview(props: AlbumBasketPreviewProps) {
  const {
    albums,
    basketContainer,
    color,
    focused,
    hovered,
    selected,
    text,
    title,
  } = props;

  return (
    <>
      <div
        ref={basketContainer}
        class={[
          "transform-3d transition-transform duration-500 ease-(--ease-spring)",
          "transform-[rotateX(-20.1357deg)_rotateY(36.994deg)] translate-[0_35%]",
          { "transform-[rotateX(2deg)_rotateY(5deg)]!": focused },
        ]}
      >
        <Basket color={color} hovered={hovered} selected={selected}>
          {For(albums, (album, index) => (
            <BasketItem index={index} depth="min(10px,1.5dvw)">
              <AlbumCover
                index={index}
                id={album.imageId}
                album={album}
                interactive={false}
              />
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
    </>
  );
}
