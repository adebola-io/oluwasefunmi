import type { RouteComponent } from "retend/router";
import { useCurrentRoute, useRouter } from "retend/router";
import { Cell, If } from "retend";
import { paintings, type Painting } from "@/data/paintings";
import { SITE_URL } from "@/constants";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { PaintingTitleAndArtist } from "@/features/playground/components/PaintingTitleAndArtist";
import { Wheel } from "./Wheel";

interface PaintingContentProps {
  painting: Painting;
  onBack: () => void;
}

const PaintingContent = (props: PaintingContentProps) => {
  const { painting, onBack } = props;

  return (
    <div class="flex-1 flex flex-col md:flex-row relative font-['Manrope']">
      {/* Header Area - Matches PlaygroundLayout positioning */}
      <div class="fixed top-0 left-0 w-full p-[clamp(1rem,3vw,2rem)] z-50 pointer-events-none flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          class="pointer-events-auto flex items-center gap-2 text-[0.9rem] font-medium text-[#888] bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md hover:border-white/25 transition-all"
        >
          <ArrowLeftIcon />
          <span class="max-sm:hidden">back to wheel</span>
        </button>

        <div class="absolute left-1/2 -translate-x-1/2 text-[clamp(0.75rem,2vw,0.9rem)] font-medium tracking-[0.05em] uppercase text-white/50 pointer-events-none">
          Exhibition No. {painting.id}
        </div>
      </div>

      {/* Stage */}
      <main class="w-full min-h-[60dvh] md:min-h-0 md:flex-1 relative bg-black flex items-center justify-center p-12 md:p-24 overflow-hidden shrink-0">
        <Wheel />
      </main>

      {/* Sidebar Plaque */}
      <aside class="w-full md:w-100 border-t md:border-t-0 md:border-l border-(--border-subtle) bg-(--bg-card) z-10 flex flex-col shrink-0">
        <div class="flex-1 px-8 py-12 md:px-10 md:py-24 md:overflow-y-auto">
          <div class="space-y-10 animate-in fade-in slide-in-from-right-4 duration-700">
            <header class="space-y-3">
              <PaintingTitleAndArtist
                id={`painting-title-${painting.id}`}
                painting={painting}
                isSelected
              />
            </header>

            <div class="h-px bg-white/5 w-full" />

            <div class="grid grid-cols-2 gap-6">
              <div>
                <h3 class="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1.5">
                  Year
                </h3>
                <p class="text-sm text-(--text-primary)">{painting.year}</p>
              </div>
              <div>
                <h3 class="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1.5">
                  Medium
                </h3>
                <p class="text-sm text-(--text-primary)">Oil on Canvas</p>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                Curator's Note
              </h3>
              <p class="text-[15px] leading-relaxed text-[#94a3b8] font-light">
                {painting.description}
              </p>
            </div>

            <div class="pt-6">
              <button
                type="button"
                onClick={onBack}
                class="w-full py-4 bg-[#e0ebfd]/5 text-[#e0ebfd] text-sm font-medium border border-[#e0ebfd]/10 rounded-xl hover:bg-[#e0ebfd]/10 hover:border-[#e0ebfd]/20 transition-all active:scale-[0.98] mt-4"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        </div>

        <footer class="p-8 border-t border-white/5 flex justify-between items-center text-[10px] text-white/20 uppercase tracking-widest font-medium">
          <span>Provenance Archive</span>
          <span>2026 Edition</span>
        </footer>
      </aside>
    </div>
  );
};

const PaintingDetailsPage: RouteComponent = () => {
  const currentRoute = useCurrentRoute();
  const router = useRouter();

  const paintingId = Cell.derived(() => {
    const params = currentRoute.get().params;
    return params.get("paintingId");
  });

  const selectedPainting = Cell.derived(() => {
    const id = paintingId.get();
    if (!id) return null;
    return paintings.find((p) => p.id === Number.parseInt(id, 10)) ?? null;
  });

  const handleBack = async () => {
    await router.navigate("/playground/painting-wheel");
  };

  return (
    <div
      class="fixed inset-0 z-200 size-full flex flex-col bg-[#08090a] selection:bg-[#c3cde1] selection:text-[#08090a] overflow-y-auto md:overflow-hidden"
      style={{
        "--bg-dark": "#08090a",
        "--bg-card": "#111214",
        "--text-primary": "#e0ebfd",
        "--text-secondary": "#94a3b8",
        "--border-subtle": "rgba(255, 255, 255, 0.08)",
        "--font-family": '"Manrope", system-ui, -apple-system, sans-serif',
      }}
    >
      {If(selectedPainting, (painting) => (
        <PaintingContent painting={painting} onBack={handleBack} />
      ))}
    </div>
  );
};

PaintingDetailsPage.metadata = () => ({
  title: "Painting Details | Playground",
  description: "View painting details in a curated gallery setting.",
  ogTitle: "Painting Details | Playground",
  ogDescription: "View painting details in a curated gallery setting.",
  ogImage: `${SITE_URL}/og/painting-wheel.png`,
  twitterTitle: "Painting Details | Playground",
  twitterDescription: "View painting details in a curated gallery setting.",
  twitterImage: `${SITE_URL}/og/painting-wheel.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default PaintingDetailsPage;
