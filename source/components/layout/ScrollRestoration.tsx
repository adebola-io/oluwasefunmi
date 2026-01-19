import { useSetupEffect } from "retend";
import { useRouter, useCurrentRoute } from "retend/router";

export function ScrollRestoration() {
  const router = useRouter();
  const currentRoute = useCurrentRoute();

  useSetupEffect(() => {
    // 1. Disable browser auto-restore
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Save position before leaving a route
    const saveScrollPosition = () => {
      const scroll = { x: window.scrollX, y: window.scrollY };
      const currentState = window.history.state || {};
      console.log("Saving scroll position", { currentState, scroll });
      window.history.replaceState({ ...currentState, scroll }, "");
    };

    // 3. Attach save listener
    router.addEventListener("beforenavigate", saveScrollPosition);

    // 4. Restore position when the route updates
    const unlisten = currentRoute.listen(() => {
      queueMicrotask(() => {
        requestAnimationFrame(() => {
          const state = window.history.state;
          console.log("Restoring scroll position", { state });
          if (state?.scroll) {
            window.scrollTo(state.scroll.x, state.scroll.y);
          } else {
            console.log("Restoring default scroll position");
            window.scrollTo(0, 0);
          }
        });
      });
    });

    // Cleanup
    return () => {
      router.removeEventListener("beforenavigate", saveScrollPosition);
      unlisten();
    };
  });

  return null;
}
