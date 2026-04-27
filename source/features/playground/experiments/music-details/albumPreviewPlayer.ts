import { Cell, type SourceCell } from "retend";
import type { Album, Track } from "../../data/music-project";

export interface AlbumPreviewPlayer {
  currentTime: SourceCell<number>;
  currentTrack: Cell<Track>;
  duration: SourceCell<number>;
  isPlaying: SourceCell<boolean>;
  progress: Cell<number>;
  trackIndex: SourceCell<number>;
  destroy: () => void;
  next: () => void;
  pause: () => void;
  play: () => void;
  playTrack: (index: number) => void;
  previous: () => void;
  toggle: () => void;
}

export function createAlbumPreviewPlayer(album: Album): AlbumPreviewPlayer {
  const trackIndex = Cell.source(0);
  const currentTime = Cell.source(0);
  const duration = Cell.source(0);
  const isPlaying = Cell.source(false);
  const currentTrack = Cell.derived(() => album.tracks[trackIndex.get()]);
  const progress = Cell.derived(() => {
    if (!duration.get()) return 0;
    return Math.min(100, (currentTime.get() / duration.get()) * 100);
  });
  let audio: HTMLAudioElement | null = null;

  const updateTime = () => {
    if (!audio) return;

    currentTime.set(audio.currentTime * 1000);
    duration.set((audio.duration || currentTrack.get().duration / 1000) * 1000);
  };

  const destroyAudio = () => {
    if (!audio) return;

    audio.pause();
    audio.removeEventListener("timeupdate", updateTime);
    audio.removeEventListener("loadedmetadata", updateTime);
    audio.removeEventListener("ended", next);
    audio.src = "";
    audio = null;
  };

  const play = () => {
    if (!audio) {
      audio = new Audio(currentTrack.get().previewUrl);
      audio.addEventListener("ended", next);
      audio.addEventListener("loadedmetadata", updateTime);
      audio.addEventListener("timeupdate", updateTime);
      duration.set(currentTrack.get().duration);
    }

    void audio
      .play()
      .then(() => isPlaying.set(true))
      .catch(() => isPlaying.set(false));
  };

  const setTrack = (index: number, shouldPlay = isPlaying.get()) => {
    const nextIndex = (index + album.tracks.length) % album.tracks.length;

    destroyAudio();
    trackIndex.set(nextIndex);
    currentTime.set(0);
    duration.set(album.tracks[nextIndex].duration);
    isPlaying.set(false);

    if (shouldPlay) play();
  };

  function next() {
    setTrack(trackIndex.get() + 1);
  }

  const previous = () => {
    setTrack(trackIndex.get() - 1);
  };

  const playTrack = (index: number) => {
    setTrack(index, true);
  };

  const pause = () => {
    if (!audio) return;

    audio.pause();
    isPlaying.set(false);
  };

  const toggle = () => {
    if (isPlaying.get()) {
      pause();
      return;
    }

    play();
  };

  const destroy = () => {
    destroyAudio();
    currentTime.set(0);
    duration.set(0);
    isPlaying.set(false);
  };

  return {
    currentTime,
    currentTrack,
    destroy,
    duration,
    isPlaying,
    progress,
    next,
    pause,
    play,
    playTrack,
    previous,
    toggle,
    trackIndex,
  };
}
