import type { Glassview } from "@/features/playground/data/glassViews";
import { Cell, For } from "retend";
import classes from "./Glass.module.css";
import { JSX } from "retend/jsx-runtime";
import { GlassMarks } from "./GlassMarks";

interface GlassProps {
  selected: Cell<Glassview>;
  expanded: Cell<boolean>;
  glassView: Glassview;
}

export function Glass(props: GlassProps) {
  const { glassView, selected, expanded } = props;
  const isSelected = Cell.derived(() => {
    const selectedVal = selected.get();
    return selectedVal.id === glassView.id;
  });
  const isExpanded = Cell.derived(() => {
    return isSelected.get() && expanded.get();
  });

  return (
    <div
      data-expanded={isExpanded}
      data-selected={isSelected}
      class={classes.glass}
      style={{
        "--glass-bg-url": `url(${glassView.imageUrl})`,
        "--glass-color": glassView.themeColor,
      }}
    >
      <div class={classes.scale}>
        <div class={classes.rotate}>
          <div class={classes.container}>
            <div class={classes.front} data-front />
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
