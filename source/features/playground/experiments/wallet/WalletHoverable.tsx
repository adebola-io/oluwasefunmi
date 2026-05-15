import { JSX } from "retend/jsx-runtime";

interface WalletHoverableProps {
  children?: JSX.Children;
  onSelect?: () => void;
}

export function WalletHoverable(props: WalletHoverableProps) {
  const { children, onSelect } = props;

  const handleClick = () => {
    onSelect?.();
  };

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
