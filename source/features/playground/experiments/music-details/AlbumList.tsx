import { For, useScopeContext } from "retend";
import { AlbumBasket, AlbumBasketProps } from "./AlbumBasket";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { albumGroups } from "./albumGroups";

export function AlbumList() {
  const { decade: selected } = useScopeContext(AlbumSelectionScope);

  const handleAlbumDecadeSelect = (decade: AlbumBasketProps) => {
    selected.set(decade);
  };

  return For(albumGroups, (group) => (
    <AlbumBasket {...group} onSelect={handleAlbumDecadeSelect} />
  ));
}
