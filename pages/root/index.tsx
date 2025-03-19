import { type RouteComponent, useRouter } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Navigation } from '@/components/navigation';

const RootLayout: RouteComponent<PageMeta> = () => {
  const { Outlet } = useRouter();
  return (
    <main class="px-4 pt-2 background-noise min-h-[100dvh]">
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
