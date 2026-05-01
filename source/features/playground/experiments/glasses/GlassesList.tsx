import { Cell, For } from "retend";
import { Glassview, glassViews } from "../../data/glassViews";
import { Glass } from "./Glass";

export function GlassesList() {
  const isExpanded = Cell.source(false);
  const selected = Cell.source<Glassview>(glassViews[0]);
  const selectedGlassviewName = Cell.derived(() => {
    return selected.get().name;
  });

  const toggleState = () => {
    isExpanded.set(!isExpanded.get());
  };

  return (
    <>
      <ol
        class={[
          "flex w-screen h-screen items-center overflow-scroll gap-15 snap-always snap-x snap-mandatory",
          "before:block before:-mr-15 before:h-full before:min-w-[37.5dvw] before:snap-start",
        ]}
      >
        {For(glassViews, (glassView) => {
          return (
            <li class="snap-start">
              <Glass
                selected={selected}
                expanded={isExpanded}
                glassView={glassView}
              />
            </li>
          );
        })}
      </ol>
      <div class="fixed bottom-15 w-full grid place-items-center">
        <h2 class="text-2xl pb-10">{selectedGlassviewName}</h2>
        <button
          class="px-3 py-2 border border-[#ffffff80] cursor-pointer rounded-3xl"
          onClick={toggleState}
        >
          Wear
        </button>
      </div>
    </>
  );
}
