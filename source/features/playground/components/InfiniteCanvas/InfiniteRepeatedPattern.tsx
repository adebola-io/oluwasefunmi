import type { JSX } from "retend/jsx-runtime";
import { Cell, For, useScopeContext } from "retend";
import { InfiniteCanvasNode } from "./InfiniteCanvasNode";
import { InfiniteCanvasScope } from "./InfiniteCanvasScope";
import { useDerivedValue, useIntersectionObserver } from "retend-utils/hooks";
import classes from "./InfiniteCanvas.module.css";

interface PatternTemplateProps {
  col: Cell<number>;
  row: Cell<number>;
}
type PatternTemplate = (props: PatternTemplateProps) => JSX.Template;

interface InfiniteRepeatedPatternProps extends JSX.BaseContainerProps {
  density?: JSX.ValueOrCell<number>;
  overscan?: JSX.ValueOrCell<number>;
  Template: PatternTemplate;
}

const sentinels = [
  { dir: "top" },
  { dir: "right" },
  { dir: "bottom" },
  { dir: "left" },
];

function wrap(value: number, size: number) {
  return ((value % size) + size) % size;
}

interface InfiniteGridOptions {
  density: Cell<number>;
  overscan: Cell<number>;
}

function useInfiniteGrid(options: InfiniteGridOptions) {
  const { viewportRef } = useScopeContext(InfiniteCanvasScope);
  const { density, overscan } = options;
  const sentinelData = sentinels.map((s) => ({ ...s, ref: Cell.source(null) }));

  const affordance = Cell.derived(() => overscan.get() * 2 + 1);
  const side = Cell.derived(() => affordance.get() * density.get());

  const colOffset = Cell.source(0);
  const rowOffset = Cell.source(0);
  const originX = Cell.source(0);
  const originY = Cell.source(0);

  const intersectionCallback: IntersectionObserverCallback = (entries) => {
    for (const entry of entries) {
      const { isIntersecting, target } = entry;
      if (!isIntersecting || !(target instanceof HTMLElement)) continue;
      const { dir: direction } = target.dataset;
      Cell.batch(() => {
        if (direction === "left") {
          colOffset.set(wrap(colOffset.get() + density.get(), side.get()));
          originX.set(originX.get() - 1);
        } else if (direction === "right") {
          colOffset.set(wrap(colOffset.get() - density.get(), side.get()));
          originX.set(originX.get() + 1);
        } else if (direction === "top") {
          rowOffset.set(wrap(rowOffset.get() + density.get(), side.get()));
          originY.set(originY.get() - 1);
        } else if (direction === "bottom") {
          rowOffset.set(wrap(rowOffset.get() - density.get(), side.get()));
          originY.set(originY.get() + 1);
        }
      });
    }
  };

  const sentinelRefs = sentinelData.map((s) => s.ref);
  const intersectionOptions = () => ({ root: viewportRef.get() });
  useIntersectionObserver(
    sentinelRefs,
    intersectionCallback,
    intersectionOptions
  );

  return {
    colOffset,
    rowOffset,
    originX,
    originY,
    sentinelData,
    side,
    affordance,
  };
}

export function InfiniteRepeatedPattern(props: InfiniteRepeatedPatternProps) {
  const {
    Template,
    density: densityProp = 1,
    overscan: overscanProp = 1,
    ...rest
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
  const style = {
    "--irp-side": ctx.side,
    "--irp-overscan": overscan,
    "--irp-density": density,
  };
  if (typeof rest.style === "object") Object.assign(style, rest.style);

  return (
    <InfiniteCanvasNode
      {...rest}
      width={width}
      height={height}
      x={x}
      y={y}
      class={[classes.repeatedPattern, rest.class]}
      style={style}
    >
      {For(ctx.sentinelData, (s) => (
        <div
          ref={s.ref}
          data-dir={s.dir}
          class={classes.repeatedPatternSentinel}
        />
      ))}
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
  originX: Cell<number>;
  originY: Cell<number>;
}

function RepeatedPatternTile(props: RepeatedPatternTileProps) {
  const {
    id,
    side,
    overscan,
    rowOffset,
    colOffset,
    density,
    Template,
    originX,
    originY,
  } = props;

  const baseRow = Cell.derived(() => Math.floor(id / side.get()));
  const baseCol = Cell.derived(() => id % side.get());
  const slotRow = Cell.derived(() => {
    return wrap(baseRow.get() + rowOffset.get(), side.get()) + 1;
  });
  const slotCol = Cell.derived(() => {
    return wrap(baseCol.get() + colOffset.get(), side.get()) + 1;
  });
  const x = Cell.derived(() => {
    return `calc(${slotCol.get() - overscan.get()} * (100cqw / ${density.get()}))`;
  });
  const y = Cell.derived(() => {
    return `calc(${slotRow.get() - overscan.get()} * (100cqh / ${density.get()}))`;
  });
  const transform = Cell.derived(() => `translate(${x.get()}, ${y.get()})`);

  const row = Cell.derived(() => {
    return (
      originY.get() * density.get() +
      slotRow.get() -
      overscan.get() * density.get()
    );
  });

  const col = Cell.derived(() => {
    return (
      originX.get() * density.get() +
      slotCol.get() -
      overscan.get() * density.get()
    );
  });

  return (
    <div style={{ transform }} class={classes.repeatedPatternItem}>
      <Template row={row} col={col} />
    </div>
  );
}
