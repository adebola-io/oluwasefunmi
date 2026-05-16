import { ViewTransitionScope } from "@/components/ViewTransition";
import { Cell, useScopeContext } from "retend";
import { JSX } from "retend/jsx-runtime";

interface WalletHoverableProps {
  children?: JSX.Children;
  onSelect?: () => void;
}

export function WalletHoverable(props: WalletHoverableProps) {
  const { children, onSelect } = props;
  const pull = Cell.source(false);
  const noPull = Cell.derived(() => !pull.get());
  const viewTransition = useScopeContext(ViewTransitionScope);
  let wasJustSelected = false;

  async function handleClick(this: HTMLButtonElement) {
    pull.set(true);
    const animations = this.getAnimations();
    const finished = animations.map((a) => a.finished);
    const animationPromise = Promise.allSettled(finished);
    const timeout = new Promise((resolve) => setTimeout(resolve, 300));
    await Promise.race([animationPromise, timeout]);
    wasJustSelected = true;
    onSelect?.();
  }

  viewTransition.onViewTransitionEnd(() => {
    if (wasJustSelected) {
      wasJustSelected = false;
      return;
    }
    pull.set(false);
  });

  return (
    <div class="w-full group not-in-data-wallet:pointer-events-none">
      <button
        type="button"
        onClick--stop={handleClick}
        class={[
          "w-full pointer-events-none *:pointer-events-auto ease-in-out",
          {
            "in-data-wallet:group-hover:translate-y-[-20%] duration-300":
              noPull,
          },
          { "in-data-wallet:translate-y-[-90%] duration-400": pull },
        ]}
      >
        {children}
      </button>
    </div>
  );
}
