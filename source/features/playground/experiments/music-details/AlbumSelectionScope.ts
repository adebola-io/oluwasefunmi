import { createScope } from "retend";
import type { SourceCell } from "retend";
import type { AlbumBasketProps } from "./AlbumBasket";
import type { Album } from "../../data/music-project";

export interface AlbumSelectionContext {
  decade: SourceCell<AlbumBasketProps | null>;
  album: SourceCell<Album | null>;
  back: SourceCell<(() => void | Promise<void>) | null>;
}

export const AlbumSelectionScope = createScope<AlbumSelectionContext>(
  "AlbumSelectionScope"
);
