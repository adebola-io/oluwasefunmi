import { Cell } from "retend";
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

  const height = Cell.source(354);
  const width = Cell.source(354);
  const depth = Cell.source(110);
  const curve = Cell.source(0.05);
  const color = Cell.source("#6074dd");

  const isDragging = Cell.source(false);

  const transform = Cell.derived(() => {
    return `rotateX(${rx.get()}deg) rotateY(${ry.get()}deg) rotateZ(${rz.get()}deg)`;
  });

  let lastX = 0;
  let lastY = 0;

  const handlePointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    isDragging.set(true);
    lastX = e.clientX;
    lastY = e.clientY;
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.get()) return;

    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;

    const sensitivity = 0.5;

    ry.set(ry.get() + deltaX * sensitivity);
    rx.set(rx.get() - deltaY * sensitivity);

    lastX = e.clientX;
    lastY = e.clientY;
  };

  const handlePointerUp = (e: PointerEvent) => {
    isDragging.set(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handlePointerLeave = () => {
    isDragging.set(false);
  };

  return (
    <div class={classes.app}>
      <PlaygroundLayout title="Curved CSS Solid">
        <div class={classes.container}>
          <div class={classes.controls}>
            <h2>Dimensions</h2>
            <div class={classes.controlGroup}>
              <label for="height">Height: {height}</label>
              <Input
                id="height"
                type="range"
                min="0"
                max="1000"
                model={height}
              />
            </div>
            <div class={classes.controlGroup}>
              <label for="width">Width: {width}</label>
              <Input id="width" type="range" min="0" max="1000" model={width} />
            </div>
            <div class={classes.controlGroup}>
              <label for="depth">Depth: {depth}</label>
              <Input id="depth" type="range" min="0" max="1000" model={depth} />
            </div>
            <div class={classes.controlGroup}>
              <label for="curve">Curve: {curve}</label>
              <Input id="curve" type="range" min="0" max="100" model={curve} />
            </div>
            <div class={classes.controlGroup}>
              <label for="color">Color</label>
              <input
                id="color"
                type="color"
                value={color.get()}
                onInput={(e) => color.set((e.target as HTMLInputElement).value)}
              />
            </div>

            <h2>Rotation</h2>
            <div class={classes.controlGroup}>
              <label for="rotateX">X-axis: {rx}°</label>
              <Input
                id="rotateX"
                type="range"
                min="-180"
                max="180"
                model={rx}
              />
            </div>
            <div class={classes.controlGroup}>
              <label for="rotateY">Y-axis: {ry}°</label>
              <Input
                id="rotateY"
                type="range"
                min="-180"
                max="180"
                model={ry}
              />
            </div>
            <div class={classes.controlGroup}>
              <label for="rotateZ">Z-axis: {rz}°</label>
              <Input
                id="rotateZ"
                type="range"
                min="-180"
                max="180"
                model={rz}
              />
            </div>

            <div class={classes.hint}>
              <span>💡 Drag on the viewer to orbit</span>
            </div>
          </div>
          <div
            class={[classes.viewer, { [classes.viewerDragging]: isDragging }]}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
          >
            <Box
              style={{ transform }}
              height={height}
              width={width}
              depth={depth}
              curve={curve}
              color={color}
            />
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
