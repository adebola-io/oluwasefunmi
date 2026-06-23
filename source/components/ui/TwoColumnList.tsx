import type { JSX } from "retend/jsx-runtime";
import classes from "./TwoColumnList.module.css";

interface TwoColumnListProps {
  children: JSX.Element;
}

interface TwoColumnListItemProps {
  children: JSX.Element;
}

export function TwoColumnList(props: TwoColumnListProps) {
  const { children } = props;

  return <ul class={classes.list}>{children}</ul>;
}

export function TwoColumnListItem(props: TwoColumnListItemProps) {
  const { children } = props;

  return <li class={classes.item}>{children}</li>;
}
