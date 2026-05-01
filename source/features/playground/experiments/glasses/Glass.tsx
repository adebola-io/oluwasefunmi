import { Cell, For } from "retend";
import classes from "./Glass.module.css";
import { JSX } from "retend/jsx-runtime";
import { GlassMarks } from "./GlassMarks";
import { GlassRidge } from "./GlassRidge";

interface GlassProps {
  state: Cell<"expanded" | "collapsed">;
}

export function Glass(props: GlassProps) {
  const { state } = props;
  const expanded = Cell.derived(() => {
    return state.get() === "expanded";
  });

  return (
    <div data-expanded={expanded} class={classes.transform}>
      <div class={classes.container}>
        <div class={classes.front} data-front>
          <GlassRidge />
        </div>
        <Thickness amount={3} class={[classes.front, classes.shade]} />
        <div class={[classes.temple, classes.left]} data-left>
          <GlassMarks />
        </div>
        <Thickness class={[classes.temple, classes.left, classes.shade]} />
        <div class={[classes.temple, classes.right]} data-right>
          <GlassMarks />
        </div>
      </div>
    </div>
  );
}

interface ThicknessProps extends JSX.BaseContainerProps {
  amount?: number;
}

function Thickness(props: ThicknessProps) {
  const { amount = 1, ...rest } = props;

  const thickness = Array.from({ length: amount }, (_, i) => i + 1);
  return For(thickness, (i) => (
    <div
      {...rest}
      style={{ "--frame-thickness-index": i }}
      data-thickness-shading
    />
  ));
}
