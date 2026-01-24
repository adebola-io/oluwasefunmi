import type { JSX } from "retend/jsx-runtime";
import classes from "./Box.module.css";
import { Cell, If } from "retend";
import { useDerivedValue } from "retend-utils/hooks";

interface BoxProps extends JSX.BaseContainerProps {
  height?: JSX.ValueOrCell<number>;
  width?: JSX.ValueOrCell<number>;
  depth?: JSX.ValueOrCell<number>;
  curve?: JSX.ValueOrCell<number>;
  color?: JSX.ValueOrCell<string>;
  secondaryColor?: JSX.ValueOrCell<string>;
  stroke?: JSX.ValueOrCell<number>;
  frontClass?: unknown;
  backClass?: unknown;
  backBehindClass?: unknown;
  renderTop?: JSX.ValueOrCell<boolean>;
  renderBottom?: JSX.ValueOrCell<boolean>;
  renderLeft?: JSX.ValueOrCell<boolean>;
  renderRight?: JSX.ValueOrCell<boolean>;
  renderBack?: JSX.ValueOrCell<boolean>;
  back?: () => JSX.Template;
}

export const Box = (props: BoxProps) => {
  const {
    class: className,
    height = 100,
    width = 100,
    depth = 100,
    curve = 20,
    color = "#ababab",
    secondaryColor: secondaryColorProp,
    stroke = 0,
    frontClass,
    backClass,
    backBehindClass,
    renderBack = true,
    renderTop = true,
    renderBottom = true,
    renderLeft = true,
    renderRight = true,
    children,
    back,
    ...rest
  } = props;

  const style = {
    "--box-height": height,
    "--box-width": width,
    "--box-depth": depth,
    "--box-stroke": stroke,
    "--box-curve": curve,
    "--surface": color,
    "--secondary-surface": secondaryColorProp,
  };
  if (rest.style) {
    Object.assign(style, rest.style);
  }

  const secondaryColor = useDerivedValue(secondaryColorProp);
  const hasSecondaryColor = Cell.derived(() => Boolean(secondaryColor.get()));

  return (
    <div
      {...rest}
      style={style}
      class={[classes.box, className]}
      data-has-secondary-color={hasSecondaryColor}
    >
      <div class={[classes.front, frontClass]}>{children}</div>
      <div class={classes.frontBehind} />
      {If(renderBack, () => (
        <div class={[classes.back, backClass]}>{back?.()}</div>
      ))}
      <div class={[classes.backBehind, backBehindClass]} />
      {If(renderTop, () => (
        <div class={classes.top} />
      ))}
      {If(renderBottom, () => (
        <div class={classes.bottom} />
      ))}
      {If(renderLeft, () => (
        <div class={classes.left} />
      ))}
      {If(renderRight, () => (
        <div class={classes.right} />
      ))}
      <div class={classes.centerX} />
      <div class={classes.centerY} />
      <div class={classes.diagonalRightToLeftCurveStart} />
      <div class={classes.diagonalRightToLeftCurveEnd} />
      <div class={classes.diagonalLeftToRightCurveStart} />
      <div class={classes.diagonalLeftToRightCurveEnd} />
    </div>
  );
};
