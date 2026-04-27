import { preloadImages } from "@/shared/utils/imagePreloader";
import { For, onSetup } from "retend";
import { Teleport } from "retend-web";
import type { Album } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";
import classes from "./AlbumCover.module.css";
import { SIZING_CLASSES } from "./albumGrid";

interface AlbumGridOverlayProps {
  albums: Album[];
  onReturn?: () => void;
}

export function AlbumGridOverlay(props: AlbumGridOverlayProps) {
  const { albums, onReturn } = props;

  onSetup(() => {
    preloadImages(albums.map((album) => album.imageUrl));
  });

  return (
    <Teleport to="body" class={SIZING_CLASSES}>
      <div class="fixed top-0 left-0 flex w-screen h-full overflow-y-scroll gap-5 pt-40 px-10 justify-center">
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
      <div class="fixed w-full bottom-5 grid place-items-center">
        <button
          class="inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white/6 px-5 py-2.5 text-sm font-medium text-[#f5efe6] backdrop-blur-[10px] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-(--ease-spring) hover:-translate-y-px hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,46,147,0.2)] active:scale-96"
          type="button"
          onClick={onReturn}
        >
          Back to Collections
        </button>
      </div>
    </Teleport>
  );
}
