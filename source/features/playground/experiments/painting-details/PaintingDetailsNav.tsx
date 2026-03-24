import type { Painting } from "@/features/playground/types";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";

interface NavigationHeaderProps {
  painting: Painting;
  onBack: () => void;
}

export const NavigationHeader = (props: NavigationHeaderProps) => {
  const { painting, onBack } = props;
  return (
    <div class="fixed top-0 left-0 w-full p-6 md:p-10 z-50 pointer-events-none flex items-center justify-between">
      <button
        type="button"
        onClick={onBack}
        class="pointer-events-auto group flex items-center gap-3 text-[0.85rem] font-semibold text-white/70 bg-black/40 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-xl hover:border-white/30 hover:text-white hover:bg-black/60 transition-all duration-300 active:scale-95"
      >
        <ArrowLeftIcon class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Exit Exhibition</span>
      </button>

      <div
        class="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md pointer-events-auto"
        style={{ borderColor: `${painting.color}22` }}
      >
        <div
          class="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{
            background: painting.color,
            boxShadow: `0 0 12px ${painting.color}`,
          }}
        />
        <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
          Archive Entry {painting.id.toString().padStart(3, "0")}
        </span>
      </div>
    </div>
  );
};
