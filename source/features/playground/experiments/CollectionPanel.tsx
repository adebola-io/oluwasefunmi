import { For } from "retend";
import { useRouter } from "retend/router";
import { paintings } from "@/data/paintings";
import { InteractionPanel } from "@/features/playground/components/InteractionPanel/InteractionPanel";
import { PaintingTitleAndArtist } from "@/features/playground/components/PaintingTitleAndArtist";

export const CollectionPanel = () => {
  const router = useRouter();

  return (
    <InteractionPanel modeTitle="Collection">
      <div class="flex flex-col min-h-0">
        <div class="overflow-y-auto pr-2 flex-1 space-y-1 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
          {For(paintings, (painting) => (
            <button
              type="button"
              onClick={() =>
                router.navigate(`/playground/painting-wheel/${painting.id}`)
              }
              class="w-full text-left px-3 py-2 rounded-lg transition-all duration-200 relative cursor-pointer hover:bg-white/5"
            >
              <PaintingTitleAndArtist
                id={`painting-title-${painting.id}`}
                painting={painting}
              />
            </button>
          ))}
        </div>
      </div>
    </InteractionPanel>
  );
};
