import { Cell, For } from "retend";
import type { Album, Track } from "../../data/music-project";
import { AlbumCover } from "./AlbumCover";

interface AlbumFocusOverlayProps {
  album: Album;
}

interface TrackRowProps {
  track: Track;
  index: Cell<number>;
}

const focusedIndex = Cell.source(0);

function formatDuration(track: Track) {
  const totalSeconds = Math.round(track.duration / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = `${totalSeconds % 60}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function TrackRow(props: TrackRowProps) {
  const { track, index } = props;
  const trackNumber = Cell.derived(() => index.get() + 1);

  return (
    <li class="grid grid-cols-[2ch_1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm">
      <span class="tabular-nums text-white/35">{trackNumber}</span>
      <span>{track.name}</span>
      <span class="tabular-nums text-white/45">{formatDuration(track)}</span>
    </li>
  );
}

export function AlbumFocusOverlay(props: AlbumFocusOverlayProps) {
  const { album } = props;

  return (
    <div class="fixed inset-0 z-10 grid place-items-center px-10 py-20 bg-black/45 backdrop-blur-md [--album-cover-size:min(42dvw,420px)]">
      <div class="grid max-w-260 w-full grid-cols-[minmax(220px,420px)_minmax(280px,1fr)] items-center gap-10">
        <AlbumCover
          id={album.imageId}
          index={focusedIndex}
          album={album}
          interactive={false}
        />
        <section class="rounded-3xl border border-white/15 bg-black/45 p-6 text-left text-white shadow-2xl shadow-black/35">
          <p class="text-sm uppercase tracking-[0.3em] text-white/50">
            {album.artist}
          </p>
          <h2 class="mt-2 text-4xl font-semibold">{album.name}</h2>
          <ol class="mt-6 grid gap-2 max-h-[58dvh] overflow-auto pr-2">
            {For(album.tracks, (track, index) => (
              <TrackRow track={track} index={index} />
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
