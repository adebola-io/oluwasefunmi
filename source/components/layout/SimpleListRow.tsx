import { If } from "retend";
import { Link } from "retend/router";
import type { SimpleListItem } from "./simpleListTypes";
import { SimpleListItemIcon } from "./SimpleListItemIcon";
import { SimpleListSubtitle, SimpleListTitle } from "./SimpleListItemText";
import classes from "./SimpleListPage.module.css";

interface SimpleListRowProps {
  item: SimpleListItem;
}

export function SimpleListRow(props: SimpleListRowProps) {
  const { item } = props;
  const Icon = item.icon;
  const itemClass = [classes.item, { [classes.hasIcon]: Boolean(Icon) }];
  const titleText = typeof item.title === "string" ? item.title : undefined;

  if (item.actionLabel) {
    return (
      <li class={itemClass}>
        <SimpleListItemIcon icon={Icon} />
        <div class={classes.itemContent}>
          <SimpleListTitle title={item.title} />
          <SimpleListSubtitle>{item.subtitle}</SimpleListSubtitle>
          {If(item.href, (href) => (
            <Link
              class={classes.actionLink}
              href={href}
              title={item.actionLabel}
            >
              {item.actionLabel}
            </Link>
          ))}
        </div>
      </li>
    );
  }

  if (!item.href) {
    return (
      <li class={itemClass}>
        <SimpleListItemIcon icon={Icon} />
        <div class={classes.itemContent}>
          <SimpleListTitle title={item.title} />
          <SimpleListSubtitle>{item.subtitle}</SimpleListSubtitle>
        </div>
      </li>
    );
  }

  if (item.external) {
    return (
      <li class={itemClass}>
        <SimpleListItemIcon icon={Icon} />
        <a
          class={classes.itemContent}
          href={item.href}
          title={titleText}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SimpleListTitle title={item.title} />
          <SimpleListSubtitle>{item.subtitle}</SimpleListSubtitle>
        </a>
      </li>
    );
  }

  return (
    <li class={itemClass}>
      <SimpleListItemIcon icon={Icon} />
      <Link class={classes.itemContent} href={item.href} title={titleText}>
        <SimpleListTitle title={item.title} />
        <SimpleListSubtitle>{item.subtitle}</SimpleListSubtitle>
      </Link>
    </li>
  );
}
