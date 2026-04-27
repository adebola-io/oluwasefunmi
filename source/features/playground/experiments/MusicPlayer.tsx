import { useRouter, type RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import classes from "./MusicPlayer.module.css";
import {
  AlbumBasket,
  type AlbumBasketProps,
} from "./music-details/AlbumBasket";
import {
  AlbumSelectionContext,
  AlbumSelectionScope,
} from "./music-details/AlbumSelectionScope";
import { SIZING_CLASSES } from "./music-details/albumGrid";
import { Cell, For } from "retend";
import type { Album } from "../data/music-project";
import { albumGroups } from "./music-details/albumGroups";

const MusicPlayer: RouteComponent = () => {
  const router = useRouter();
  const selected = Cell.source<AlbumBasketProps | null>(null);
  const selectedAlbum = Cell.source<Album | null>(null);
  const back = Cell.source<(() => void | Promise<void>) | null>(null);
  const value: AlbumSelectionContext = {
    decade: selected,
    album: selectedAlbum,
    back,
  };
  const backLabel = Cell.derived(() =>
    selectedAlbum.get()
      ? "back to albums"
      : selected.get()
        ? "back to collections"
        : "back to playground"
  );
  const handleBack = () => {
    const backAction = back.get();
    if (selectedAlbum.get()) selectedAlbum.set(null);
    else if (backAction) void backAction();
    else void router.navigate("/playground");
  };

  return (
    <div class={[classes.app, SIZING_CLASSES]}>
      <PlaygroundLayout
        title="Vinyl Player"
        backLabel={backLabel}
        onBack={handleBack}
      >
        <div class="h-screen w-screen max-w-280 px-10 grid place-items-center m-auto">
          <AlbumSelectionScope.Provider value={value}>
            <div class="size-full animate-fade-in grid place-items-center pt-50 md:grid-cols-2 lg:grid-cols-3">
              {For(albumGroups, (group) => (
                <AlbumBasket {...group} />
              ))}
            </div>
          </AlbumSelectionScope.Provider>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

MusicPlayer.metadata = () => ({
  title: "Vinyl Player | Playground",
  description:
    "A tactile vinyl player with animated record artwork and smooth playback.",
  ogTitle: "Vinyl Player | Playground",
  ogDescription:
    "A tactile vinyl player with animated record artwork and smooth playback.",
  ogImage: `${SITE_URL}/og/vinyl-player.png`,
  twitterTitle: "Vinyl Player | Playground",
  twitterDescription:
    "A tactile vinyl player with animated record artwork and smooth playback.",
  twitterImage: `${SITE_URL}/og/vinyl-player.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default MusicPlayer;
