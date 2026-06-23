import { If } from "retend";
import { Link } from "retend/router";
import type { JSX } from "retend/jsx-runtime";
import type { SimpleListItem } from "./simpleListTypes";
import classes from "./SimpleListPage.module.css";

interface SimpleListItemIconProps {
  icon?: () => JSX.Element;
}

interface SimpleListRowProps {
  item: SimpleListItem;
}

function SimpleListItemIcon(props: SimpleListItemIconProps) {
  const { icon: Icon } = props;

  if (!Icon) return null;

  return (
    <span class={classes.itemIcon}>
      <Icon />
    </span>
  );
}

export function SimpleListRow(props: SimpleListRowProps) {
  const { item } = props;
  const Icon = item.icon;
  const itemClass = [classes.item, { [classes.hasIcon]: Boolean(Icon) }];
  const title = typeof item.title === "string" ? item.title : undefined;

  if (item.actionLabel) {
    return (
      <li class={itemClass}>
        <SimpleListItemIcon icon={Icon} />
        <div class={classes.itemContent}>
          <h2 class={classes.itemTitle} title={title}>
            {item.title}
          </h2>
          <p class={classes.itemSubtitle}>{item.subtitle}</p>
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
          <h2 class={classes.itemTitle} title={title}>
            {item.title}
          </h2>
          <p class={classes.itemSubtitle}>{item.subtitle}</p>
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
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 class={classes.itemTitle} title={title}>
            {item.title}
          </h2>
          <p class={classes.itemSubtitle}>{item.subtitle}</p>
        </a>
      </li>
    );
  }

  return (
    <li class={itemClass}>
      <SimpleListItemIcon icon={Icon} />
      <Link class={classes.itemContent} href={item.href} title={title}>
        <h2 class={classes.itemTitle} title={title}>
          {item.title}
        </h2>
        <p class={classes.itemSubtitle}>{item.subtitle}</p>
      </Link>
    </li>
  );
}
