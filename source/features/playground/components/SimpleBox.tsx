import type { JSX } from "retend/jsx-runtime";
import classes from "./SimpleBox.module.css";

interface SimpleBoxProps extends JSX.BaseContainerProps {
  width: JSX.ValueOrCell<string>;
  height: JSX.ValueOrCell<string>;
  depth: JSX.ValueOrCell<string>;

  front?: JSX.Template;
  back?: JSX.Template;
}

export function SimpleBox(props: SimpleBoxProps) {
  const { width, height, depth, front, back, ...rest } = props;
  const boxStyle = {
    "--box-width": width,
    "--box-height": height,
    "--box-depth": depth,
  };

  return (
    <div {...rest} class={[classes.simpleBox, rest.class]}>
      <div class={classes.simpleContentBox} style={boxStyle}>
        <div data-face data-front>
          {front}
        </div>
        <div data-face data-back>
          {back}
        </div>
        <div data-face data-left />
        <div data-face data-right />
        <div data-face data-top />
        <div data-face data-bottom />
      </div>
    </div>
  );
}
