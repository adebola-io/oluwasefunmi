import { Cell } from "retend";

interface GlassesControlsProps {
  name: Cell<string>;
  isWorn: Cell<boolean>;
  onMove: (direction: -1 | 1) => void;
  onToggleWear: () => void;
}

export function GlassesControls(props: GlassesControlsProps) {
  const { name, isWorn, onMove, onToggleWear } = props;
  const wearButtonText = Cell.derived(() =>
    isWorn.get() ? "Take off" : "Try On"
  );

  return (
    <div class="fixed bottom-15 w-full grid place-items-center">
      <div class="grid place-items-center">
        <h2 class="text-4xl pb-15">{name}</h2>
        <div class="flex items-center justify-center gap-8">
          <CarouselButton
            direction="previous"
            disabled={isWorn}
            onClick={() => onMove(-1)}
          />
          <button
            class="px-3 py-2 border border-[#ffffff80] cursor-pointer rounded-3xl"
            onClick={onToggleWear}
          >
            {wearButtonText}
          </button>
          <CarouselButton
            direction="next"
            disabled={isWorn}
            onClick={() => onMove(1)}
          />
        </div>
      </div>
    </div>
  );
}

interface CarouselButtonProps {
  direction: "previous" | "next";
  disabled: Cell<boolean>;
  onClick: () => void;
}

function CarouselButton(props: CarouselButtonProps) {
  const { direction, disabled, onClick } = props;
  const isPrevious = direction === "previous";
  const ariaLabel = `${isPrevious ? "Previous" : "Next"} glass view`;
  const iconPath = isPrevious ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6";

  return (
    <button
      class="size-10 grid place-items-center border border-[#ffffff80] cursor-pointer rounded-full disabled:cursor-not-allowed disabled:opacity-40"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        class="size-5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d={iconPath} />
      </svg>
    </button>
  );
}
