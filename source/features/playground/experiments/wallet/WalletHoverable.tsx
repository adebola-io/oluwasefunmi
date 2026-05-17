import { Cell } from "retend";
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

  async function handleClick(this: HTMLButtonElement) {
    pull.set(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    onSelect?.();
  }

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
