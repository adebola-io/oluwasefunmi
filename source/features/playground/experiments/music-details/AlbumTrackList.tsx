import { Cell, For } from "retend";
import type { Album, Track } from "../../data/music-project";
import classes from "./AlbumTrackList.module.css";

interface AlbumTrackListProps {
  album: Album;
}

interface AlbumTrackProps {
  index: Cell<number>;
  track: Track;
}

function formatTrackDuration(duration: number) {
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function AlbumTrack(props: AlbumTrackProps) {
  const { index, track } = props;
  const trackNumber = Cell.derived(() => index.get() + 1);

  return (
    <li class={classes.track}>
      <span class={classes.trackNumber}>{trackNumber}</span>
      <strong class={classes.trackName}>{track.name}</strong>
      <time class={classes.trackDuration}>
        {formatTrackDuration(track.duration)}
      </time>
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
