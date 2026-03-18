import { type SourceCell } from "retend";
import { Input } from "retend-utils/components";
import classes from "./CurvedCssSolid.module.css";

interface DimensionsSectionProps {
  height: SourceCell<number>;
  width: SourceCell<number>;
  depth: SourceCell<number>;
  curve: SourceCell<number>;
}

export const DimensionsSection = (props: DimensionsSectionProps) => {
  const { height, width, depth, curve } = props;
  return (
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
  );
};

interface RotationSectionProps {
  rx: SourceCell<number>;
  ry: SourceCell<number>;
  rz: SourceCell<number>;
}

export const RotationSection = (props: RotationSectionProps) => {
  const { rx, ry, rz } = props;
  return (
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
        <span class={classes.valueDisplay}>{rx}</span>
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
        <span class={classes.valueDisplay}>{ry}</span>
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
        <span class={classes.valueDisplay}>{rz}</span>
      </div>
    </div>
  );
};
