import { Cell, createUnique } from "retend";
import classes from "./PageTitle.module.css";
import { UniqueTransition } from "retend-utils/components";

interface PageTitleProps {
  name: string;
  class?: unknown;
}

export const PageTitle = createUnique<PageTitleProps>((props) => {
  const name = Cell.derived(() => props.get().name);
  const className = Cell.derived(() => props.get().class);

  return (
    <UniqueTransition
      transitionDuration="350ms"
      maintainHeightDuringTransition={true}
      maintainWidthDuringTransition={true}
    >
      <div class={[classes.titleWrapper, className]}>
        <h1 class={classes.title}>
          <span key="playground" class={classes.animateEnter}>
            {name}
          </span>
        </h1>
      </div>
    </UniqueTransition>
  );
});
