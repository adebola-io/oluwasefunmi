import { useScopeContext } from "retend";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumRecord } from "./AlbumRecord";
import classes from "./AlbumPlayerView.module.css";
import { Box } from "../Box";
import { Viewer } from "../../components/Viewer/Viewer";

export function AlbumPlayerView() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const albumData = album.get();
  if (!albumData) return null;
  const recordId = `record-${albumData.imageId}`;
  const recordImage = `url(${albumData.imageUrl})`;

  return (
    <Viewer>
      <div class={classes.player}>
        <Box
          class={classes.deck}
          frontClass={classes.deckFront}
          width={780}
          height={566}
          depth={60}
          curve={18}
          color={albumData.themeColor}
          secondaryColor={`color-mix(${albumData.themeColor} 60%, black)`}
          style={{ "--cover-color": albumData.themeColor }}
        >
          <div class={classes.card}>
            <span>{albumData.name}</span>
            <small>{albumData.artist}</small>
          </div>
          <div class={classes.recordContainer}>
            <AlbumRecord
              id={recordId}
              class={classes.record}
              themeColor={albumData.themeColor}
              imageUrl={recordImage}
            />
          </div>
        </Box>
      </div>
    </Viewer>
  );
}
