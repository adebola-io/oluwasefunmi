import type { JSX } from "retend/jsx-runtime";
import classes from "./Basket.module.css";

interface BasketProps {
  color?: JSX.ValueOrCell<string>;
  children?: JSX.Children;
  selected?: JSX.ValueOrCell<boolean>;
}

export function Basket(props: BasketProps) {
  const { children, selected, color = "var(--color-sky-500)" } = props;

  return (
    <div
      class={classes.basket}
      data-selected={selected}
      style={{ "--base-color": color }}
    >
      <div class={classes.content}>{children}</div>
      <div class={[classes.basket, classes.shading]}>
        <BasketSides />
      </div>
      <BasketSides />
    </div>
  );
}

function BasketSides() {
  return (
    <>
      <div data-back class={[classes.face, classes.back]} />
      <div data-left class={[classes.side, classes.left]} />
      <div data-right class={[classes.side, classes.right]} />
      <div data-bottom class={[classes.base, classes.bottom]} />
      <div data-front class={[classes.face, classes.front]} />
      <div class={[classes.curve, classes.frontLeft]} />
      <div class={[classes.curve, classes.frontRight]} />
      <div class={[classes.curve, classes.backLeft]} />
      <div class={[classes.curve, classes.backRight]} />
    </>
  );
}
