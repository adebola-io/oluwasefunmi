
import type { JSX } from "retend/jsx-runtime";
import classes from "./BentoCard.module.css";

interface BentoCardProps {
  class?: string | string[];
  span?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: JSX.Element | JSX.Element[];
}

export function BentoCard(props: BentoCardProps) {
  const { class: className, span, rowSpan, children } = props;

  const columnSpan = span ? `span ${span}` : "span 1";
  const rowSpanStyle = rowSpan ? `span ${rowSpan}` : "span 1";

  return (
    <div
      class={[classes.card, className]}
      style={{
        gridColumn: columnSpan,
        gridRow: rowSpanStyle,
      } as JSX.CSSProperties}
    >
      <div class={classes.content}>{children}</div>
    </div>
  );
}
