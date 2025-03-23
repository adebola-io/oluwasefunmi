import type { Cell } from 'retend';
import { useRouter } from 'retend/router';
import { Plane } from '@/components/plane';

export interface NotePreviewProps {
  id: string;
  title: string;
  description: string;
  dateStr: string;
}

export const NotePreview = (props: NotePreviewProps, index: Cell<number>) => {
  const { dateStr, id, title, description } = props;
  const { Link } = useRouter();

  return (
    <li>
      <Plane
        bare
        elevateOnHover
        container:class="before:border-stroke before:border-[2.76px] before:border-dashed"
        style={{ animationDelay: `calc(var(--duration)*${index.value}*0.5)` }}
        class={[
          'bg-transparent text-left max-w-[500px] rounded-lg p-2',
          'border-stroke border-[2.76px] border-dashed',
          'animate-fade-in opacity-90 [animation-duration:calc(var(--duration)*2)]',
        ]}
      >
        <Link class="grid gap-0.5" href={`/random-notes/${id}`}>
          <h3 class="text-stroke text-3xl">{title}</h3>
          <p class="text-sm">{dateStr}.</p>
          <p>{description}</p>
        </Link>
      </Plane>
    </li>
  );
};
