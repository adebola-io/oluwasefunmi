import { Cell, For } from "retend";
import type { RouteComponent } from "retend/router";
import { useWindowSize } from "retend-utils/hooks";
import { ClientOnly } from "retend-server";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { AsyncQueue } from "@/utils";
import { SITE_URL } from "@/constants";
import classes from "./RippleEffect.module.css";

interface BoxProps {
  rows: Cell<number>;
  cols: Cell<number>;
  color: Cell<string>;
  index: Cell<number>;
  onClick: (row: number, column: number) => void;
  clicked: Cell<[number, number]>;
}

const RippleButton = (props: BoxProps) => {
  const { cols, index, onClick, clicked, color } = props;
  const buttonRef = Cell.source<HTMLButtonElement | null>(null);
  const queue = new AsyncQueue();

  const col = Cell.derived(() => {
    return (index.get() % cols.get()) + 1;
  });

  const row = Cell.derived(() => {
    return Math.floor(index.get() / cols.get()) + 1;
  });

  const euclidDistanceFromClick = Cell.derived(() => {
    const [clickedRow, clickedCol] = clicked.get();
    return Math.floor(
      Math.sqrt((row.get() - clickedRow) ** 2 + (col.get() - clickedCol) ** 2),
    );
  });

  const delay = Cell.derived(() => {
    return euclidDistanceFromClick.get() * 30;
  });

  const handleClick = () => {
    onClick(row.get(), col.get());
  };

  color.listen((backgroundColor) => {
    const runNextAnimation = async () => {
      const button = buttonRef.peek();
      if (!button) return;
      const options: KeyframeAnimationOptions = {
        delay: delay.get(),
        duration: 100,
        fill: "forwards",
      };
      const keyframes = {
        backgroundColor,
        transform: ["scale(0.9)", "scale(1.1)", "scale(1)"],
      };
      const animation = button.animate(keyframes, options);
      await animation.finished.finally(() => {});
    };
    queue.push(runNextAnimation);
  });

  return (
    <button
      ref={buttonRef}
      type="button"
      style={{ backgroundColor: color.get() }}
      class={classes.rippleButtonContainer}
      onPointerDown={handleClick}
    />
  );
};

const colors = [
  "#2a2a2a", // Dark gray (initial)
  "#06B6D4", // Cyan
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#EC4899", // Pink
  "#8B5CF6", // Violet
  "#3B82F6", // Blue
  "#D946EF", // Fuchsia
];

const BOX_SIZE = 48;
const GAP = 3;

const RippleEffect: RouteComponent = () => {
  const { width, height } = useWindowSize();

  const cols = Cell.derived(() => {
    const availableWidth = Math.min(width.get() - 64, 1200);
    return Math.max(5, Math.floor(availableWidth / (BOX_SIZE + GAP)));
  });

  const rows = Cell.derived(() => {
    const availableHeight = height.get() - 200;
    return Math.max(5, Math.floor(availableHeight / (BOX_SIZE + GAP)));
  });

  const clicked = Cell.source<[number, number]>([0, 0]);
  const currentColorIndex = Cell.source(0);
  const color = Cell.derived(() => {
    return colors[currentColorIndex.get()];
  });

  const boxes = Cell.derived(() => {
    return Array(rows.get() * cols.get()).fill(0);
  });
  const gridTemplate = Cell.derived(() => {
    return `repeat(${rows.get()}, 1fr) / repeat(${cols.get()}, 1fr)`;
  });
  const handleClick = (row: number, column: number) => {
    clicked.set([row, column]);
    currentColorIndex.set((currentColorIndex.get() + 1) % colors.length);
  };

  return (
    <div class={classes.app}>
      <PlaygroundLayout title="Ripple Effect" hint="Click anywhere to ripple">
        <ClientOnly>
          <div class={classes.rippleContainer} style={{ gridTemplate }}>
            {For(boxes, (_, index) => (
              <RippleButton
                index={index}
                rows={rows}
                cols={cols}
                clicked={clicked}
                color={color}
                onClick={handleClick}
              />
            ))}
          </div>
        </ClientOnly>
      </PlaygroundLayout>
    </div>
  );
};

RippleEffect.metadata = () => ({
  title: "Ripple Effect | Playground",
  description: "An optimized grid interaction with cascading ripple effects.",
  ogTitle: "Ripple Effect | Playground",
  ogDescription: "An optimized grid interaction with cascading ripple effects.",
  ogImage: `${SITE_URL}/og/ripple-effect.png`,
  twitterTitle: "Ripple Effect | Playground",
  twitterDescription:
    "An optimized grid interaction with cascading ripple effects.",
  twitterImage: `${SITE_URL}/og/ripple-effect.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default RippleEffect;
