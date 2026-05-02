import type { Glassview } from "@/features/playground/data/glassViews";
import { Cell, For, type SourceCell } from "retend";
import { glassViews } from "../../data/glassViews";
import { Glass } from "./Glass";
import classes from "./Glass.module.css";

interface GlassesCarouselProps {
  expanded: Cell<boolean>;
  selected: SourceCell<Glassview>;
  ref: Cell<HTMLOListElement | null>;
  getSelectedIndex: () => number;
}

export function GlassesCarousel(props: GlassesCarouselProps) {
  const { expanded, selected, ref, getSelectedIndex } = props;
  const handleScroll = (event: Event) => {
    const container = event.currentTarget as HTMLOListElement;
    const closestIndex = getClosestGlassViewIndex(
      container,
      getSelectedIndex()
    );
    const closestGlassView = glassViews[closestIndex];

    if (closestGlassView.id !== selected.peek().id) {
      selected.set(closestGlassView);
    }
  };

  return (
    <ol
      ref={ref}
      class={[
        "flex w-screen h-screen items-center overflow-x-scroll overflow-y-clip gap-15 snap-always snap-x snap-mandatory scroll-smooth",
        "before:block before:-mr-15 before:h-full before:min-w-[33dvw] before:snap-start",
        "after:block after:-mr-15 after:h-full after:min-w-[33dvw] after:snap-end",
        { "overflow-hidden!": expanded },
      ]}
      onScroll={handleScroll}
    >
      {For(glassViews, (glassView, index) => {
        return (
          <li
            class={["snap-center", classes.carouselItem]}
            data-glass-view-index={index}
            style={{ "--glass-item-index": index }}
          >
            <Glass
              selected={selected}
              expanded={expanded}
              glassView={glassView}
            />
          </li>
        );
      })}
    </ol>
  );
}

function getClosestGlassViewIndex(
  container: HTMLOListElement,
  fallback: number
) {
  const containerCenter = container.scrollLeft + container.clientWidth / 2;
  let closestIndex = fallback;
  let closestDistance = Infinity;

  Array.from(container.children).forEach((child) => {
    if (!(child instanceof HTMLElement)) return;

    const index = Number(child.dataset.glassViewIndex);
    if (Number.isNaN(index)) return;

    const childCenter = child.offsetLeft + child.offsetWidth / 2;
    const distance = Math.abs(containerCenter - childCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}
