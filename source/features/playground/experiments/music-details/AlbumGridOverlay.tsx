import { preloadImages } from "@/shared/utils/imagePreloader";
import { For, onSetup } from "retend";
import { Teleport } from "retend-web";
import type { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import classes from "./AlbumCover.module.css";
import { SIZING_CLASSES } from "./albumGrid";

interface AlbumGridOverlayProps {
  albums: Album[];
}

export function AlbumGridOverlay(props: AlbumGridOverlayProps) {
  const { albums } = props;

  onSetup(() => {
    preloadImages(albums.map((album) => album.imageUrl));
  });

  return (
    <Teleport to="body" class={SIZING_CLASSES}>
      <div class="fixed top-0 left-0 flex w-screen h-full gap-5 pt-40 px-10 justify-center">
        <div
          class={[
            classes.coverGrid,
            "max-w-300 gap-5 flex flex-row-reverse flex-wrap justify-center [--album-cover-size:calc(var(--size)*2)]",
          ]}
        >
          {For(albums, (album, index) => (
            <AlbumCover
              index={index}
              id={album.imageId}
              album={album}
              interactive={true}
            />
          ))}
        </div>
      </div>
    </Teleport>
  );
}
