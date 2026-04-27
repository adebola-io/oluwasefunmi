import { onSetup, useScopeContext } from "retend";
import { AlbumPlaybackControls } from "./AlbumPlaybackControls";
import { AlbumPlaybackScope } from "./AlbumPlaybackScope";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumTrackList } from "./AlbumTrackList";
import { AlbumVinylPlayer } from "./AlbumVinylPlayer";
import classes from "./AlbumPlayerView.module.css";
import { createAlbumPreviewPlayer } from "./albumPreviewPlayer";

export function AlbumPlayerView() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const albumData = album.get();

  if (!albumData) return null;

  const player = createAlbumPreviewPlayer(albumData);

  onSetup(() => {
    const timeout = window.setTimeout(player.play, 800);

    return () => {
      window.clearTimeout(timeout);
      player.destroy();
    };
  });

  return (
    <div class={classes.view}>
      <AlbumPlaybackScope.Provider value={{ player }}>
        <AlbumVinylPlayer />
        <div
          class={classes.details}
          style={{ "--cover-color": albumData.themeColor }}
        >
          <AlbumTrackList album={albumData} />
          <AlbumPlaybackControls />
        </div>
      </AlbumPlaybackScope.Provider>
    </div>
  );
}
