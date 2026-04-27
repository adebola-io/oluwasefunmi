import { useScopeContext } from "retend";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumTrackList } from "./AlbumTrackList";
import { AlbumVinylPlayer } from "./AlbumVinylPlayer";
import classes from "./AlbumPlayerView.module.css";

export function AlbumPlayerView() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const albumData = album.get();

  if (!albumData) return null;

  return (
    <div class={classes.view}>
      <AlbumVinylPlayer />
      <AlbumTrackList album={albumData} />
    </div>
  );
}
