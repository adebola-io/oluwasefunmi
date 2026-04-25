import { For, SourceCell } from "retend";
import { AlbumBasket, AlbumBasketProps } from "./AlbumBasket";
import { albumGroups } from "./albumGroups";

interface AlbumListProps {
  selected: SourceCell<AlbumBasketProps | null>;
}

export function AlbumList(props: AlbumListProps) {
  const { selected } = props;

  const handleAlbumDecadeSelect = (decade: AlbumBasketProps) => {
    selected.set(decade);
  };

  return For(albumGroups, (group, index) => (
    <AlbumBasket
      {...group}
      index={index}
      onSelect={handleAlbumDecadeSelect}
      selected={selected}
    />
  ));
}
