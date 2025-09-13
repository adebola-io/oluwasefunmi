import { For } from 'retend';
import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { NotePreview, type NotePreviewProps } from '@/components/note-preview';
import { LargeText } from '@/components/typography';
import type { Note } from '@/library';

export const getNotesIndex = async () => {
  const items: NotePreviewProps[] = [];
  const files = import.meta.glob('@/content/markdown/*/page.mdx');

  for (const file in files) {
    const component = files[file];
    const markdownContent = (await component()) as Note;
    items.push({
      id: markdownContent.id,
      title: markdownContent.title,
      description: markdownContent.description,
      dateStr: markdownContent.dateStr,
    });
  }

  return items.sort((a, b) => {
    const id = a.id?.split('-').slice(0, -1).join('-');
    const id2 = b.id?.split('-').slice(0, -1).join('-');
    return Number(id) - Number(id2);
  });
};

const RandomNotes: RouteComponent<PageMeta<NotePreviewProps[]>> = (props) => {
  const notes = props.metadata.get('misc');

  return (
    <div
      class={[
        'grid grid-rows-[auto_auto_auto_1fr] place-items-center px-6 py-4 relative text-center top-level-bare',
        'max-md:px-3 max-sm:px-1',
      ]}
    >
      <LargeText underline class="mb-1">
        random notes.
      </LargeText>
      <p class="max-w-[500px] mb-4">
        Disjoint musings, incoherent rants and streams of consciousness that I
        have decided to write down. Anything about life, technology and
        consequence.
      </p>
      <ul>{For(notes, NotePreview)}</ul>
    </div>
  );
};

const title = 'Random Notes | Oluwasefunmi, Web Developer';
const ogImage =
  'https://github.com/user-attachments/assets/aa453638-5962-48a1-859d-0af86555c870';
const description =
  'Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.';

RandomNotes.metadata = async () => {
  const notes = await getNotesIndex();
  return {
    title,
    ogTitle: title,
    twitterTitle: title,
    ogImage,
    description,
    ogDescription: description,
    twitterDescription: description,
    twitterImage: ogImage,
    misc: notes,
  };
};

export default RandomNotes;
