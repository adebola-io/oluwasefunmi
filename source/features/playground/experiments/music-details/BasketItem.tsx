import { JSX } from "retend/jsx-runtime";
import classes from "./Basket.module.css";

interface BasketItemProps {
  index: JSX.ValueOrCell<number>;
  depth: JSX.ValueOrCell<string>;
  class?: unknown;
  children: JSX.Children;
}

export function BasketItem(props: BasketItemProps) {
  const { index, depth = "10px", class: className, children } = props;

  return (
    <div
      class={[classes.basketItem, className]}
      style={{
        "--index": index,
        "--depth": depth,
      }}
    >
      {children}
    </div>
  );
}
