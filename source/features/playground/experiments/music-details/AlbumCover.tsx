import { Link } from "retend/router";
import { Album } from "../../data/music-project";
import { Cell, createUnique } from "retend";
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
  const loaded = Cell.source(false);
  const interactiveRaw = Cell.derived(() => props.get().interactive);

  const themeColor = Cell.derived(() => album.get().themeColor);
  const imageUrl = Cell.derived(() => album.get().imageUrl);
  const altText = Cell.derived(() => {
    return `${album.get().name} by ${album.get().artist}`;
  });
  const discImage = Cell.derived(() => `url(${imageUrl.get()})`);
  const duration = 300;
  const interactive = Cell.derivedAsync(async (get) => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(get(interactiveRaw)), duration + 200);
    });
  });

  return (
    <UniqueTransition
      transitionTimingFunction="cubic-bezier(0, 0.5, 0.6, 1.3)"
      transitionDuration={`${duration}ms`}
    >
      <Link
        ref={ref}
        href="#"
        class={[
          classes.coverLink,
          { [classes.coverLinkInteractive]: interactive },
        ]}
        style={{ "--index": index, "--color": themeColor }}
      >
        <div data-back class={classes.coverBack} />
        <div
          aria-hidden="true"
          class={[
            classes.discShell,
            { [classes.discShellInteractive]: interactive },
          ]}
        >
          <div
            class={[classes.record, { [classes.recordSpinning]: interactive }]}
          />
          <span
            class={[classes.recordLabel, { [classes.artLoaded]: loaded }]}
            style={{ backgroundImage: discImage }}
          />
          <span class={classes.recordHole} />
        </div>
        <div
          data-front
          class={[
            classes.coverFront,
            { [classes.coverFrontInteractive]: interactive },
          ]}
          style={{ backgroundColor: themeColor }}
        >
          <img
            src={imageUrl}
            alt={altText}
            class={[classes.coverImage, { [classes.artLoaded]: loaded }]}
            onLoad={() => loaded.set(true)}
          />
        </div>
      </Link>
    </UniqueTransition>
  );
});
