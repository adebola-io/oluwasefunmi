import { createUnique, For } from "retend";
import { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import { Basket } from "./Basket";
import { BasketItem } from "./BasketItem";
import { Link } from "retend/router";
import { UniqueTransition } from "retend-utils/components";

interface AlbumBasketProps {
  title: string;
  color: string;
  albums: Album[];
  index?: number;
}

export const AlbumBasket = createUnique<AlbumBasketProps>((props) => {
  const { title = "Collection", albums = [], color, index = 0 } = props.get();
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;
  const animationDelay = `${index * 150}ms`;
  const initialDisplay = `${index * 10}%`;

  return (
    <Link
      class={[
        "transform-3d text-center",
        "[--size:min(12dvh,20dvw)]",
        "max-md:[--size:min(10dvh,15dvw)]",
      ]}
      href="#"
      style={{ "--color": color }}
    >
      <div
        class="animate-fade-in [animation-fill-mode:backwards]"
        style={{ animationDelay, "--initial-display": initialDisplay }}
      >
        <div
          class={[
            "transform-3d transition-transform duration-500 ease-(--ease-spring) group",
            "transform-[rotateX(-20.1357deg)_rotateY(36.994deg)] translate-[0_35%] [--rotateX:15deg]",
            "hover:transform-[rotateX(-5.1357deg)_rotateY(5deg)_scale(1.075)] hover:[--rotateX:0deg]",
          ]}
        >
          <UniqueTransition>
            <Basket color={color}>
              {For(albums, (album, index) => {
                return (
                  <BasketItem index={index} depth="min(10px,1.5dvw)">
                    <AlbumCover album={album} />
                  </BasketItem>
                );
              })}
            </Basket>
          </UniqueTransition>
        </div>
      </div>
      <h2 class="mt-[25%]! text-3xl">{title}</h2>
      <h3
        class="text-sm"
        style={{ color: "color-mix(in srgb, var(--color), white)" }}
      >
        {text}
      </h3>
    </Link>
  );
});
