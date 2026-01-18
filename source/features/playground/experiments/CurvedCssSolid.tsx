import { Cell, useSetupEffect } from "retend";
import type { RouteComponent } from "retend/router";
import { Input } from "retend-utils/components";
import { Box } from "./Box";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import classes from "./CurvedCssSolid.module.css";

const CurvedCssSolid: RouteComponent = () => {
  const rx = Cell.source(25);
  const ry = Cell.source(-35);
  const rz = Cell.source(-0.5);

  const isControlsOpen = Cell.source(true);
  const isAutoRotating = Cell.source(false);

  const height = Cell.source(354);
  const width = Cell.source(354);
  const depth = Cell.source(110);
  const curve = Cell.source(20);
  const color = Cell.source("#6074dd");

  const scale = Cell.source(1);

  const isDragging = Cell.source(false);

  const transform = Cell.derived(() => {
    return `scale(${scale.get()}) rotateX(${rx.get()}deg) rotateY(${ry.get()}deg) rotateZ(${rz.get()}deg)`;
  });

  const pointers = new Map<number, { x: number; y: number }>();
  let lastPinchDist = 0;

  const handlePointerDown = (e: PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    isDragging.set(true);

    if (pointers.size === 2) {
      const points = Array.from(pointers.values());
      lastPinchDist = Math.hypot(
        points[0].x - points[1].x,
        points[0].y - points[1].y,
      );
    }
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!pointers.has(e.pointerId)) return;

    if (pointers.size === 1) {
      const prev = pointers.get(e.pointerId);
      if (!prev) return;
      const deltaX = e.clientX - prev.x;
      const deltaY = e.clientY - prev.y;

      const sensitivity = 0.5;
      const dx = deltaX * sensitivity;
      const dy = deltaY * sensitivity;

      ry.set(ry.get() + dx);
      rx.set(rx.get() - dy);

      vx.set(dy);
      vy.set(dx);

      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    } else if (pointers.size === 2) {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      const points = Array.from(pointers.values());
      const dist = Math.hypot(
        points[0].x - points[1].x,
        points[0].y - points[1].y,
      );

      const delta = dist - lastPinchDist;
      scale.set(Math.max(0.2, Math.min(3, scale.get() + delta * 0.01)));

      lastPinchDist = dist;
    }
  };

  const handlePointerUp = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);

    if (pointers.size === 0) {
      isDragging.set(false);
    } else if (pointers.size === 1) {
    }
    lastPinchDist = 0;
  };

  const handlePointerLeave = (e: PointerEvent) => {
    if (pointers.has(e.pointerId)) {
      handlePointerUp(e);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    const zoomSensitivity = 0.001;
    scale.set(
      Math.max(0.2, Math.min(3, scale.get() - e.deltaY * zoomSensitivity)),
    );
  };

  const presets = {
    cube: { height: 200, width: 200, depth: 200, curve: 0 },
    pill: { height: 100, width: 300, depth: 100, curve: 50 },
    card: { height: 400, width: 300, depth: 20, curve: 15 },
    tower: { height: 500, width: 150, depth: 150, curve: 10 },
  };

  const vx = Cell.source(0);
  const vy = Cell.source(0);

  useSetupEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (isAutoRotating.get()) {
        ry.set(ry.get() + 0.5);
      } else if (!isDragging.get()) {
        if (Math.abs(vx.get()) > 0.01 || Math.abs(vy.get()) > 0.01) {
          rx.set(rx.get() - vx.get());
          ry.set(ry.get() + vy.get());
          vx.set(vx.get() * 0.95);
          vy.set(vy.get() * 0.95);
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  });

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
          <div
            class={[classes.viewer, { [classes.viewerDragging]: isDragging }]}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            onWheel={handleWheel}
          >
            <div class={classes.scene}>
              <Box
                style={{ transform }}
                height={height}
                width={width}
                depth={depth}
                curve={curve}
                color={color}
              />
              <div class={classes.floor} />
            </div>
          </div>

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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21.5 2v6h-6M2.5 22v-6h6M2 12c0-5.5 4.5-10 10-10 .7 0 1.4.1 2.1.2M22 12c0 5.5-4.5 10-10 10-.7 0-1.4-.1-2.1-.2" />
                </svg>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
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
