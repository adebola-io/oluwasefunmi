import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import classes from "./MusicPlayer.module.css";
import { AlbumBasket, AlbumBasketProps } from "./music-details/AlbumBasket";
import { AlbumList } from "./music-details/AlbumList";
import { GridPlaceholders } from "./music-details/GridPlaceholders";
import {
  getAlbumGridColumns,
  getAlbumGridRows,
  getAlbumGridTemplateAreas,
} from "./music-details/albumGrid";
import { Cell, If } from "retend";
import { useMatchMedia } from "retend-utils/hooks";

const MusicPlayer: RouteComponent = () => {
  const selected = Cell.source<AlbumBasketProps | null>(null);
  const isTablet = useMatchMedia("(min-width: 768px)");
  const isDesktop = useMatchMedia("(min-width: 1024px)");
  const pointerEvents = Cell.derived(() => (selected.get() ? "none" : "auto"));

  const cols = Cell.derived(() => {
    return getAlbumGridColumns(isTablet.get(), isDesktop.get());
  });
  const rows = Cell.derived(() => getAlbumGridRows(cols.get()));
  const gridTemplateAreas = Cell.derived(() => {
    return getAlbumGridTemplateAreas(cols.get());
  });

  return (
    <div
      class={[
        classes.app,
        "[--size:min(12dvh,20dvw)] max-md:[--size:min(10dvh,15dvw)]",
        "[--album-row-height:calc(var(--size)*4.75)] md:[--album-row-height:calc(var(--size)*3.75)]",
      ]}
    >
      <PlaygroundLayout title="Music Player">
        <div
          class={[
            "h-screen w-screen",
            "grid grid-cols-[repeat(var(--cols),calc(var(--size)*2))] grid-rows-[repeat(var(--rows),var(--album-row-height))]",
            "justify-center content-start md:content-center gap-x-[10dvw] pt-50",
          ]}
          style={{
            "--cols": cols,
            "--rows": rows,
            gridTemplateAreas,
            pointerEvents,
          }}
        >
          <GridPlaceholders />
          <AlbumList selected={selected} />
        </div>
        <div class="fixed w-screen h-screen flex justify-center items-center inset-0 pointer-events-none pt-50">
          {If(selected, (decade) => (
            <AlbumBasket {...decade} isSelected />
          ))}
        </div>
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
