import { Cell, useScopeContext } from "retend";
import { useMatchMedia } from "retend-utils/hooks";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumRecord } from "./AlbumRecord";
import classes from "./AlbumVinylPlayer.module.css";
import { Box } from "../Box";
import { AlbumToneArm } from "./AlbumToneArm";

export function AlbumVinylPlayer() {
  const { album } = useScopeContext(AlbumSelectionScope);
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
  const deckDepth = Cell.derived(() =>
    Math.round(deckWidth.get() * (60 / 780))
  );

  return (
    <div class={[classes.player, "animate-fade-in"]}>
      <Box
        class={classes.deck}
        frontClass={classes.deckFront}
        width={deckWidth}
        height={deckHeight}
        depth={deckDepth}
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
            containerClass={classes.recordWrapper}
            themeColor={albumData.themeColor}
            imageUrl={recordImage}
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
      </Box>
    </div>
  );
}
