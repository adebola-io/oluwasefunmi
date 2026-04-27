import { useScopeContext } from "retend";
import { AlbumPlayerDetails } from "./AlbumPlayerDetails";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumVinylPlayer } from "./AlbumVinylPlayer";
import classes from "./AlbumPlayerView.module.css";

export function AlbumPlayerView() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const albumData = album.get();

  if (!albumData) return null;

  return (
    <div class={classes.view}>
      <AlbumVinylPlayer />
      <AlbumPlayerDetails album={albumData} />
    </div>
  );
}
