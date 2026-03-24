import { Cell, For, Await } from "retend";
import { ClientOnly } from "retend-server";
import classes from "./GitHubWidget.module.css";

const USERNAME = "adebola-io";
const TOTAL_DAYS = 30;

interface DayCell {
  date: string;
  level: 0 | 1 | 2 | 3 | 4;
}

interface HeatmapData {
  days: DayCell[];
  total: number;
}

function buildHeatmap(events: Array<{ created_at: string }>): HeatmapData {
  const dayMap = new Map<string, number>();
  const now = new Date();

  for (let i = TOTAL_DAYS - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    dayMap.set(d.toISOString().split("T")[0], 0);
  }

  let total = 0;
  for (const event of events) {
    const date = event.created_at.split("T")[0];
    if (dayMap.has(date)) {
      dayMap.set(date, (dayMap.get(date) ?? 0) + 1);
      total++;
    }
  }

  const days: DayCell[] = [];
  for (const [date, count] of dayMap) {
    const level: DayCell["level"] =
      count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 10 ? 3 : 4;
    days.push({ date, level });
  }

  return { days, total };
}

async function fetchGitHubActivity(): Promise<HeatmapData> {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/events/public?per_page=100`
  );
  if (!res.ok) return buildHeatmap([]);
  const events: Array<{ created_at: string }> = await res.json();
  return buildHeatmap(events);
}

const heatmapCell = Cell.derivedAsync(async () => fetchGitHubActivity());
const daysCell = Cell.derivedAsync(
  async (get) => (await get(heatmapCell)).days
);
const totalCell = Cell.derivedAsync(
  async (get) => (await get(heatmapCell)).total
);

export function GitHubWidget() {
  return (
    <div class={classes.widget}>
      <div class={classes.header}>
        <span>GitHub</span>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          class={classes.profileLink}
        >
          @{USERNAME}
        </a>
      </div>

      <ClientOnly>
        <Await
          fallback={
            <div class={classes.skeleton}>
              <div class={classes.skeletonGrid} />
            </div>
          }
        >
          <GitHubHeatmap />
        </Await>
      </ClientOnly>
    </div>
  );
}

function GitHubHeatmap() {
  return (
    <div class={classes.body}>
      <div class={classes.grid}>
        {For(daysCell, (day: DayCell) => (
          <div
            class={classes.cell}
            data-level={day.level}
            title={`${day.date}: ${day.level > 0 ? "active" : "no activity"}`}
          />
        ))}
      </div>

      <div class={classes.footer}>
        <span class={classes.count}>
          {Cell.derivedAsync(async (get) => `${await get(totalCell)} events`)}
        </span>
        <span class={classes.period}>last month</span>
      </div>
    </div>
  );
}
