import { Cell, For } from "retend";
import classes from "./Glass.module.css";
import { JSX } from "retend/jsx-runtime";
import { Teleport } from "retend-web";
import { GlassMarks } from "./GlassMarks";
import { GlassRidge } from "./GlassRidge";

interface GlassProps {
  state: Cell<"expanded" | "collapsed">;
}

const thickness = Array.from({ length: 2 }, (_, i) => i + 1);

export function Glass(props: GlassProps) {
  const { state } = props;
  const expanded = Cell.derived(() => {
    return state.get() === "expanded";
  });

  return (
    <div data-expanded={expanded} class={classes.transform}>
      <div class={classes.container}>
        <Teleport to="body">
          <div data-expanded={expanded} class={classes.lens} />
        </Teleport>
        <div class={classes.front} data-front>
          <GlassRidge />
        </div>
        <Thickness class={[classes.front, classes.shade]} />
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
  );
}

interface ThicknessProps extends JSX.BaseContainerProps {}

function Thickness(props: ThicknessProps) {
  return For(thickness, (i) => (
    <div
      {...props}
      style={{ "--frame-thickness-index": i }}
      data-thickness-shading
    />
  ));
}
