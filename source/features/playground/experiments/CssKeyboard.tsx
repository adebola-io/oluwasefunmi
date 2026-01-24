import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { Viewer } from "@/features/playground/components/Viewer/Viewer";
import Keyboard from "@/features/playground/components/Keyboard";
import { Cell, useSetupEffect } from "retend";
import classes from "./CssKeyboard.module.css";
import { WPMCounter } from "@/features/playground/components/WPMCounter";
import {
  setSoundProfile,
  type SoundProfile,
} from "@/features/playground/components/KeyboardSounds";

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
    bg: "#E6E3D8",
    body: "#D4D0C5",
    secondaryBody: "#b0aca0",
    key: "#EAE8E0",
    secondaryKey: "#c1c1b0",
    text: "rgba(92, 86, 75, 0.7)",
  },
};

type ThemeType = keyof typeof THEMES;

const CssKeyboard = () => {
  const isControlsOpen = Cell.source(true);
  const theme = Cell.source<ThemeType>("cream");
  const soundProfile = Cell.source<SoundProfile>("switch");
  const showWPM = Cell.source(true);

  const colors = Cell.derived(() => THEMES[theme.get()]);

  const isControlsHidden = Cell.derived(() => !isControlsOpen.get());
  const isBlueActive = Cell.derived(() => theme.get() === "blue");
  const isBlackActive = Cell.derived(() => theme.get() === "black");
  const isCreamActive = Cell.derived(() => theme.get() === "cream");

  const isSwitchSound = Cell.derived(() => soundProfile.get() === "switch");
  const isTypewriterSound = Cell.derived(
    () => soundProfile.get() === "typewriter",
  );
  const isBubbleSound = Cell.derived(() => soundProfile.get() === "bubble");

  const mode = Cell.source<"view" | "type">("view");
  const isViewMode = Cell.derived(() => mode.get() === "view");
  const isTypeMode = Cell.derived(() => mode.get() === "type");

  const toggleControls = () => isControlsOpen.set(!isControlsOpen.get());

  useSetupEffect(() => {
    soundProfile.listen((p) => setSoundProfile(p));
  });

  return (
    <div class={classes.app}>
      <PlaygroundLayout title="CSS Keyboard">
        <div class={classes.immersiveContainer}>
          <Viewer class="animate-fade-in" initialRx={9} isEnabled={isViewMode}>
            <Keyboard colors={colors} mode={mode} />
          </Viewer>

          <WPMCounter show={showWPM} />

          <div class={classes.uiLayer}>
            <div class={classes.headerActions}>
              <button
                type="button"
                class={[
                  classes.iconButton,
                  { [classes.active]: isControlsOpen },
                ]}
                onClick={toggleControls}
                title="Toggle Controls"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <title>Toggle Controls</title>
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M12 2v2M12 22v-2M2 12h2M22 12h-2" />
                </svg>
              </button>
            </div>

            <div
              class={[
                classes.controlsPanel,
                {
                  [classes.controlsHidden]: isControlsHidden,
                },
              ]}
            >
              <div class={classes.scrollableContent}>
                <div class={classes.section}>
                  <h3>Interaction Mode</h3>
                  <div class={classes.segmentedControl}>
                    <button
                      type="button"
                      class={[
                        classes.segmentButton,
                        { [classes.activeSegment]: isViewMode },
                      ]}
                      onClick={() => mode.set("view")}
                    >
                      Adjust View
                    </button>
                    <button
                      type="button"
                      class={[
                        classes.segmentButton,
                        { [classes.activeSegment]: isTypeMode },
                      ]}
                      onClick={() => mode.set("type")}
                    >
                      Tap Keys
                    </button>
                  </div>
                </div>

                <div class={classes.section}>
                  <h3>Features</h3>
                  <div class={classes.featureGrid}>
                    <label class={classes.featureToggle}>
                      <input
                        type="checkbox"
                        checked={Cell.derived(() => showWPM.get())}
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
                    <button
                      type="button"
                      class={[
                        classes.segmentButton,
                        { [classes.activeSegment]: isSwitchSound },
                      ]}
                      onClick={() => soundProfile.set("switch")}
                    >
                      Switch
                    </button>
                    <button
                      type="button"
                      class={[
                        classes.segmentButton,
                        { [classes.activeSegment]: isTypewriterSound },
                      ]}
                      onClick={() => soundProfile.set("typewriter")}
                    >
                      Typewriter
                    </button>
                    <button
                      type="button"
                      class={[
                        classes.segmentButton,
                        { [classes.activeSegment]: isBubbleSound },
                      ]}
                      onClick={() => soundProfile.set("bubble")}
                    >
                      Bubble
                    </button>
                  </div>
                </div>

                <div class={classes.section}>
                  <h3>Color Theme</h3>
                  <div class={classes.themeGrid}>
                    <button
                      type="button"
                      class={[
                        classes.themeButton,
                        {
                          [classes.activeTheme]: isBlueActive,
                        },
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
                        {
                          [classes.activeTheme]: isBlackActive,
                        },
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
                        {
                          [classes.activeTheme]: isCreamActive,
                        },
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
              </div>
            </div>
          </div>
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
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "CSS Keyboard | Playground",
  twitterDescription:
    "A 3D keyboard implementation using pure CSS transformations.",
  twitterImage: `${SITE_URL}/og/css-keyboard.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default CssKeyboard;
