import { For } from "retend";
import type { SimpleListProps } from "./simpleListTypes";
import { SimpleListRow } from "./SimpleListRow";
import classes from "./SimpleListPage.module.css";

export function SimpleList(props: SimpleListProps) {
  const { items } = props;

  return (
    <ul class={classes.list}>
      {For(items, (item) => {
        return <SimpleListRow item={item} />;
      })}
    </ul>
  );
}
