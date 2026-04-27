import { Cell, For, useScopeContext } from "retend";
import type { Album, Track } from "../../data/music-project";
import { AlbumPlaybackScope } from "./AlbumPlaybackScope";
import { formatTrackDuration } from "./formatTrackDuration";
import classes from "./AlbumTrackList.module.css";

interface AlbumTrackListProps {
  album: Album;
}

interface AlbumTrackProps {
  index: Cell<number>;
  track: Track;
}

function AlbumTrack(props: AlbumTrackProps) {
  const { index, track } = props;
  const { player } = useScopeContext(AlbumPlaybackScope);
  const trackNumber = Cell.derived(() => index.get() + 1);
  const active = Cell.derived(() => index.get() === player.trackIndex.get());

  const handleClick = () => {
    player.playTrack(index.get());
  };

  return (
    <li class={[classes.track, { [classes.active]: active }]}>
      <button type="button" class={classes.trackButton} onClick={handleClick}>
        <span class={classes.trackNumber}>{trackNumber}</span>
        <strong class={classes.trackName}>{track.name}</strong>
        <time class={classes.trackDuration}>
          {formatTrackDuration(track.duration)}
        </time>
      </button>
    </li>
  );
}

export function AlbumTrackList(props: AlbumTrackListProps) {
  const { album } = props;

  return (
    <aside
      class={[classes.trackList, "animate-fade-in"]}
      style={{ "--cover-color": album.themeColor }}
    >
      <header class={classes.header}>
        <span class={classes.artist}>{album.artist}</span>
        <strong class={classes.title}>{album.name}</strong>
      </header>
      <ol class={classes.tracks}>
        {For(album.tracks, (track, index) => (
          <AlbumTrack index={index} track={track} />
        ))}
      </ol>
    </aside>
  );
}
