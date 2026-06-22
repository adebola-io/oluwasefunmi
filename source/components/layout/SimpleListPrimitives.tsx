import { Link } from "retend/router";
import type {
  SimpleListBackLinkProps,
  SimpleListPageLayoutProps,
} from "./simpleListTypes";
import classes from "./SimpleListPage.module.css";

export function SimpleListPageLayout(props: SimpleListPageLayoutProps) {
  const { titleId = "page-title", children } = props;

  return (
    <section class={classes.page} aria-labelledby={titleId}>
      {children}
    </section>
  );
}

export function SimpleListBackLink(props: SimpleListBackLinkProps) {
  const { href, label = "back" } = props;

  return (
    <Link href={href} class={classes.backLink} title={label} data-pill-link>
      ← {label}
    </Link>
  );
}
