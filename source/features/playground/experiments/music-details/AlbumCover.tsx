import type { Album } from "../../data/music-project";
import { Cell, createUnique, onSetup, useScopeContext } from "retend";
import { UniqueTransition } from "retend-utils/components";
import classes from "./AlbumCover.module.css";
import { AlbumSelectionScope } from "./AlbumSelectionScope";
import { AlbumRecord } from "./AlbumRecord";

interface AlbumCoverProps {
  album: Album;
  index: Cell<number>;
  interactive: boolean;
}

export const AlbumCover = createUnique<AlbumCoverProps>((props) => {
  const { album: selectedAlbum } = useScopeContext(AlbumSelectionScope);
  const album = Cell.derived(() => props.get().album);
  const open = Cell.source(selectedAlbum.get() === album.get());
  const index = Cell.derived(() => props.get().index.get());
  const ref = Cell.source<HTMLAnchorElement | null>(null);
  const loading = Cell.source(false);
  const imageRef = Cell.source<HTMLElement | null>(null);
  const interactiveRaw = Cell.derived(() => props.get().interactive);

  const themeColor = Cell.derived(() => album.get().themeColor);
  const imageUrl = Cell.derived(() => album.get().imageUrl);
  const recordImage = Cell.derived(() => `url(${imageUrl.get()})`);
  const altText = Cell.derived(() => {
    return `${album.get().name} by ${album.get().artist}`;
  });
  const imageSrc = Cell.derived(() => {
    if (!loading.get()) return;
    return imageUrl.get();
  });
  const duration = 380 + index.get() * 12;
  const recordId = `record-${album.get().imageId}`;
  const interactive = Cell.derivedAsync(async (get) => {
    if (get(open)) return true;
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(get(interactiveRaw)), duration + 300);
    });
  });

  const handleClick = async () => {
    if (!interactiveRaw.get()) return;
    open.set(true);
    const image = imageRef.get();
    if (!image) return;
    const animations = image.getAnimations();
    await Promise.allSettled(
      animations.map((animation) => {
        return animation.finished;
      })
    );
    selectedAlbum.set(album.get());
  };

  selectedAlbum.listen(async (selectedAlbum) => {
    await new Promise((r) => setTimeout(r, 200));
    if (!selectedAlbum) open.set(false);
  });

  onSetup(() => {
    const wait = duration + index.get() * 10;
    const timeout = setTimeout(() => loading.set(true), wait);
    return () => window.clearTimeout(timeout);
  });

  return (
    <UniqueTransition
      transitionTimingFunction="cubic-bezier(0.42, 0, 0.58, 1.2)"
      transitionDuration={`${duration}ms`}
    >
      <button
        ref={ref}
        type="button"
        class={[
          classes.coverLink,
          {
            [classes.interactive]: interactive,
            [classes.open]: open,
            [classes.hasSelected]: selectedAlbum,
          },
        ]}
        style={{ "--cover-color": themeColor }}
        onClick={handleClick}
      >
        <AlbumRecord
          id={recordId}
          containerClass={classes.recordWrapper}
          class={classes.record}
          themeColor={themeColor}
          imageUrl={recordImage}
          playing
        />
        <img
          ref={imageRef}
          src={imageSrc}
          alt={altText}
          class={classes.coverImage}
        />
      </button>
    </UniqueTransition>
  );
});
