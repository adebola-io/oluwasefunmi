import type { Cell } from 'retend';
import { useRouter } from 'retend/router';

export interface NotePreviewProps {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const NotePreview = (props: NotePreviewProps, index: Cell<number>) => {
  const { Link } = useRouter();

  const date = new Date(props.date);
  const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <li
      style={{ animationDelay: `calc(var(--duration)*${index.value}*0.5)` }}
      class="rounded-lg animate-fade-in opacity-90 [animation-duration:calc(var(--duration)*2)] max-w-[500px] border-stroke border-[2.76px] text-left border-dashed p-2"
    >
      <Link class="grid gap-0.5" href={`/random-notes/${props.id}`}>
        <h3 class="text-stroke text-3xl">{props.title}</h3>
        <p class="text-sm">{dateString}.</p>
        <p>{props.description}</p>
      </Link>
    </li>
  );
};
