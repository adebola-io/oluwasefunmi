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

RandomNotes.metadata = {
  title: 'Random Notes | Oluwasefunmi, Web Developer',
  ogTitle: 'Random Notes | Oluwasefunmi, Web Developer',
  twitterTitle: 'Random Notes | Oluwasefunmi, Web Developer',
  ogImage:
    'https://private-user-images.githubusercontent.com/60784068/425762095-77c48cd5-9e1e-4147-ba53-a848a05560e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIwOTUtNzdjNDhjZDUtOWUxZS00MTQ3LWJhNTMtYTg0OGEwNTU2MGU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBjYzkyZWUzMDg0ZDgxMzExNTk3Mjc2Zjc2NmY1NTc5OGQ4ODM0ZDFhM2YzN2MxNzk4M2MwNzZiOWU4Y2Q1YWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.WckS-zV9PF8kbdjGbDGTccOXwsLHaOuPduMx1FmNCI4',
  description:
    ' Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
  ogDescription:
    ' Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
  twitterDescription:
    ' Disjoint musings, incoherent rants and streams of consciousness that I have decided to write down. Anything about life, technology and consequence.',
  twitterImage:
    'https://private-user-images.githubusercontent.com/60784068/425762095-77c48cd5-9e1e-4147-ba53-a848a05560e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI2NjE1MzUsIm5iZiI6MTc0MjY2MTIzNSwicGF0aCI6Ii82MDc4NDA2OC80MjU3NjIwOTUtNzdjNDhjZDUtOWUxZS00MTQ3LWJhNTMtYTg0OGEwNTU2MGU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzIyVDE2MzM1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBjYzkyZWUzMDg0ZDgxMzExNTk3Mjc2Zjc2NmY1NTc5OGQ4ODM0ZDFhM2YzN2MxNzk4M2MwNzZiOWU4Y2Q1YWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.WckS-zV9PF8kbdjGbDGTccOXwsLHaOuPduMx1FmNCI4',
};

export default RandomNotes;
