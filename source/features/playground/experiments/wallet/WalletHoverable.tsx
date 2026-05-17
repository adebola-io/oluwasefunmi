import { Cell, onMove } from "retend";
import { JSX } from "retend/jsx-runtime";

interface WalletHoverableProps {
  children?: JSX.Children;
  onSelect?: () => void;
}

export function WalletHoverable(props: WalletHoverableProps) {
  const { children, onSelect } = props;
  const pull = Cell.source(false);
  const buttonRef = Cell.source<HTMLButtonElement | null>(null);
  const noPull = Cell.derived(() => !pull.get());
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

  onMove(() => {
    const shouldStayPulled = wasJustSelected;
    const button = buttonRef.get();
    return () => {
      if (shouldStayPulled) {
        wasJustSelected = false;
        return;
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          if (!button) return;
          const animations = button.getAnimations({ subtree: true });
          await Promise.allSettled(animations.map((a) => a.finished));
          pull.set(false);
        });
      });
    };
  });

  return (
    <div class="w-full group not-in-data-wallet:pointer-events-none">
      <button
        ref={buttonRef}
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
