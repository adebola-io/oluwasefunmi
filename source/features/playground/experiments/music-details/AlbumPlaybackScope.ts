import { createScope } from "retend";
import type { AlbumPreviewPlayer } from "./albumPreviewPlayer";

export interface AlbumPlaybackContext {
  player: AlbumPreviewPlayer;
}

export const AlbumPlaybackScope =
  createScope<AlbumPlaybackContext>("AlbumPlaybackScope");
