import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { NotePreview, type NotePreviewProps } from '@/components/note-preview';
import { LargeText } from '@/components/typography';
import { MDXModule } from 'mdx/types';
import { For } from 'retend';

const RandomNotes: RouteComponent<PageMeta> = async () => {
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

  const sortedItems = items.sort((a, b) => {
    const id = a.id?.split('-').slice(0, -1).join('-');
    const id2 = b.id?.split('-').slice(0, -1).join('-');
    return Number(id) - Number(id2);
  });

  return (
    <div
      class={[
        'grid grid-rows-[auto_auto_1fr] place-items-center px-6 py-4 relative text-center top-level-bare',
        'px-3',
      ]}
    >
      <LargeText underline class="mb-1">
        random notes.
      </LargeText>
      <p class="max-w-[500px]">
        Disjoint musings, incoherent rants and streams of consciousness that I
        have decided to write down. Anything about life, technology and
        consequence.
      </p>
      <ul>{For(sortedItems, NotePreview)}</ul>
    </div>
  );
};

RandomNotes.metadata = {
  title: 'Random Notes | Oluwasefunmi, Web Developer',
  description:
    ' Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
};

export default RandomNotes;
