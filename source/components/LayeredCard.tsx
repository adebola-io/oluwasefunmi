import type { JSX } from "retend/jsx-runtime";
import classes from "./LayeredCard.module.css";

export interface LayeredCardProps {
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

  if (typeof Component === "string") {
    return (
      <div {...rest} class={combinedClass}>
        {children}
      </div>
    );
  }

  return Component({ ...rest, class: combinedClass, children });
}
