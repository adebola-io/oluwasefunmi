import { Cell, createUnique } from "retend";
import classes from "./AlbumRecord.module.css";
import { JSX } from "retend/jsx-runtime";
import { UniqueTransition } from "retend-utils/components";

interface AlbumRecordProps extends JSX.BaseContainerProps {
  imageUrl: JSX.ValueOrCell<string>;
  themeColor: JSX.ValueOrCell<string>;
  containerClass?: JSX.ValueOrCell<string>;
}

export const AlbumRecord = createUnique<AlbumRecordProps>((props) => {
  const { themeColor, imageUrl, ...rest } = props.get();
  const className = Cell.derived(() => {
    return props.get().class;
  });
  const containerClass = Cell.derived(() => {
    return props.get().containerClass;
  });

  return (
    <UniqueTransition
      transitionTimingFunction="var(--ease-spring)"
      transitionDuration="700ms"
    >
      <div class={[classes.container, containerClass]}>
        <div
          {...rest}
          class={[classes.record, className]}
          style={{ "--cover-color": themeColor, "--record-image": imageUrl }}
        />
      </div>
    </UniqueTransition>
  );
});
