import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { NotePreview } from '@/components/note-preview';
import { LargeText } from '@/components/typography';
import { For } from 'retend';
import { noteList } from '@/library';

const RandomNotes: RouteComponent<PageMeta> = async () => {
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
      <ul>{For(noteList, NotePreview)}</ul>
    </div>
  );
};

const ogImage =
  'https://github.com/user-attachments/assets/aa453638-5962-48a1-859d-0af86555c870';
RandomNotes.metadata = {
  title: 'Random Notes | Oluwasefunmi, Web Developer',
  ogTitle: 'Random Notes | Oluwasefunmi, Web Developer',
  twitterTitle: 'Random Notes | Oluwasefunmi, Web Developer',
  ogImage,
  description:
    'Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
  ogDescription:
    'Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
  twitterDescription:
    'Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
  twitterImage: ogImage,
};

export default RandomNotes;
