import { useRouteQuery, useRouter } from "retend/router";
import { Cell, If } from "retend";
import type { Painting } from "@/features/playground/types";
import { paintings } from "@/features/playground/data/paintings";
import { PaintingStage } from "./PaintingStage";
import { NavigationHeader } from "./painting-details/PaintingDetailsNav";
import {
  SidebarHeader,
  SidebarFooter,
} from "./painting-details/PaintingDetailsSidebar";
import {
  SpecsGrid,
  HistoricalContent,
} from "./painting-details/PaintingDetailsSections";

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
        class="w-full md:w-105 lg:w-120 bg-[#0c0d0e] border-t md:border-t-0 md:border-l border-white/5 z-10 flex flex-col shrink-0 h-[50dvh] md:h-auto overflow-y-auto custom-scrollbar selection:bg-white/10 selection:text-white"
        style={{
          borderColor: `${painting.color}22`,
          boxShadow: `inset 1px 0 0 ${painting.color}22`,
        }}
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
