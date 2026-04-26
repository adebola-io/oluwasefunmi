import { Cell, For } from "retend";
import { albumGroups } from "./albumGroups";

interface GridPlaceholderProps {
  index: Cell<number>;
}

function GridPlaceholder(props: GridPlaceholderProps) {
  const { index } = props;
  const gridArea = Cell.derived(() => `basket-${index.get()}`);

  return (
    <div
      aria-hidden="true"
      class="pointer-events-none invisible min-h-(--album-row-height)"
      style={{ gridArea }}
    />
  );
}

export function GridPlaceholders() {
  return For(albumGroups, (_, index) => <GridPlaceholder index={index} />);
}
