import { Painting } from "@/data/paintings";
import { Cell, createUnique } from "retend";
import { UniqueTransition } from "retend-utils/components";

interface PaintingTitleAndArtistProps {
  painting: Painting;
  isSelected?: boolean;
}

export const PaintingTitleAndArtist = createUnique<PaintingTitleAndArtistProps>(
  (props) => {
    const painting = Cell.derived(() => props.get().painting);
    const isSelected = Cell.derived(() => props.get().isSelected);
    const paintingTitle = Cell.derived(() => painting.get().title);
    const paintingArtist = Cell.derived(() => painting.get().artist);

    return (
      <UniqueTransition transitionDuration="300ms">
        <div
          class={[
            "text-sm font-medium transition-colors truncate text-white/70",
            {
              "text-3xl md:text-4xl font-medium tracking-tight text-(--text-primary)":
                isSelected,
            },
          ]}
        >
          {paintingTitle}
        </div>
        <div class="text-xs transition-colors truncate text-white/40">
          {paintingArtist}
        </div>
      </UniqueTransition>
    );
  },
);
