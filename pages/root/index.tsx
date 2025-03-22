import { type RouteComponent, useRouter } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { Navigation } from '@/components/navigation';
import { noteList } from '@/library';
import { NotePreviewProps } from '@/components/note-preview';
import { MDXModule } from 'mdx/types';
import { useConsistent } from 'retend';

const RootLayout: RouteComponent<PageMeta> = async () => {
  const { Outlet } = useRouter();

  noteList.push(
    ...(await useConsistent('notes', async () => {
      const items: NotePreviewProps[] = [];
      const files = import.meta.glob('@/content/markdown/*/page.mdx');

      for (const file in files) {
        const component = files[file];
        const markdownContent = (await component()) as MDXModule;
        items.push({
          id: markdownContent.id,
          title: markdownContent.title,
          description: markdownContent.description,
          date: markdownContent.date,
        } as unknown as NotePreviewProps);
      }

      return items.sort((a, b) => {
        const id = a.id?.split('-').slice(0, -1).join('-');
        const id2 = b.id?.split('-').slice(0, -1).join('-');
        return Number(id) - Number(id2);
      });
    }))
  );

  return (
    <main
      id="page-main"
      class={[
        'grid grid-rows-[auto_1fr] px-4 pt-2 background-noise min-h-[100dvh]',
        'max-md:px-1 max-md:pb-3 max-md:gap-2',
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
};

export default RootLayout;
