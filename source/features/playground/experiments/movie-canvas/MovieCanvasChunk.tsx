import { Cell, For, useScopeContext } from "retend";
import type { PatternTemplateProps } from "../../components/InfiniteCanvas/InfiniteRepeatedPattern";
import classes from "./MovieCanvasChunk.module.css";
import { posterColor } from "./posterColor";
import {
  InfiniteCanvasScope,
  InfiniteRepeatedPatternScope,
} from "../../components/InfiniteCanvas/InfiniteCanvasScope";

export function MovieCanvasChunk(props: PatternTemplateProps) {
  const { width, height } = useScopeContext(InfiniteCanvasScope);

  const mode = Cell.derived(() => {
    const aspectRatio = width.get() / height.get();
    if (Number.isNaN(aspectRatio)) return [2, 5];

    if (aspectRatio < 0.6) return [4, 3];
    if (aspectRatio < 0.7) return [3, 3];
    if (aspectRatio < 0.8) return [3, 4];
    if (aspectRatio < 1) return [2, 3];
    if (aspectRatio < 1.2) return [3, 5];
    if (aspectRatio < 1.5) return [2, 4];

    return [2, 5];
  });

  const subgridRows = Cell.derived(() => {
    return mode.get()[0];
  });
  const subgridCols = Cell.derived(() => {
    return mode.get()[1];
  });

  const posters = Cell.derived(() => {
    return Array.from(
      { length: subgridRows.get() * subgridCols.get() },
      (_, index) => {
        const localRow = Math.floor(index / subgridCols.get());
        const localCol = index % subgridCols.get();
        return { index, localRow, localCol };
      }
    );
  });

  return (
    <div
      class={classes.container}
      style={{ "--movie-rows": subgridRows, "--movie-cols": subgridCols }}
    >
      {For(posters, (poster) => (
        <Poster
          {...poster}
          {...props}
          subgridRows={subgridRows}
          subgridCols={subgridCols}
        />
      ))}
    </div>
  );
}

interface PosterProps extends PatternTemplateProps {
  subgridRows: Cell<number>;
  subgridCols: Cell<number>;
  localRow: number;
  localCol: number;
}

function Poster(props: PosterProps) {
  const { row, col, localRow, localCol, subgridRows, subgridCols } = props;
  const { center } = useScopeContext(InfiniteRepeatedPatternScope);

  const posterRow = Cell.derived(() => {
    return row.get() * subgridRows.get() + localRow;
  });

  const posterCol = Cell.derived(() => {
    return col.get() * subgridCols.get() + localCol;
  });

  const background = Cell.derived(() => {
    return posterColor(posterRow.get(), posterCol.get());
  });

  const handleClick = () => {
    center(row.get(), col.get());
  };

  return (
    <button
      type="button"
      class={classes.poster}
      style={{ background }}
      onClick={handleClick}
    >
      {posterRow}, {posterCol}
    </button>
  );
}
