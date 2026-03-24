import type { Painting } from "@/data/paintings";
import { MetadataItem, SectionHeading } from "./PaintingDetailsShared";

export const SpecsGrid = (props: { painting: Painting }) => {
  const { painting } = props;
  return (
    <section>
      <SectionHeading title="Provenance & Specs" delay="100ms" />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        <MetadataItem
          label="Creation Date"
          value={painting.year}
          delay="150ms"
        />
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
        <div class="sm:col-span-2">
          <MetadataItem
            label="Current Location"
            value={painting.location}
            delay="350ms"
          />
        </div>
      </div>
    </section>
  );
};

export const HistoricalContent = (props: { painting: Painting }) => {
  const { painting } = props;
  return (
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
};
