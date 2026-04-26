import { useScopeContext } from "retend";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumRecord } from "./AlbumRecord";

export function AlbumPlayerView() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const albumData = album.get();
  if (!albumData) return null;
  const recordId = `record-${albumData.imageId}`;
  const recordImage = `url(${albumData.imageUrl})`;

  return (
    <div class="grid place-items-center">
      <AlbumRecord
        id={recordId}
        themeColor={albumData.themeColor}
        imageUrl={recordImage}
      />
      <h2 class="text-2xl font-bold">Album Player View</h2>
      <p class="text-gray-600">
        This is where the album player will be displayed.
      </p>
    </div>
  );
}
