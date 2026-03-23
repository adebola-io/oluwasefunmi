import { Cell } from "retend";
import type { JSX } from "retend/jsx-runtime";
import classes from "./BentoCard.module.css";

interface BentoCardProps {
  class?: string | string[];
  span?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  children?: JSX.Element | JSX.Element[];
}

export function BentoCard(props: BentoCardProps) {
  const { class: className, span, rowSpan, children } = props;
  const mouseX = Cell.source(0);
  const mouseY = Cell.source(0);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const columnSpan = span ? `span ${span}` : "span 1";
  const rowSpanStyle = rowSpan ? `span ${rowSpan}` : "span 1";

  return (
    <div
      class={[classes.card, className]}
      style={{
        gridColumn: columnSpan,
        gridRow: rowSpanStyle,
        "--mouse-x": Cell.derived(() => `${mouseX.get()}px`),
        "--mouse-y": Cell.derived(() => `${mouseY.get()}px`),
      } as any}
      onMouseMove={handleMouseMove}
    >
      <div class={classes.glow} />
      <div class={classes.content}>{children}</div>
    </div>
  );
}
