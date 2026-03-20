import { Cell, For, If } from "retend";
import { useCurrentRoute, useRouter } from "retend/router";
import { paintings } from "@/data/paintings";
import { InteractionPanel } from "@/features/playground/components/InteractionPanel/InteractionPanel";
import { PaintingTitleAndArtist } from "@/features/playground/components/PaintingTitleAndArtist";

export const CollectionPanel = () => {
  const router = useRouter();
  const route = useCurrentRoute();
  const hasSelectedPainting = Cell.derived(() => {
    return route.get().params.has("paintingId");
  });
  const isOpen = Cell.source(false);
  hasSelectedPainting.listen((value) => {
    queueMicrotask(() => isOpen.set(!value));
  });

  return (
    <InteractionPanel modeTitle="Collection" isOpen={isOpen}>
      <div class="flex flex-col min-h-0">
        <div class="overflow-y-auto pr-2 flex-1 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
          {For(paintings, (painting) => (
            <button
              type="button"
              onClick={() =>
                router.navigate(`/playground/painting-wheel/${painting.id}`)
              }
              class="w-full text-left min-h-[6ch] relative cursor-pointer"
            >
              {If(hasSelectedPainting, {
                false: () => (
                  <PaintingTitleAndArtist
                    id={`painting-title-${painting.id}`}
                    painting={painting}
                  />
                ),
              })}
            </button>
          ))}
        </div>
      </div>
    </InteractionPanel>
  );
};
