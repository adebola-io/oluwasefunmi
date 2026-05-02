import { For } from "retend";
import classes from "./ExperienceWidget.module.css";

interface ExperienceItem {
  year: string;
  role: string;
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
        {For(items, (item: ExperienceItem, index) => (
          <div class={classes.item} style={{ "--stagger": index }}>
            <div class={classes.markerWrapper}>
              <div class={classes.markerRing}>
                <div class={classes.marker} />
              </div>
              <div class={classes.line} />
            </div>
            <div class={classes.itemContent}>
              <span class={classes.role}>{item.role}</span>
              <span class={classes.company}>{item.company}</span>
              <span class={classes.year}>{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
