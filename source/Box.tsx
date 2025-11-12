import type { JSX } from "retend/jsx-runtime";
import classes from "./Box.module.css";

type DivProps = JSX.IntrinsicElements["div"];
interface BoxProps extends DivProps {
  height?: JSX.ValueOrCell<number>;
  width?: JSX.ValueOrCell<number>;
  depth?: JSX.ValueOrCell<number>;
  curve?: JSX.ValueOrCell<number>;
}

export const Box = (props: BoxProps) => {
  const {
    class: className,
    height = 100,
    width = 100,
    depth = 100,
    curve = 40,
    ...rest
  } = props;

  const style = {
    "--box-height": height,
    "--box-width": width,
    "--box-depth": depth,
    "--box-curve": curve,
  };
  if (rest.style) {
    Object.assign(style, rest.style);
  }

  return (
    <div {...rest} style={style} class={[classes.box, className]}>
      <div class={classes.front} />
      <div class={classes.frontBehind} />
      <div class={classes.back} />
      <div class={classes.backBehind} />
      <div class={classes.top} />
      <div class={classes.bottom} />
      <div class={classes.left} />
      <div class={classes.right} />
      <div class={classes.centerX} />
      <div class={classes.centerY} />
      <div class={classes.diagonalRightToLeftCurveStart} />
      <div class={classes.diagonalRightToLeftCurveEnd} />
      <div class={classes.diagonalLeftToRightCurveStart} />
      <div class={classes.diagonalLeftToRightCurveEnd} />
    </div>
  );
};
