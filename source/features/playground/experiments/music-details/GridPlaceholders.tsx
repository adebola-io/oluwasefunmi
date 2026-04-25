import { Cell, For } from "retend";
import { albumGroups } from "./albumGroups";

export function GridPlaceholders() {
  return For(albumGroups, (_, index) => {
    const gridArea = Cell.derived(() => `basket-${index.get()}`);

    return (
      <div
        aria-hidden="true"
        class="pointer-events-none invisible min-h-(--album-row-height)"
        style={{ gridArea }}
      />
    );
  });
}
