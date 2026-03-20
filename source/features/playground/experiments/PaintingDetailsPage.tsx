import { useRouteQuery, useRouter } from "retend/router";
import { Cell, If } from "retend";
import { paintings, type Painting } from "@/data/paintings";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { PaintingStage } from "./PaintingStage";

interface MetadataItemProps {
  label: string;
  value: string;
  delay?: string;
}

const MetadataItem = (props: MetadataItemProps) => (
  <div
    class="space-y-1.5 animate-fade-in [animation-fill-mode:backwards]"
    style={{ animationDelay: props.delay ?? "0ms" }}
  >
    <h3 class="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
      {props.label}
    </h3>
    <p class="text-[13px] text-[#e0ebfd] font-medium leading-tight">
      {props.value}
    </p>
  </div>
);

const SectionHeading = (props: { title: string; delay?: string }) => (
  <h2
    class="text-[11px] uppercase tracking-[0.25em] text-white/50 font-bold border-b border-white/5 pb-4 mb-6 animate-fade-in [animation-fill-mode:backwards]"
    style={{ animationDelay: props.delay ?? "0ms" }}
  >
    {props.title}
  </h2>
);

const NavigationHeader = ({
  painting,
  onBack,
}: {
  painting: Painting;
  onBack: () => void;
}) => (
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
        style={{ background: painting.color, boxShadow: `0 0 12px ${painting.color}` }}
      />
      <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
        Archive Entry {painting.id.toString().padStart(3, "0")}
      </span>
    </div>
  </div>
);

const SidebarHeader = ({
  painting,
  onBack,
}: {
  painting: Painting;
  onBack: () => void;
}) => (
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

const SpecsGrid = ({ painting }: { painting: Painting }) => (
  <section>
    <SectionHeading title="Provenance & Specs" delay="100ms" />
    <div class="grid grid-cols-2 gap-x-8 gap-y-10">
      <MetadataItem label="Creation Date" value={painting.year} delay="150ms" />
      <MetadataItem label="Medium" value={painting.medium} delay="200ms" />
      <MetadataItem
        label="Artistic Style"
        value={painting.style}
        delay="250ms"
      />
      <MetadataItem
        label="Dimensions"
        value={painting.dimensions}
        delay="300ms"
      />
      <div
        class="space-y-1.5 animate-fade-in [animation-fill-mode:backwards]"
        style={{ animationDelay: "350ms" }}
      >
        <h3 class="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
          Color Study
        </h3>
        <div
          class="inline-flex items-center gap-3 rounded-full border px-3 py-2"
          style={{
            background: `${painting.color}14`,
            borderColor: `${painting.color}33`,
            boxShadow: `0 0 24px ${painting.color}14`,
          }}
        >
          <div
            class="size-3 rounded-full border border-black/10 shadow-[0_0_0_4px_rgba(255,255,255,0.03)]"
            style={{ background: painting.color }}
          />
          <p class="text-[13px] text-[#e0ebfd] font-medium leading-none">
            {painting.color}
          </p>
        </div>
      </div>
      <div class="col-span-2">
        <MetadataItem
          label="Current Location"
          value={painting.location}
          delay="350ms"
        />
      </div>
    </div>
  </section>
);

const HistoricalContent = ({ painting }: { painting: Painting }) => (
  <div class="space-y-12">
    <section class="animate-fade-in [animation-fill-mode:backwards] [animation-delay:400ms]">
      <SectionHeading title="Curator's Insight" />
      <p class="text-[16px] md:text-[17px] leading-relaxed text-white/80 font-light">
        {painting.description}
      </p>
    </section>

    <section class="animate-fade-in [animation-fill-mode:backwards] [animation-delay:500ms]">
      <SectionHeading title="Historical Narrative" />
      <div class="space-y-6">
        <p class="text-[15px] leading-relaxed text-white/80 font-light">
          {painting.details}
        </p>
        <div class="p-6 rounded-2xl bg-white/2 border border-white/5 space-y-3 group hover:bg-white/[0.04] transition-colors duration-500">
          <div class="flex items-center gap-2 text-white/60">
            <svg
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span class="text-[10px] font-bold tracking-widest uppercase">
              Verified Record
            </span>
          </div>
          <p class="text-[13px] text-white/60 leading-relaxed italic">
            This work is part of the global cultural heritage archive. Data
            synchronized with major museum registries.
          </p>
        </div>
      </div>
    </section>
  </div>
);

const SidebarFooter = () => (
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

interface PaintingContentProps {
  painting: Painting;
  onBack: () => void;
}

const PaintingContent = (props: PaintingContentProps) => {
  const { painting, onBack } = props;

  return (
    <div class="flex-1 flex flex-col md:flex-row relative font-['Manrope'] overflow-hidden">
      <NavigationHeader painting={painting} onBack={onBack} />

      {/* Stage Area */}
      <main class="w-full h-[50dvh] md:h-auto md:flex-1 relative bg-[#08090a] flex items-center justify-center overflow-hidden shrink-0">
        <div
          class="absolute inset-0 opacity-80 pointer-events-none transition-colors duration-1000"
          style={{
            background: `radial-gradient(circle at center, ${painting.color} 0%, ${painting.color}aa 18%, ${painting.color}44 42%, transparent 72%)`,
          }}
        />
        <PaintingStage />
      </main>

      {/* Information Sidebar */}
      <aside
        class="w-full md:w-[420px] lg:w-[480px] bg-[#0c0d0e] border-t md:border-t-0 md:border-l border-white/5 z-10 flex flex-col shrink-0 h-[50dvh] md:h-auto overflow-y-auto custom-scrollbar selection:bg-white/10 selection:text-white"
        style={{ borderColor: `${painting.color}22`, boxShadow: `inset 1px 0 0 ${painting.color}22` }}
      >
        <div class="flex-1 p-8 md:p-14 lg:p-16 space-y-12">
          <SidebarHeader painting={painting} onBack={onBack} />
          <SpecsGrid painting={painting} />
          <HistoricalContent painting={painting} />
          <SidebarFooter />
        </div>
      </aside>
    </div>
  );
};

const PaintingDetailsPage = () => {
  const query = useRouteQuery();
  const router = useRouter();
  const paintingId = query.get("paintingId");

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
      class="fixed inset-0 z-200 size-full flex flex-col bg-[#08090a] selection:bg-white/10 selection:text-white overflow-y-auto md:overflow-hidden"
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

export default PaintingDetailsPage;
