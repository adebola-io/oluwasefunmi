import { Cell } from "retend";
import { Outlet, useRouter } from "retend/router";
import { ScrollRestoration } from "@/components/layout/ScrollRestoration";
import classes from "./PageLayout.module.css";

export function RootLayout() {
  const router = useRouter();

  const isPlaygroundDetail = Cell.derived(() => {
    const route = router.getCurrentRoute().get();
    if (!route) return false;
    const path = route.path;
    return path.startsWith("/playground/") && path !== "/playground";
  });

  const containerClass = Cell.derived(() => {
    if (isPlaygroundDetail.get()) return "contents";
    return classes.main;
  });

  return (
    <div class={classes.layout}>
      <ScrollRestoration />
      <main class={containerClass}>
        <Outlet />
      </main>
    </div>
  );
}
