import { Cell } from "retend";
import type { RouteComponent } from "retend/router";
import { Input } from "retend-utils/components";
import { Box } from "./Box";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { RotateIcon } from "@/components/icons/rotate";
import { SettingsIcon } from "@/components/icons/settings";
import { SITE_URL } from "@/constants";
import classes from "./CurvedCssSolid.module.css";
import { Viewer } from "@/features/playground/components/Viewer/Viewer";

const CurvedCssSolid: RouteComponent = () => {
  const rx = Cell.source(25);
  const ry = Cell.source(-35);
  const rz = Cell.source(-0.5);
  const scale = Cell.source(1);
  const isDragging = Cell.source(false);
  const isAutoRotating = Cell.source(false);

  const isControlsOpen = Cell.source(true);

  const height = Cell.source(354);
  const width = Cell.source(354);
  const depth = Cell.source(110);
  const curve = Cell.source(30);
  const color = Cell.source("#6074dd");

  const presets = {
    cube: { height: 200, width: 200, depth: 200, curve: 0 },
    pill: { height: 100, width: 300, depth: 100, curve: 50 },
    card: { height: 400, width: 300, depth: 20, curve: 15 },
    tower: { height: 500, width: 150, depth: 150, curve: 10 },
  };

  const applyPreset = (preset: keyof typeof presets) => {
    const p = presets[preset];
    height.set(p.height);
    width.set(p.width);
    depth.set(p.depth);
    curve.set(p.curve);
  };

  const toggleControls = () => isControlsOpen.set(!isControlsOpen.get());
  const toggleAutoRotate = () => isAutoRotating.set(!isAutoRotating.get());

  return (
    <div class={classes.app}>
      <PlaygroundLayout
        title="Curved CSS Solid"
        hint="Interactive 3D CSS Experiment"
      >
        <div class={classes.immersiveContainer}>
          <Viewer
            rx={rx}
            ry={ry}
            rz={rz}
            scale={scale}
            isDragging={isDragging}
            isAutoRotating={isAutoRotating}
          >
            <Box
              height={height}
              width={width}
              depth={depth}
              curve={curve}
              color={color}
            />
          </Viewer>

          <div class={classes.uiLayer}>
            <div class={classes.headerActions}>
              <button
                type="button"
                class={[
                  classes.iconButton,
                  { [classes.active]: isAutoRotating },
                ]}
                onClick={toggleAutoRotate}
                title="Toggle Auto-Rotate"
              >
                <RotateIcon />
              </button>
              <button
                type="button"
                class={[
                  classes.iconButton,
                  { [classes.active]: isControlsOpen },
                ]}
                onClick={toggleControls}
                title="Toggle Controls"
              >
                <SettingsIcon />
              </button>
            </div>

            <div
              class={[
                classes.controlsPanel,
                {
                  [classes.controlsHidden]: Cell.derived(
                    () => !isControlsOpen.get(),
                  ),
                },
              ]}
            >
              <div class={classes.scrollableContent}>
                <div class={classes.section}>
                  <h3>Quick Presets</h3>
                  <div class={classes.presetGrid}>
                    <button type="button" onClick={() => applyPreset("cube")}>
                      Cube
                    </button>
                    <button type="button" onClick={() => applyPreset("pill")}>
                      Pill
                    </button>
                    <button type="button" onClick={() => applyPreset("card")}>
                      Card
                    </button>
                    <button type="button" onClick={() => applyPreset("tower")}>
                      Tower
                    </button>
                  </div>
                </div>

                <div class={classes.section}>
                  <h3>Dimensions</h3>
                  <div class={classes.controlRow}>
                    <label for="input-height">H</label>
                    <Input
                      id="input-height"
                      type="range"
                      min="0"
                      max="600"
                      model={height}
                      class={classes.slider}
                    />
                    <span class={classes.valueDisplay}>{height}</span>
                  </div>
                  <div class={classes.controlRow}>
                    <label for="input-width">W</label>
                    <Input
                      id="input-width"
                      type="range"
                      min="0"
                      max="600"
                      model={width}
                      class={classes.slider}
                    />
                    <span class={classes.valueDisplay}>{width}</span>
                  </div>
                  <div class={classes.controlRow}>
                    <label for="input-depth">D</label>
                    <Input
                      id="input-depth"
                      type="range"
                      min="0"
                      max="600"
                      model={depth}
                      class={classes.slider}
                    />
                    <span class={classes.valueDisplay}>{depth}</span>
                  </div>
                  <div class={classes.controlRow}>
                    <label for="input-curve">Curve</label>
                    <Input
                      id="input-curve"
                      type="range"
                      min="0"
                      max="100"
                      step="0.1"
                      model={curve}
                      class={classes.slider}
                    />
                    <span class={classes.valueDisplay}>{curve}</span>
                  </div>
                </div>

                <div class={classes.section}>
                  <h3>Appearance</h3>
                  <div class={classes.colorPickerWrapper}>
                    <input
                      id="input-color"
                      aria-label="Color"
                      type="color"
                      value={color.get()}
                      onInput={(e) =>
                        color.set((e.target as HTMLInputElement).value)
                      }
                    />
                    <span style={{ color: color }}>{color}</span>
                  </div>
                </div>

                <div class={classes.section}>
                  <h3>Rotation</h3>
                  <div class={classes.controlRow}>
                    <label for="input-rx">X</label>
                    <Input
                      id="input-rx"
                      type="range"
                      min="-180"
                      max="180"
                      model={rx}
                      class={classes.slider}
                    />
                    <span class={classes.valueDisplay}>
                      {Cell.derived(() => Math.round(rx.get()))}
                    </span>
                  </div>
                  <div class={classes.controlRow}>
                    <label for="input-ry">Y</label>
                    <Input
                      id="input-ry"
                      type="range"
                      min="-180"
                      max="180"
                      model={ry}
                      class={classes.slider}
                    />
                    <span class={classes.valueDisplay}>
                      {Cell.derived(() => Math.round(ry.get()))}
                    </span>
                  </div>
                  <div class={classes.controlRow}>
                    <label for="input-rz">Z</label>
                    <Input
                      id="input-rz"
                      type="range"
                      min="-180"
                      max="180"
                      model={rz}
                      class={classes.slider}
                    />
                    <span class={classes.valueDisplay}>
                      {Cell.derived(() => Math.round(rz.get()))}
                    </span>
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

CurvedCssSolid.metadata = () => ({
  title: "Curved CSS Solid | Playground",
  description: "A volumetric 3D box using pure CSS transforms without WebGL.",
  ogTitle: "Curved CSS Solid | Playground",
  ogDescription: "A volumetric 3D box using pure CSS transforms without WebGL.",
  ogImage: `${SITE_URL}/og/curved-css-solid.png`,
  twitterTitle: "Curved CSS Solid | Playground",
  twitterDescription:
    "A volumetric 3D box using pure CSS transforms without WebGL.",
  twitterImage: `${SITE_URL}/og/curved-css-solid.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default CurvedCssSolid;
