import { Cell, For } from "retend";
import classes from "./Glass.module.css";
import { JSX } from "retend/jsx-runtime";
import { GlassRidge } from "./GlassRidge";
import { GlassMarks } from "./GlassMarks";

interface GlassProps {
  state: Cell<"expanded" | "collapsed">;
}

export function Glass(props: GlassProps) {
  const { state } = props;
  const expanded = Cell.derived(() => state.get() === "expanded");

  return (
    <div data-expanded={expanded} class={classes.glass}>
      <div class={classes.scale}>
        <div class={classes.rotate}>
          <div class={classes.container}>
            <div class={classes.front} data-front>
              <GlassRidge />
            </div>
            <Thickness amount={2} class={[classes.front, classes.shade]} />
            <div class={[classes.temple, classes.left]} data-left>
              <GlassMarks />
            </div>
            <Thickness class={[classes.temple, classes.left, classes.shade]} />
            <div class={[classes.temple, classes.right]} data-right>
              <GlassMarks />
            </div>
            <Thickness class={[classes.temple, classes.right, classes.shade]} />
          </div>
        </div>
      </div>
      <div class={[classes.view, classes.rotate]}>
        <div class={classes.img} />
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
