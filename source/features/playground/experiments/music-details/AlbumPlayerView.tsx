import { onSetup, useScopeContext } from "retend";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumTrackList } from "./AlbumTrackList";
import { AlbumVinylPlayer } from "./AlbumVinylPlayer";
import classes from "./AlbumPlayerView.module.css";
import { playAlbumPreview, stopAlbumPreview } from "./albumPreviewPlayer";

export function AlbumPlayerView() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const albumData = album.get();

  if (!albumData) return null;

  onSetup(() => {
    const timeout = window.setTimeout(() => playAlbumPreview(albumData), 700);

    return () => {
      window.clearTimeout(timeout);
      stopAlbumPreview();
    };
  });

  return (
    <div class={classes.view}>
      <AlbumVinylPlayer />
      <AlbumTrackList album={albumData} />
    </div>
  );
}
