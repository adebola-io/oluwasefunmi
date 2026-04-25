import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import classes from "./MusicPlayer.module.css";
import type { AlbumBasketProps } from "./music-details/AlbumBasket";
import { AlbumSelectionScope } from "./music-details/AlbumSelectionScope";
import { AlbumGridView } from "./MusicPlayerViews";
import {
  getAlbumGridColumns,
  getAlbumGridRows,
  getAlbumGridTemplateAreas,
  SIZING_CLASSES,
} from "./music-details/albumGrid";
import { Cell } from "retend";
import { useMatchMedia } from "retend-utils/hooks";

const MusicPlayer: RouteComponent = () => {
  const selected = Cell.source<AlbumBasketProps | null>(null);
  const isTablet = useMatchMedia("(min-width: 768px)");
  const isDesktop = useMatchMedia("(min-width: 1024px)");

  const cols = Cell.derived(() => {
    return getAlbumGridColumns(isTablet.get(), isDesktop.get());
  });
  const rows = Cell.derived(() => getAlbumGridRows(cols.get()));
  const gridTemplateAreas = Cell.derived(() => {
    return getAlbumGridTemplateAreas(cols.get());
  });

  return (
    <div class={[classes.app, SIZING_CLASSES]}>
      <PlaygroundLayout title="Music Player">
        <AlbumSelectionScope.Provider value={selected}>
          <AlbumGridView
            cols={cols}
            rows={rows}
            gridTemplateAreas={gridTemplateAreas}
          />
        </AlbumSelectionScope.Provider>
      </PlaygroundLayout>
    </div>
  );
};

MusicPlayer.metadata = () => ({
  title: "Music Player | Playground",
  description:
    "A sleek music player with animated album artwork and smooth playback.",
  ogTitle: "Music Player | Playground",
  ogDescription:
    "A sleek music player with animated album artwork and smooth playback.",
  ogImage: `${SITE_URL}/og/music-player.png`,
  twitterTitle: "Music Player | Playground",
  twitterDescription:
    "A sleek music player with animated album artwork and smooth playback.",
  twitterImage: `${SITE_URL}/og/music-player.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default MusicPlayer;
