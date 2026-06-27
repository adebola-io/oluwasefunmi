import { Cell, For } from "retend";
import type { PatternTemplateProps } from "../../components/InfiniteCanvas/InfiniteRepeatedPattern";
import classes from "./MovieCanvasChunk.module.css";

const SUBGRID_ROWS = 2;
const SUBGRID_COLS = 4;
const posters = Array.from(
  { length: SUBGRID_ROWS * SUBGRID_COLS },
  (_, index) => {
    const localRow = Math.floor(index / SUBGRID_COLS);
    const localCol = index % SUBGRID_COLS;

    return { index, localRow, localCol };
  }
);

export function MovieCanvasChunk(props: PatternTemplateProps) {
  return (
    <div class={classes.container}>
      {For(posters, (poster) => (
        <Poster {...poster} {...props} />
      ))}
    </div>
  );
}

interface PosterProps extends PatternTemplateProps {
  localRow: number;
  localCol: number;
}

function Poster(props: PosterProps) {
  const { row, col, localRow, localCol } = props;

  const posterRow = Cell.derived(() => {
    return row.get() * SUBGRID_ROWS + localRow;
  });

  const posterCol = Cell.derived(() => {
    return col.get() * SUBGRID_COLS + localCol;
  });

  return (
    <div class={classes.poster}>
      {posterRow}, {posterCol}
    </div>
  );
}
