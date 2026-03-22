import classes from "./PageHeader.module.css";
import { PageTitle } from "./PageTitle";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  class?: unknown;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title, subtitle, class: className } = props;

  return (
    <div class={[classes.header, className]}>
      <PageTitle name={title} />
      <p class={classes.subtitle}>{subtitle}</p>
    </div>
  );
};
