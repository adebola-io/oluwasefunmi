import { Cell, createUnique, onSetup } from "retend";
import classes from "./AlbumRecord.module.css";
import { JSX } from "retend/jsx-runtime";
import { UniqueTransition } from "retend-utils/components";

interface AlbumRecordProps extends JSX.BaseContainerProps {
  imageUrl: JSX.ValueOrCell<string>;
  themeColor: JSX.ValueOrCell<string>;
  containerClass?: JSX.ValueOrCell<string>;
  playing?: JSX.ValueOrCell<boolean>;
  ref?: Cell<HTMLElement | null>;
}

export const AlbumRecord = createUnique<AlbumRecordProps>((props) => {
  const {
    themeColor,
    imageUrl,
    ref = Cell.source(null),
    ...rest
  } = props.get();
  const className = Cell.derived(() => {
    return props.get().class;
  });
  const containerClass = Cell.derived(() => {
    return props.get().containerClass;
  });
  const playing = Cell.derived(() => {
    const playingVal = props.get().playing;
    if (Cell.isCell(playingVal)) return playingVal.get();

    return Boolean(playingVal);
  });

  const setPlayingState = (isPlaying: boolean) => {
    const div = ref.get();
    if (!div) return;
    console.log(div);
    div.classList.toggle(classes.playing, isPlaying);
  };

  playing.listen(setPlayingState);
  onSetup(() => {
    setPlayingState(playing.get());
  });

  return (
    <UniqueTransition
      transitionTimingFunction="var(--ease-spring)"
      transitionDuration="800ms"
    >
      <div class={[classes.container, containerClass]}>
        <div
          {...rest}
          ref={ref}
          class={[classes.record, className]}
          style={{ "--cover-color": themeColor, "--record-image": imageUrl }}
        />
      </div>
    </UniqueTransition>
  );
});
