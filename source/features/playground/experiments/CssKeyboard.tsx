import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { Viewer } from "@/features/playground/components/Viewer/Viewer";
import Keyboard from "@/features/playground/components/Keyboard";
import { Cell, For } from "retend";
import { WPMCounter } from "@/features/playground/components/WPMCounter";
import {
  setSoundProfile,
  type SoundProfile,
} from "@/features/playground/components/KeyboardSounds";
import { InteractionPanel } from "@/features/playground/components/InteractionPanel/InteractionPanel";
import classes from "./CssKeyboard.module.css";

const THEMES = {
  blue: {
    bg: "#000000",
    body: "#13161c",
    secondaryBody: "#0a0c10",
    key: "#1f1f28",
    secondaryKey: "#0b0d12",
    text: "rgba(255, 255, 255, 0.75)",
  },
  black: {
    bg: "#050505",
    body: "#201f1f",
    secondaryBody: "#121212",
    key: "#1a1a1a",
    secondaryKey: "#000000",
    text: "rgba(255, 255, 255, 0.5)",
  },
  cream: {
    bg: "#c3c0b5",
    body: "#b1ada0",
    secondaryBody: "#8d897b",
    key: "#c7c5bc",
    secondaryKey: "#9e9d8c",
    text: "rgba(65, 60, 50, 0.9)",
  },
} as const;

type ThemeType = keyof typeof THEMES;

const MODE_OPTIONS = [
  { value: "view", label: "Adjust View" },
  { value: "type", label: "Tap Keys" },
];

const SOUND_OPTIONS = [
  { value: "switch", label: "Switch" },
  { value: "typewriter", label: "Typewriter" },
  { value: "bubble", label: "Bubble" },
] as const;

interface SoundOptionButtonProps {
  option: (typeof SOUND_OPTIONS)[number];
  soundProfile: Cell<SoundProfile>;
}

const SoundOptionButton = (props: SoundOptionButtonProps) => {
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

const CssKeyboard = () => {
  const theme = Cell.source<ThemeType>("cream");
  const soundProfile = Cell.source<SoundProfile>("switch");
  const showWPM = Cell.source(true);
  const mode = Cell.source<"view" | "type">("view");

  const colors = Cell.derived(() => THEMES[theme.get()]);

  const isBlueActive = Cell.derived(() => theme.get() === "blue");
  const isBlackActive = Cell.derived(() => theme.get() === "black");
  const isCreamActive = Cell.derived(() => theme.get() === "cream");
  const isViewMode = Cell.derived(() => mode.get() === "view");

  soundProfile.listen((p) => setSoundProfile(p));

  return (
    <div class={classes.app}>
      <PlaygroundLayout title="CSS Keyboard">
        <div class={classes.immersiveContainer}>
          <Viewer class="animate-fade-in" initialRx={9} isEnabled={isViewMode}>
            <Keyboard colors={colors} mode={mode} />
          </Viewer>

          <WPMCounter show={showWPM} />

          <InteractionPanel mode={mode} modeOptions={MODE_OPTIONS}>
            <div class={classes.section}>
              <h3>Features</h3>
              <div class={classes.featureGrid}>
                <label class={classes.featureToggle}>
                  <input
                    type="checkbox"
                    checked={showWPM}
                    onChange={(e: Event) =>
                      showWPM.set((e.target as HTMLInputElement).checked)
                    }
                  />
                  <span>Show WPM</span>
                </label>
              </div>
            </div>

            <div class={classes.section}>
              <h3>Sound Pack</h3>
              <div class={classes.segmentedControl}>
                {For(SOUND_OPTIONS, (option) => (
                  <SoundOptionButton
                    option={option}
                    soundProfile={soundProfile}
                  />
                ))}
              </div>
            </div>

            <div class={classes.section}>
              <h3>Color Theme</h3>
              <div class={classes.themeGrid}>
                <button
                  type="button"
                  class={[
                    classes.themeButton,
                    { [classes.activeTheme]: isBlueActive },
                  ]}
                  onClick={() => theme.set("blue")}
                >
                  <div
                    class={classes.colorPreview}
                    style={{ background: THEMES.blue.body }}
                  />
                  Blue
                </button>
                <button
                  type="button"
                  class={[
                    classes.themeButton,
                    { [classes.activeTheme]: isBlackActive },
                  ]}
                  onClick={() => theme.set("black")}
                >
                  <div
                    class={classes.colorPreview}
                    style={{ background: THEMES.black.body }}
                  />
                  Black
                </button>
                <button
                  type="button"
                  class={[
                    classes.themeButton,
                    { [classes.activeTheme]: isCreamActive },
                  ]}
                  onClick={() => theme.set("cream")}
                >
                  <div
                    class={classes.colorPreview}
                    style={{ background: THEMES.cream.body }}
                  />
                  Cream
                </button>
              </div>
            </div>
          </InteractionPanel>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

CssKeyboard.metadata = () => ({
  title: "CSS Keyboard | Playground",
  description: "A 3D keyboard implementation using pure CSS transformations.",
  ogTitle: "CSS Keyboard | Playground",
  ogDescription: "A 3D keyboard implementation using pure CSS transformations.",
  ogImage: `${SITE_URL}/og/css-keyboard.png`,
  twitterTitle: "CSS Keyboard | Playground",
  twitterDescription:
    "A 3D keyboard implementation using pure CSS transformations.",
  twitterImage: `${SITE_URL}/og/css-keyboard.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default CssKeyboard;
