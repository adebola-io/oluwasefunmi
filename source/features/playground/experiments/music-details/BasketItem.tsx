import { JSX } from "retend/jsx-runtime";

interface BasketItemProps {
  index: JSX.ValueOrCell<number>;
  children: JSX.Children;
}

export function BasketItem(props: BasketItemProps) {
  const { index, children } = props;

  return <div style={{ "--depth": index }}>{children}</div>;
}
