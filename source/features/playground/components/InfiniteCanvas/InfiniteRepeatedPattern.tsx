import type { JSX } from "retend/jsx-runtime";
import { Cell, For, useScopeContext } from "retend";
import { InfiniteCanvasNode } from "./InfiniteCanvasNode";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import { useDerivedValue } from "retend-utils/hooks";
import classes from "./InfiniteCanvas.module.css";

export interface PatternTemplateProps {
  col: Cell<number>;
  row: Cell<number>;
}
type PatternTemplate = (props: PatternTemplateProps) => JSX.Template;

interface InfiniteRepeatedPatternProps {
  density?: JSX.ValueOrCell<number>;
  overscan?: JSX.ValueOrCell<number>;
  Template: PatternTemplate;
}

function wrap(value: number, size: number) {
  return ((value % size) + size) % size;
}

interface InfiniteGridOptions {
  density: Cell<number>;
  overscan: Cell<number>;
}

function useInfiniteGrid(options: InfiniteGridOptions) {
  const ctx = useScopeContext(InfiniteCanvasScope);
  const { cameraX, cameraY, viewportHeight, viewportWidth } = ctx;

  const { density, overscan } = options;
  const nodeRef = Cell.source<HTMLElement | null>(null);
  const affordance = Cell.derived(() => overscan.get() * 2 + 1);
  const side = Cell.derived(() => affordance.get() * density.get());
  const originX = Cell.derived(() => {
    const width = viewportWidth.get();
    return width === 0 ? 0 : Math.round(-cameraX.get() / width);
  });

  const originY = Cell.derived(() => {
    const height = viewportHeight.get();
    return height === 0 ? 0 : Math.round(-cameraY.get() / height);
  });

  const colOffset = Cell.derived(() => -originX.get() * density.get());
  const rowOffset = Cell.derived(() => -originY.get() * density.get());

  return {
    affordance,
    colOffset,
    originX,
    originY,
    nodeRef,
    rowOffset,
    side,
  };
}

export function InfiniteRepeatedPattern(props: InfiniteRepeatedPatternProps) {
  const {
    Template,
    density: densityProp = 1,
    overscan: overscanProp = 1,
  } = props;

  const density = useDerivedValue(densityProp);
  const overscan = useDerivedValue(overscanProp);
  const ctx = useInfiniteGrid({ density, overscan });
  const width = Cell.derived(() => `calc(100cqw * ${ctx.affordance.get()})`);
  const height = Cell.derived(() => `calc(100cqh * ${ctx.affordance.get()})`);
  const x = Cell.derived(() => {
    return `calc((-100cqw * ${overscan.get()}) + (${ctx.originX.get()} * 100cqw))`;
  });
  const y = Cell.derived(() => {
    return `calc((-100cqh * ${overscan.get()}) + (${ctx.originY.get()} * 100cqh))`;
  });

  const grid = Cell.derived(() => {
    const area = Math.pow(ctx.affordance.get(), 2);
    const split = Math.pow(density.get(), 2);
    return Array.from({ length: area * split }, (_, id) => ({ id }));
  });

  const tileProps = { overscan, density, Template, ...ctx };
  const style = { "--irp-density": density };
  const nodeProps = { width, height, x, y, style, ref: ctx.nodeRef };

  return (
    <InfiniteCanvasNode {...nodeProps}>
      {For(
        grid,
        (props) => (
          <RepeatedPatternTile {...props} {...tileProps} />
        ),
        { key: "id" }
      )}
    </InfiniteCanvasNode>
  );
}

interface RepeatedPatternTileProps {
  id: number;
  side: Cell<number>;
  overscan: Cell<number>;
  rowOffset: Cell<number>;
  colOffset: Cell<number>;
  density: Cell<number>;
  Template: PatternTemplate;
}

function RepeatedPatternTile(props: RepeatedPatternTileProps) {
  const { id, side, overscan, rowOffset, colOffset, density, Template } = props;

  const baseRow = Cell.derived(() => Math.floor(id / side.get()));
  const baseCol = Cell.derived(() => id % side.get());
  const slotRow = Cell.derived(() => {
    return wrap(baseRow.get() + rowOffset.get(), side.get());
  });
  const slotCol = Cell.derived(() => {
    return wrap(baseCol.get() + colOffset.get(), side.get());
  });
  const x = Cell.derived(() => {
    return `calc(${slotCol.get()} * (100cqw / ${density.get()}))`;
  });
  const y = Cell.derived(() => {
    return `calc(${slotRow.get()} * (100cqh / ${density.get()}))`;
  });
  const transform = Cell.derived(() => `translate(${x.get()}, ${y.get()})`);
  const factor = Cell.derived(() => overscan.get() * density.get());

  const row = Cell.derived(() => {
    const rawRow = baseRow.get() + rowOffset.get();
    return (
      baseRow.get() -
      factor.get() -
      Math.floor(rawRow / side.get()) * side.get()
    );
  });

  const col = Cell.derived(() => {
    const rawCol = baseCol.get() + colOffset.get();
    return (
      baseCol.get() -
      factor.get() -
      Math.floor(rawCol / side.get()) * side.get()
    );
  });

  return (
    <div style={{ transform }} class={classes.repeatedPatternItem}>
      <Template row={row} col={col} />
    </div>
  );
}
