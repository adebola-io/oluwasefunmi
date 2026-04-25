import type { JSX } from "retend/jsx-runtime";
import classes from "./MusicPlayer.module.css";
import { AlbumBasket, AlbumBasketProps } from "./music-details/AlbumBasket";
import { AlbumList } from "./music-details/AlbumList";
import { GridPlaceholders } from "./music-details/GridPlaceholders";

interface SelectedAlbumViewProps {
  decade: AlbumBasketProps;
  onBack: () => void;
}

export function SelectedAlbumView(props: SelectedAlbumViewProps) {
  const { decade, onBack } = props;

  return (
    <div class="fixed w-screen h-screen flex justify-center items-center inset-0 pt-50">
      <AlbumBasket {...decade} />
      <button
        type="button"
        class={[classes.backButton, "absolute bottom-10"]}
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
}

interface AlbumGridViewProps {
  cols: JSX.ValueOrCell<number>;
  rows: JSX.ValueOrCell<number>;
  gridTemplateAreas: JSX.ValueOrCell<string>;
}

export function AlbumGridView(props: AlbumGridViewProps) {
  const { cols, rows, gridTemplateAreas } = props;

  return (
    <div
      class={[
        "h-screen w-screen",
        "grid grid-cols-[repeat(var(--cols),calc(var(--size)*2))] grid-rows-[repeat(var(--rows),var(--album-row-height))]",
        "justify-center content-start md:content-center gap-x-[10dvw] pt-50",
      ]}
      style={{ "--cols": cols, "--rows": rows, gridTemplateAreas }}
    >
      <GridPlaceholders />
      <AlbumList />
    </div>
  );
}
