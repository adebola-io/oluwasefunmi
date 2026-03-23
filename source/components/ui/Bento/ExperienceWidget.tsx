import { Cell, For, If } from "retend";
import classes from "./ExperienceWidget.module.css";

interface ExperienceItem {
  year: string;
  company: string;
}

interface ExperienceWidgetProps {
  items: ExperienceItem[];
}

export function ExperienceWidget(props: ExperienceWidgetProps) {
  const { items } = props;
  const itemsCell = Cell.source(items);
  const limit = items.length - 1;

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>Experience</span>
      </div>

      <div class={classes.timeline}>
        {For(itemsCell, (item: ExperienceItem, index: Cell<number>) => (
          <div class={classes.item}>
            <div class={classes.markerWrapper}>
              <div
                class={[
                  classes.marker,
                  { [classes.active]: Cell.derived(() => index.get() === 0) },
                ]}
              />
              {If(
                Cell.derived(() => index.get() < limit),
                () => <div class={classes.line} />,
                () => null
              )}
            </div>
            <div class={classes.itemContent}>
              <span class={classes.year}>{item.year}</span>
              <span class={classes.company}>{item.company}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
