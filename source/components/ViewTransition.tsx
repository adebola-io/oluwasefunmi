import { createScope } from "retend";
import type { JSX } from "retend/jsx-runtime";

interface ViewTransitionCtx {
  startTransition: (callback: () => Promise<void> | void) => Promise<void>;
  onViewTransitionEnd: (callback: () => void) => void;
}

export const ViewTransitionScope =
  createScope<ViewTransitionCtx>("ViewTransition");

interface ViewTransitionProps {
  children: JSX.Children;
}

export function ViewTransition(props: ViewTransitionProps) {
  const { children } = props;
  const transitionEndCallbacks = new Set<() => void>();

  const runEndCallbacks = () => {
    for (const callback of transitionEndCallbacks) callback();
  };

  const ctx: ViewTransitionCtx = {
    startTransition: async (callback) => {
      if ("startViewTransition" in document) {
        const finished = document.startViewTransition(callback).finished;
        finished.then(runEndCallbacks);
        return finished;
      } else {
        await callback();
        runEndCallbacks();
      }
    },
    onViewTransitionEnd: (callback) => transitionEndCallbacks.add(callback),
  };

  return (
    <ViewTransitionScope.Provider value={ctx}>
      {children}
    </ViewTransitionScope.Provider>
  );
}
