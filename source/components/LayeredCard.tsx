import type { JSX } from "retend/jsx-runtime";
import classes from "./LayeredCard.module.css";

// Props for the LayeredCard
export interface LayeredCardProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  as?: keyof JSX.IntrinsicElements | Function;
  class?: string | string[];
  children?:
    | JSX.Element
    | string
    | number
    | boolean
    | null
    | undefined
    | (JSX.Element | string | number | boolean | null | undefined)[];
  [key: string]: unknown;
}

export function LayeredCard(props: LayeredCardProps) {
  const { as: Component = "div", class: classProp, children, ...rest } = props;

  const combinedClass = [classes.layeredCard, classProp];

  // Render based on component type
  if (typeof Component === "string") {
    // For string elements, default to div wrapper
    return (
      <div {...rest} class={combinedClass}>
        {children}
      </div>
    );
  }

  // Component function - call it directly with props
  return Component({ ...rest, class: combinedClass, children });
}
