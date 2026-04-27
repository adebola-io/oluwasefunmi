import { onSetup } from "retend";
import type { Album } from "../../data/music-project";
import { AlbumPlaybackControls } from "./AlbumPlaybackControls";
import { AlbumPlaybackScope } from "./AlbumPlaybackScope";
import { AlbumTrackList } from "./AlbumTrackList";
import classes from "./AlbumPlayerDetails.module.css";
import { createAlbumPreviewPlayer } from "./albumPreviewPlayer";

interface AlbumPlayerDetailsProps {
  album: Album;
}

export function AlbumPlayerDetails(props: AlbumPlayerDetailsProps) {
  const { album } = props;
  const player = createAlbumPreviewPlayer(album);

  onSetup(() => {
    const timeout = window.setTimeout(player.play, 700);

    return () => {
      window.clearTimeout(timeout);
      player.destroy();
    };
  });

  return (
    <AlbumPlaybackScope.Provider value={{ player }}>
      <div
        class={classes.details}
        style={{ "--cover-color": album.themeColor }}
      >
        <AlbumTrackList album={album} />
        <AlbumPlaybackControls />
      </div>
    </AlbumPlaybackScope.Provider>
  );
}
