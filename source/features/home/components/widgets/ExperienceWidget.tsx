import { For } from "retend";
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

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>Experience</span>
      </div>

      <div class={classes.timeline}>
        {For(items, (item: ExperienceItem) => (
          <div class={classes.item}>
            <div class={classes.markerWrapper}>
              <div class={classes.marker} />
              <div class={classes.line} />
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
