import { Cell } from "retend";
import { Outlet, useRouter } from "retend/router";
import { ScrollRestoration } from "@/components/layout/ScrollRestoration";
import classes from "./PageLayout.module.css";
import { useWindowEventListener } from "retend-utils/hooks";

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

  useWindowEventListener("animationend", (event) => {
    if (!(event.target instanceof HTMLElement)) return;
    if (!event.target.parentElement) return;
    if (event.target.parentElement.classList.contains("staggering")) {
      event.target.parentElement.classList.remove("staggering");
    }
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
