import { Cell, If } from "retend";
import { Outlet, useRouter } from "retend/router";
import { Navigation } from "./Navigation";

export function RootLayout() {
  const router = useRouter();

  const showNav = Cell.derived(() => {
    const route = router.getCurrentRoute().get();
    if (!route) return true;

    const path = route.path;
    // Hide nav on individual exploration pages
    const isExplorationDetail =
      path.startsWith("/explorations/") && path !== "/explorations";

    return !isExplorationDetail;
  });

  return (
    <>
      {If(showNav, () => (
        <Navigation />
      ))}
      <Outlet />
    </>
  );
}
