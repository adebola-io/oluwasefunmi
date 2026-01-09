import { Cell, If } from "retend";
import { Outlet, useRouter } from "retend/router";
import { Navigation } from "./Navigation";
import classes from "./PageLayout.module.css";

export function RootLayout() {
  const router = useRouter();

  const isExplorationDetail = Cell.derived(() => {
    const route = router.getCurrentRoute().get();
    if (!route) return false;
    const path = route.path;
    return path.startsWith("/explorations/") && path !== "/explorations";
  });

  const showNav = Cell.derived(() => !isExplorationDetail.get());

  return (
    <div class={classes.layout}>
      {If(showNav, () => (
        <Navigation />
      ))}
      {If(
        showNav,
        () => (
          <main class={classes.main}>
            <Outlet />
          </main>
        ),
        () => (
          <Outlet />
        )
      )}
    </div>
  );
}
