import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { LargeText } from '@/components/typography';

const RandomNotes: RouteComponent<PageMeta> = () => {
  return (
    <div class="grid place-items-center p-6 relative text-center">
      <LargeText underline class="mb-1">
        random notes.
      </LargeText>
      <p class="max-w-[487px]">
        Disjoint musings, incoherent rants and streams of consciousness that I
        have decided to write down. Anything about life, technology and
        consequence.
      </p>
    </div>
  );
};

RandomNotes.metadata = {
  title: 'Random Notes | Oluwasefunmi, Web Developer',
  description:
    ' Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
};

export default RandomNotes;
