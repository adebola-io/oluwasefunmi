import { type RouteComponent, useRouter } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Navigation } from '@/components/navigation';

const RootLayout: RouteComponent<PageMeta> = () => {
  const { Outlet } = useRouter();
  return (
    <main
      class={[
        'grid grid-rows-[auto_1fr] px-4 pt-2 background-noise h-[calc(100dvh-var(--spacing)*2)]',
        'max-md:h-[100dvh] max-md:px-1 max-md:pb-2 max-md:gap-2',
      ]}
    >
      <Navigation />
      <Outlet />
    </main>
  );
};

RootLayout.metadata = {
  charset: 'utf-8',
  lang: 'en',
  viewport: 'width=device-width, initial-scale=1',
};

export default RootLayout;
