import { Cell, useScopeContext } from "retend";
import { useMatchMedia } from "retend-utils/hooks";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumRecord } from "./AlbumRecord";
import classes from "./AlbumVinylPlayer.module.css";
import { AlbumToneArm } from "./AlbumToneArm";
import { AlbumPlaybackScope } from "./AlbumPlaybackScope";

export function AlbumVinylPlayer() {
  const { album } = useScopeContext(AlbumSelectionScope);
  const { player } = useScopeContext(AlbumPlaybackScope);
  const isPhone = useMatchMedia("(max-width: 30rem)");
  const isSmallTablet = useMatchMedia("(max-width: 40rem)");
  const isTablet = useMatchMedia("(max-width: 56rem)");
  const isLaptop = useMatchMedia("(max-width: 72rem)");
  const albumData = album.get();
  if (!albumData) return null;
  const recordId = `record-${albumData.imageId}`;
  const recordImage = `url(${albumData.imageUrl})`;
  const deckWidth = Cell.derived(() =>
    isPhone.get()
      ? 280
      : isSmallTablet.get()
        ? 390
        : isTablet.get()
          ? 550
          : isLaptop.get()
            ? 680
            : 730
  );
  const deckHeight = Cell.derived(() =>
    Math.round(deckWidth.get() * (566 / 780))
  );

  return (
    <div class={classes.player}>
      <div
        class={[classes.deck, classes.deckFront]}
        style={{
          "--deck-width": deckWidth,
          "--deck-height": deckHeight,
          "--cover-color": albumData.themeColor,
        }}
      >
        <div class={classes.card}>
          <span>{albumData.name}</span>
          <small>{albumData.artist}</small>
        </div>
        <div class={classes.recordContainer}>
          <AlbumRecord
            id={recordId}
            class={classes.record}
            containerClass={classes.recordWrapper}
            themeColor={albumData.themeColor}
            imageUrl={recordImage}
            playing={player.isPlaying}
          />
        </div>
        <div class={classes.tonearm}>
          <div class={classes.arm}>
            <AlbumToneArm />
          </div>
          <div class={classes.pivot} />
        </div>
        <div class={classes.powerControl} aria-hidden="true">
          <span class={classes.powerLight} />
          <span class={classes.powerKnob} />
          <small>Off</small>
          <small>On</small>
        </div>
        <div class={classes.speedControl} aria-hidden="true">
          <span>33</span>
          <span class={classes.speedSlot}>
            <span />
          </span>
          <span>45</span>
        </div>
      </div>
    </div>
  );
}
