import { onSetup, useScopeContext } from "retend";
import { AlbumPlaybackControls } from "./AlbumPlaybackControls";
import { AlbumPlaybackScope } from "./AlbumPlaybackScope";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumTrackList } from "./AlbumTrackList";
import { AlbumVinylPlayer } from "./AlbumVinylPlayer";
import classes from "./AlbumPlayerView.module.css";
import { createAlbumPreviewPlayer } from "./albumPreviewPlayer";
import { Teleport } from "retend-web";

export function AlbumPlayerView() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const albumData = album.get();

  if (!albumData) return null;

  const player = createAlbumPreviewPlayer(albumData);

  const handleBack = () => {
    album.set(null);
  };

  onSetup(() => {
    const timeout = window.setTimeout(player.play, 800);

    return () => {
      window.clearTimeout(timeout);
      player.destroy();
    };
  });

  return (
    <div class={[classes.view, "animate-fade-in"]}>
      <AlbumPlaybackScope.Provider value={{ player }}>
        <AlbumVinylPlayer />
        <div
          class={classes.details}
          style={{ "--cover-color": albumData.themeColor }}
        >
          <AlbumTrackList album={albumData} />
          <AlbumPlaybackControls />
          <Teleport
            to="body"
            class="fixed w-full left-0 bottom-5 grid! place-items-center"
          >
            <button
              class="inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white/6 px-5 py-2.5 text-sm font-medium text-[#f5efe6] backdrop-blur-[10px] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-(--ease-spring) hover:-translate-y-px hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,46,147,0.2)] active:scale-96"
              type="button"
              onClick={handleBack}
            >
              Back to Albums
            </button>
          </Teleport>
        </div>
      </AlbumPlaybackScope.Provider>
    </div>
  );
}
