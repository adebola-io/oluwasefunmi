import type { JSX } from "retend/jsx-runtime";
import classes from "./Basket.module.css";

interface BasketProps {
  children?: JSX.Children;
}

export function Basket(props: BasketProps) {
  const { children } = props;

  return (
    <div class={classes.basket}>
      <BasketSides />
      <div class={[classes.basket, classes.shading]}>
        <BasketSides />
      </div>
      {children}
    </div>
  );
}

function BasketSides() {
  return (
    <>
      <div data-back class={[classes.face, classes.back]}>
        back
      </div>
      <div data-left class={[classes.side, classes.left]}>
        left
      </div>
      <div data-right class={[classes.side, classes.right]}>
        right
      </div>
      <div data-bottom class={[classes.base, classes.bottom]}>
        bottom
      </div>
      <div data-front class={[classes.face, classes.front]}>
        front
      </div>
      <div class={[classes.curve, classes.frontLeft]} />
      <div class={[classes.curve, classes.frontRight]} />
      <div class={[classes.curve, classes.backLeft]} />
      <div class={[classes.curve, classes.backRight]} />
    </>
  );
}
