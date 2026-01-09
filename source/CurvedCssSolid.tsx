import { Cell } from "retend";
import { Input } from "retend-utils/components";
import { Box } from "@/Box";
import { PageLayout } from "@/components/PageLayout";
import classes from "./CurvedCssSolid.module.css";

const App = () => {
  const rx = Cell.source(25);
  const ry = Cell.source(-35);
  const rz = Cell.source(-0.5);

  const height = Cell.source(354);
  const width = Cell.source(354);
  const depth = Cell.source(110);
  const curve = Cell.source(0.05);
  const color = Cell.source("#6074dd");

  const transform = Cell.derived(() => {
    return `rotateX(${rx.get()}deg) rotateY(${ry.get()}deg) rotateZ(${rz.get()}deg)`;
  });

  return (
    <PageLayout>
      <div class={classes.app}>
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
          </div>
          <div class={classes.viewer}>
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
      </div>
    </PageLayout>
  );
};

export default App;
