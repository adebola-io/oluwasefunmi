import type { JSX } from "retend/jsx-runtime";
import classes from "./SimpleListPage.module.css";

interface SimpleListItemIconProps {
  icon?: () => JSX.Element;
}

export function SimpleListItemIcon(props: SimpleListItemIconProps) {
  const { icon: Icon } = props;

  if (!Icon) return null;

  return (
    <span class={classes.itemIcon}>
      <Icon />
    </span>
  );
}
