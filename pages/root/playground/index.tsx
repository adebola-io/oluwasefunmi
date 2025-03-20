import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { LargeText } from '@/components/typography';

const Playground: RouteComponent<PageMeta> = () => {
  return (
    <div class="grid py-6 relative">
      <LargeText underline class="mb-1">
        playground.
      </LargeText>
      <p class="max-w-[487px]">
        An area for development, learning, and creativity. Coding experiments,
        design explorations, and whatever creative projects come to mind.
      </p>
    </div>
  );
};

Playground.metadata = {
  title: 'Playground | Oluwasefunmi, Web Developer',
  description:
    'An area for development, learning, and creativity. Coding experiments, design explorations, and whatever creative projects come to mind.',
};

export default Playground;
