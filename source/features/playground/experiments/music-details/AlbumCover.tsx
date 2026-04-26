import { Link } from "retend/router";
import { Album } from "../../data/music-project";
import { Cell, createUnique, onSetup } from "retend";
import { UniqueTransition } from "retend-utils/components";
import classes from "./AlbumCover.module.css";

interface AlbumCoverProps {
  album: Album;
  index: Cell<number>;
  interactive: boolean;
}

export const AlbumCover = createUnique<AlbumCoverProps>((props) => {
  const album = Cell.derived(() => props.get().album);
  const index = Cell.derived(() => props.get().index.get());
  const ref = Cell.source<HTMLAnchorElement | null>(null);
  const loading = Cell.source(false);
  const interactiveRaw = Cell.derived(() => props.get().interactive);

  const themeColor = Cell.derived(() => album.get().themeColor);
  const imageUrl = Cell.derived(() => album.get().imageUrl);
  const altText = Cell.derived(() => {
    return `${album.get().name} by ${album.get().artist}`;
  });
  const imageSrc = Cell.derived(() => {
    if (!loading.get()) return;
    return imageUrl.get();
  });
  const recordImage = Cell.derived(() => `url(${imageSrc.get()})`);
  const duration = 375 + index.get() * 12;
  const interactive = Cell.derivedAsync(async (get) => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(get(interactiveRaw)), duration + 200);
    });
  });
  onSetup(() => {
    const timeout = setTimeout(
      () => loading.set(true),
      duration + index.get() * 30
    );
    return () => window.clearTimeout(timeout);
  });

  return (
    <UniqueTransition
      transitionTimingFunction="ease-in-out"
      transitionDuration={`${duration}ms`}
    >
      <Link
        ref={ref}
        href="#"
        class={[classes.coverLink, { [classes.interactive]: interactive }]}
        style={{
          "--index": index,
          "--cover-color": themeColor,
          "--record-image": recordImage,
        }}
      >
        <div class={classes.record} />
        <img src={imageSrc} alt={altText} class={classes.coverImage} />
      </Link>
    </UniqueTransition>
  );
});
