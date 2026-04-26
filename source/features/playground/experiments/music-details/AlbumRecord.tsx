import { Cell, createUnique } from "retend";
import classes from "./AlbumRecord.module.css";
import { JSX } from "retend/jsx-runtime";

interface AlbumRecordProps extends JSX.BaseContainerProps {
  imageUrl: JSX.ValueOrCell<string>;
  themeColor: JSX.ValueOrCell<string>;
}

export const AlbumRecord = createUnique<AlbumRecordProps>((props) => {
  const { themeColor, imageUrl, ...rest } = props.get();
  const className = Cell.derived(() => {
    return props.get().class;
  });

  return (
    <div
      {...rest}
      class={[classes.record, className]}
      style={{ "--cover-color": themeColor, "--record-image": imageUrl }}
    />
  );
});
