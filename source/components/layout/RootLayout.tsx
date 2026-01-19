import { Cell, If } from "retend";
import { Outlet, useRouter } from "retend/router";
import { ScrollRestoration } from "@/components/layout/ScrollRestoration";
import { Navigation } from "./Navigation";
import classes from "./PageLayout.module.css";

export function RootLayout() {
  const router = useRouter();

  const isPlaygroundDetail = Cell.derived(() => {
    const route = router.getCurrentRoute().get();
    if (!route) return false;
    const path = route.path;
    return path.startsWith("/playground/") && path !== "/playground";
  });

  const showNav = Cell.derived(() => !isPlaygroundDetail.get());
  const containerClass = Cell.derived(() => {
    if (showNav.get()) return classes.main;
    return "contents";
  });

  return (
    <div class={classes.layout}>
      <ScrollRestoration />
      {If(showNav, Navigation)}
      <main class={containerClass}>
        <Outlet />
      </main>
    </div>
  );
}
