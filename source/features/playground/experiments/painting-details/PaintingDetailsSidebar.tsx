import type { Painting } from "@/data/paintings";

interface SidebarHeaderProps {
  painting: Painting;
  onBack: () => void;
}

export const SidebarHeader = (props: SidebarHeaderProps) => {
  const { painting, onBack } = props;

  return (
    <header class="space-y-8 animate-fade-in">
      <div class="space-y-4">
        <div class="space-y-1">
          <span class="text-[11px] font-bold tracking-[0.3em] uppercase text-white/50">
            Masterpiece
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            {painting.title}
          </h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-8 h-px" style={{ background: painting.color }} />
          <p class="text-lg text-white/60 font-light italic">{painting.artist}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onBack}
        class="w-full py-4 bg-white text-black text-[13px] font-bold rounded-full hover:bg-[#e0ebfd] transition-all active:scale-[0.98] shadow-xl shadow-white/5"
      >
        Return to Gallery
      </button>
    </header>
  );
};

export const SidebarFooter = () => (
  <footer class="pt-8 border-t border-white/5 animate-fade-in [animation-fill-mode:backwards] [animation-delay:600ms]">
    <div class="flex justify-between items-center text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold">
      <span>© 2026 Archive</span>
      <div class="flex items-center gap-2">
        <div class="w-1 h-1 rounded-full bg-white/30" />
        <span>Encrypted Provenance</span>
      </div>
    </div>
  </footer>
);
