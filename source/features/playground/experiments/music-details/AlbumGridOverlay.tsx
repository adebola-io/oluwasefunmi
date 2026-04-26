import { preloadImages } from "@/shared/utils/imagePreloader";
import { Cell, For, If, onSetup } from "retend";
import { Teleport } from "retend-web";
import type { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import { AlbumFocusOverlay } from "./AlbumFocusOverlay";
import classes from "./AlbumCover.module.css";
import { SIZING_CLASSES } from "./albumGrid";

interface AlbumGridOverlayProps {
  albums: Album[];
}

export function AlbumGridOverlay(props: AlbumGridOverlayProps) {
  const { albums } = props;
  const focusedAlbum = Cell.source<Album | null>(null);

  onSetup(() => {
    preloadImages(albums.map((album) => album.imageUrl));
  });

  return (
    <Teleport to="body" class={SIZING_CLASSES}>
      {If(focusedAlbum, {
        true: (album) => <AlbumFocusOverlay album={album} />,
        false: () => (
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
                  onOpen={(nextAlbum) => focusedAlbum.set(nextAlbum)}
                />
              ))}
            </div>
          </div>
        ),
      })}
    </Teleport>
  );
}
