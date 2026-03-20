import { Cell, SourceCell } from "retend";
import type { SoundProfile } from "@/features/playground/components/KeyboardSounds";
import classes from "./CssKeyboard.module.css";

export const SOUND_OPTIONS = [
  { value: "switch", label: "Switch" },
  { value: "typewriter", label: "Typewriter" },
  { value: "bubble", label: "Bubble" },
] as const;

interface SoundOptionButtonProps {
  option: (typeof SOUND_OPTIONS)[number];
  soundProfile: SourceCell<SoundProfile>;
}

export const SoundOptionButton = (props: SoundOptionButtonProps) => {
  const { option, soundProfile } = props;
  const isActive = Cell.derived(() => soundProfile.get() === option.value);

  return (
    <button
      type="button"
      class={[classes.segmentButton, { [classes.activeSegment]: isActive }]}
      onClick={() => soundProfile.set(option.value as SoundProfile)}
    >
      {option.label}
    </button>
  );
};
