import { createScope } from "retend";
import type { SourceCell } from "retend";
import type { AlbumBasketProps } from "./AlbumBasket";

export const AlbumSelectionScope = createScope<
  SourceCell<AlbumBasketProps | null>
>("AlbumSelectionScope");
