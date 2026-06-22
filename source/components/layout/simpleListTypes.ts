import { Cell } from "retend";
import type { JSX } from "retend/jsx-runtime";

export interface SimpleListItem {
  title: string;
  subtitle: string | JSX.Element;
  href?: string;
  external?: boolean;
  actionLabel?: string;
  icon?: () => JSX.Element;
}

export interface SimpleListPageLayoutProps extends JSX.BaseContainerProps {
  titleId?: string;
}

export interface SimpleListHeaderProps {
  title: string;
  subtitle: string | JSX.Element;
  avatar?: string;
  avatarAlt?: string;
  titleId?: string;
}

export interface SimpleListBackLinkProps {
  href: string;
  label?: string;
}

export interface SimpleListProps {
  items: SimpleListItem[] | Cell<SimpleListItem[]>;
}
