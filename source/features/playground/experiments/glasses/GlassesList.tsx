import { Cell } from "retend";
import { Glassview, glassViews } from "../../data/glassViews";
import { GlassesCarousel } from "./GlassesCarousel";
import { GlassesControls } from "./GlassesControls";

export function GlassesList() {
  const isExpanded = Cell.source(false);
  const selected = Cell.source<Glassview>(glassViews[0]);
  const scrollContainer = Cell.source<HTMLOListElement | null>(null);
  const selectedGlassviewName = Cell.derived(() => selected.get().name);

  const getSelectedIndex = () => getSelectedGlassViewIndex(selected);
  const selectIndex = (index: number) => {
    selected.set(glassViews[index]);
    scrollToGlassView(scrollContainer.peek(), index);
  };
  const moveSelection = (direction: -1 | 1) => {
    selectIndex(clampIndex(getSelectedIndex() + direction));
  };
  const toggleWear = () => {
    isExpanded.set(!isExpanded.peek());
  };

  return (
    <>
      <GlassesCarousel
        expanded={isExpanded}
        selected={selected}
        ref={scrollContainer}
        getSelectedIndex={getSelectedIndex}
      />
      <GlassesControls
        name={selectedGlassviewName}
        isWorn={isExpanded}
        onMove={moveSelection}
        onToggleWear={toggleWear}
      />
    </>
  );
}

function clampIndex(index: number) {
  return Math.min(glassViews.length - 1, Math.max(0, index));
}

function getSelectedGlassViewIndex(selected: Cell<Glassview>) {
  return Math.max(
    0,
    glassViews.findIndex((glassView) => glassView.id === selected.get().id)
  );
}

function scrollToGlassView(container: HTMLOListElement | null, index: number) {
  const target = container?.querySelector<HTMLElement>(
    `[data-glass-view-index="${index}"]`
  );

  target?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}
