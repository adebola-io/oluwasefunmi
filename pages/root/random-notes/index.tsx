import { For } from 'retend';
import type { RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { NotePreview } from '@/components/note-preview';
import { LargeText } from '@/components/typography';
import { noteList } from '@/library';

const RandomNotes: RouteComponent<PageMeta> = () => {
  return (
    <div
      class={[
        'grid grid-rows-[auto_auto_auto_1fr] place-items-center px-6 py-4 relative text-center top-level-bare',
        'max-md:px-3 max-sm:px-1',
      ]}
    >
      <LargeText underline class="mb-1 view-transition-heading">
        random notes.
      </LargeText>
      <p class="max-w-[500px] mb-4">
        Disjoint musings, incoherent rants and streams of consciousness that I
        have decided to write down. Anything about life, technology and
        consequence.
      </p>
      <ul>{For(noteList, NotePreview)}</ul>
    </div>
  );
};

const title = 'Random Notes | Oluwasefunmi, Web Developer';
const ogImage =
  'https://github.com/user-attachments/assets/aa453638-5962-48a1-859d-0af86555c870';
const description =
  'Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.';
RandomNotes.metadata = {
  title,
  ogTitle: title,
  twitterTitle: title,
  ogImage,
  description,
  ogDescription: description,
  twitterDescription: description,
  twitterImage: ogImage,
};

export default RandomNotes;
