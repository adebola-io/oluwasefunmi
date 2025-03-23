import { useRouter, type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import type { Note, ObjectToMap } from '@/library';

const RandomNote: RouteComponent<PageMeta<Note>> = () => {
  const router = useRouter();
  const currentRoute = router.getCurrentRoute();
  const metadata = currentRoute.value.metadata as ObjectToMap<PageMeta<Note>>;
  const content = metadata.get('misc');

  if (!content) {
    return <div>Error: Could not read note content.</div>;
  }

  return (
    <div
      id="note-article-container"
      class="grid place-items-center py-6 max-md:pt-4 mx-2 top-level-bare"
    >
      <article
        class={[
          'relative [&_p]:text-[1rem] [&_p]:my-1 max-w-[700px] max-md:max-w-[500px]',
          '[&_ul]:list-disc [&_ul]:pl-2',
        ]}
      >
        <content.default />
      </article>
    </div>
  );
};

RandomNote.metadata = async (routeData) => {
  const id = routeData.params.get('id');
  const content = (await import(`@/content/markdown/${id}/page.mdx`)) as Note;

  return {
    title: `${content.title} - random notes`,
    ogTitle: `${content.title} - random notes`,
    twitterTitle: `${content.title} - random notes`,
    ogType: 'article',
    twitterDescription: content.description,
    description: content.description,
    ogDescription: content.description,
    author: 'Oluwasefunmi Akomolafe',
    ogImage: content.ogImage,
    twitterImage: content.ogImage,
    misc: content,
  };
};

export default RandomNote;
