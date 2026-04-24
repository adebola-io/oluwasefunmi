import { JSX } from "retend/jsx-runtime";
import classes from "./Basket.module.css";

interface BasketItemProps {
  index: JSX.ValueOrCell<number>;
  depth: JSX.ValueOrCell<string>;
  children: JSX.Children;
}

export function BasketItem(props: BasketItemProps) {
  const { index, depth = "10px", children } = props;

  return (
    <div
      class={classes.basketItem}
      style={{ "--index": index, "--depth": depth }}
    >
      {children}
    </div>
  );
}
