import { Cell } from "retend";
import { Input } from "retend-utils/components";
import { Box } from "@/Box";
import classes from "./App.module.css";

const App = () => {
  const rx = Cell.source(0);
  const ry = Cell.source(0);
  const rz = Cell.source(0);

  const height = Cell.source(200);
  const width = Cell.source(200);
  const depth = Cell.source(40);
  const curve = Cell.source(0);

  const transform = Cell.derived(() => {
    return `rotateX(${rx.get()}deg) rotateY(${ry.get()}deg) rotateZ(${rz.get()}deg)`;
  });

  return (
    <div class={classes.app}>
      <Box
        style={{ transform }}
        height={height}
        width={width}
        depth={depth}
        curve={curve}
      />
      <br />
      <br />

      <label for="height">Height</label>
      <Input
        id="height"
        type="range"
        min="0"
        max="1000"
        value="0"
        model={height}
      />

      <label for="width">Width</label>
      <Input
        id="width"
        type="range"
        min="0"
        max="1000"
        value="0"
        model={width}
      />

      <label for="depth">Depth</label>
      <Input
        id="depth"
        type="range"
        min="0"
        max="1000"
        value="0"
        model={depth}
      />

      <label for="curve">Curve</label>
      <Input
        id="curve"
        type="range"
        min="0"
        max="100"
        value="0"
        model={curve}
      />

      <label for="rotateX">Rotate on x-axis</label>
      <Input
        id="rotateX"
        type="range"
        min="-180"
        max="180"
        value="0"
        model={rx}
      />

      <label for="rotateY">Rotate on y-axis</label>
      <Input
        id="rotateY"
        type="range"
        min="-180"
        max="180"
        value="0"
        model={ry}
      />

      <label for="rotateZ">Rotate on z-axis</label>
      <Input
        id="rotateZ"
        type="range"
        min="-180"
        max="180"
        value="0"
        model={rz}
      />
    </div>
  );
};

export default App;
