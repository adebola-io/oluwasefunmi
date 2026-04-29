import { Cell } from "retend";
import classes from "./Glass.module.css";

interface GlassProps {
  state: Cell<"expanded" | "collapsed">;
}

export function Glass(props: GlassProps) {
  const { state } = props;
  const expanded = Cell.derived(() => {
    return state.get() === "expanded";
  });

  return (
    <div data-expanded={expanded} class={classes.container}>
      <div class={classes.front} data-front />
      <div class={classes.lens} />
      <div class={[classes.temple, classes.left]} data-left />
      <div class={[classes.temple, classes.right]} data-right />
    </div>
  );
}
