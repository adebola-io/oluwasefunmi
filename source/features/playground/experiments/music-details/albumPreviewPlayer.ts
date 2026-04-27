import type { Album } from "../../data/music-project";

let activeAudio: HTMLAudioElement | null = null;
let activeTrackIndex = 0;
let activeAlbum: Album | null = null;

function getTrackUrl(album: Album, index: number) {
  return album.tracks[index]?.previewUrl;
}

function playTrack(album: Album, index: number) {
  const url = getTrackUrl(album, index);
  if (!url) return;

  activeTrackIndex = index;
  activeAudio = new Audio(url);
  activeAudio.addEventListener("ended", playNextTrack, { once: true });
  void activeAudio.play().catch(() => {});
}

function playNextTrack() {
  if (!activeAlbum) return;

  const nextIndex = activeTrackIndex + 1;
  const index = nextIndex >= activeAlbum.tracks.length ? 0 : nextIndex;
  playTrack(activeAlbum, index);
}

export function playAlbumPreview(album: Album) {
  stopAlbumPreview();
  activeAlbum = album;
  playTrack(album, 0);
}

export function stopAlbumPreview() {
  if (!activeAudio) return;

  activeAudio.pause();
  activeAudio.removeEventListener("ended", playNextTrack);
  activeAudio = null;
  activeAlbum = null;
  activeTrackIndex = 0;
}
