import { Cell } from "retend";
import classes from "./PageTitle.module.css";
import { createUniqueTransition } from "retend-utils/components";

interface PageTitleProps {
  name: string;
  class?: unknown;
}

export const PageTitle = createUniqueTransition<PageTitleProps>(
  (props) => {
    const name = Cell.derived(() => props.get().name);
    const className = Cell.derived(() => props.get().class);

    className.listen(console.log);

    return (
      <div class={[classes.titleWrapper, className]}>
        <h1 class={classes.title}>
          <span key="playground" class={classes.animateEnter}>
            {name}
          </span>
        </h1>
      </div>
    );
  },
  {
    transitionDuration: "350ms",
    maintainHeightDuringTransition: true,
    maintainWidthDuringTransition: true,
  },
);
