import { Cell } from "retend";
import { useLiveDate } from "retend-utils/hooks";
import { ClientOnly } from "retend-server";
import classes from "./LocationWidget.module.css";

export function LocationWidget() {
  const now = useLiveDate(1000);

  const time = Cell.derived(() => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Lagos",
    };
    return now.get().toLocaleTimeString("en-US", options);
  });

  const greeting = Cell.derived(() => {
    const lagosTime = new Date(
      now.get().toLocaleString("en-US", { timeZone: "Africa/Lagos" })
    );
    const hour = lagosTime.getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 21) return "Good evening";
    return "Good night";
  });

  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span class={classes.label}>Location</span>
      </div>

      <div class={classes.content}>
        <div class={classes.location}>
          <span class={classes.city}>Lagos, Nigeria</span>
          <span class={classes.timezone}>WAT (UTC+1)</span>
        </div>

        <ClientOnly>
          <div class={classes.timeBlock}>
            <span class={classes.greeting}>{greeting}</span>
            <span class={classes.time}>{time}</span>
          </div>
        </ClientOnly>
      </div>
    </div>
  );
}
