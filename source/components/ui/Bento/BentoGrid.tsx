import type { JSX } from "retend/jsx-runtime";
import classes from "./BentoGrid.module.css";

interface BentoGridProps {
  children?: JSX.Element | JSX.Element[];
}

export function BentoGrid(props: BentoGridProps) {
  const { children } = props;
  return <div class={classes.grid}>{children}</div>;
}
