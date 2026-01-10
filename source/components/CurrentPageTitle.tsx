import { Cell, Switch } from "retend";
import { useRouter } from "retend/router";
import { UniqueTransition } from "retend-utils/components";
import classes from "./CurrentPageTitle.module.css";

export function CurrentPageTitle() {
  return (
    <UniqueTransition
      name="page-title"
      transitionDuration="350ms"
      maintainWidthDuringTransition
      maintainHeightDuringTransition
    >
      {() => <PageTitle />}
    </UniqueTransition>
  );
}

function PageTitle() {
  const router = useRouter();
  const route = router.getCurrentRoute();

  const viewState = Cell.derived(() => {
    const path = route.get()?.path || "/";
    if (path === "/contact") return "contact";
    if (path.startsWith("/explorations")) return "explorations";
    if (path.startsWith("/random-notes")) return "notes";
    return "home";
  });

  const titleVariant = Cell.derived(() => {
    const state = viewState.get();

    return state === "contact"
      ? classes.contact
      : state === "home"
      ? classes.home
      : classes.page;
  });

  return (
    <div class={[classes.titleWrapper, titleVariant]}>
      <h1 class={classes.title}>
        {Switch(
          viewState,
          {
            explorations: () => (
              <span key="explorations" class={classes.animateEnter}>
                explorations.
              </span>
            ),
            notes: () => (
              <span key="notes" class={classes.animateEnter}>
                random notes.
              </span>
            ),
          },
          () => (
            <span key="home" class={classes.animateEnter}>
              oluwasefunmi.
            </span>
          )
        )}
      </h1>
    </div>
  );
}
