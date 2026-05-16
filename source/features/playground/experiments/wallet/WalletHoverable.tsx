import { JSX } from "retend/jsx-runtime";

interface WalletHoverableProps {
  children?: JSX.Children;
  onSelect?: () => void;
}

export function WalletHoverable(props: WalletHoverableProps) {
  const { children, onSelect } = props;

  async function handleClick(this: HTMLButtonElement) {
    this.style.transitionDuration = "350ms";
    // this.style.transitionTimingFunction = "var(--ease-spring)";
    this.style.transform = "translateY(-70%)";
    await new Promise((resolve) => setTimeout(resolve, 0));
    const animations = this.getAnimations();
    const finished = animations.map((a) => a.finished);
    const animationPromise = Promise.allSettled(finished);
    const timeout = new Promise((resolve) => setTimeout(resolve, 250));
    await Promise.race([animationPromise, timeout]);

    onSelect?.();
  }

  return (
    <div class="w-full h-full group @container mt-[3%] grid place-items-start">
      <button
        type="button"
        onClick--stop={handleClick}
        class="h-full w-full pointer-events-none *:pointer-events-auto duration-300 ease-in-out grid items-start group-hover:translate-y-[-10%]"
      >
        {children}
      </button>
    </div>
  );
}
