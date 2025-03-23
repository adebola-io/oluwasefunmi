import { type RouteComponent, useRouter } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Navigation } from '@/components/navigation';
import { getNotesIndex, noteList } from '@/library';
import { useConsistent } from 'retend';

const RootLayout: RouteComponent<PageMeta> = async () => {
  const { Outlet } = useRouter();
  const notes = await useConsistent('notes', getNotesIndex);
  if (notes?.length) noteList.value = notes;

  return (
    <main
      id="page-main"
      class={[
        'grid grid-rows-[auto_1fr] px-4 pt-2 background-noise min-h-[calc(100dvh_-_var(--spacing))]',
        'max-md:min-h-[100dvh] max-md:px-1 max-md:pb-3 max-md:gap-2',
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
  themeColor: '#e1e1e1',
  ogUrl: 'https://adebola.online',
  ogType: 'website',
  ogSiteName: 'adebola.online',
};

export default RootLayout;
