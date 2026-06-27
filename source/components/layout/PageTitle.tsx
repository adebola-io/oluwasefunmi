import classes from "./PageTitle.module.css";

interface PageTitleProps {
  name: string;
  class?: unknown;
}

export function PageTitle(props: PageTitleProps) {
  const { name, class: className } = props;

  return (
    <div class={[classes.titleWrapper, className]}>
      <h1 class={classes.title}>{name}</h1>
    </div>
  );
}
