import { For } from "retend";
import { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import { Basket } from "./Basket";
import { BasketItem } from "./BasketItem";
import { Link } from "retend/router";

interface AlbumBasketProps {
  title: string;
  color: string;
  albums: Album[];
}

export function AlbumBasket(props: AlbumBasketProps) {
  const { title = "Collection", albums = [], color } = props;
  const text = `${albums.length} ${albums.length === 1 ? "album" : "albums"}`;

  return (
    <Link
      class="transform-3d text-center animate-fade-in"
      href="#"
      style={{ "--color": color }}
    >
      <div
        class={[
          "transform-3d transition-transform duration-500 ease-(--ease-spring)",
          "transform-[rotateX(-20.1357deg)_rotateY(36.994deg)]",
          "hover:transform-[rotateX(-35.1357deg)_rotateY(10deg)_scale(1.075)]",
        ]}
      >
        <Basket color={color}>
          {For(albums, (album, index) => {
            return (
              <BasketItem index={index} depth="min(12px,1.5dvw)">
                <AlbumCover album={album} />
              </BasketItem>
            );
          })}
        </Basket>
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
}
