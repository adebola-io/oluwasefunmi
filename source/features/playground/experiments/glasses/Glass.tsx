import type { Glassview } from "@/features/playground/data/glassViews";
import { Cell } from "retend";
import classes from "./Glass.module.css";
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
            <div class={[classes.temple, classes.left]} data-left>
              <GlassMarks />
            </div>
            <div class={[classes.temple, classes.right]} data-right>
              <GlassMarks />
            </div>
          </div>
        </div>
      </div>
      <div class={[classes.view, classes.rotate]}>
        <div class={classes.img} />
      </div>
    </div>
  );
}
