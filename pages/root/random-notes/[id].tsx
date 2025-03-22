import { useRouter, type RouteComponent } from 'retend/router';
import type { PageMeta } from 'retend-server/client';
import { MDXModule } from 'mdx/types';

const RandomNote: RouteComponent<PageMeta<MDXModule>> = () => {
  const router = useRouter();
  const currentRoute = router.getCurrentRoute();
  const metadata = currentRoute.value.metadata;
  const content = metadata.get('misc') as MDXModule;

  return (
    <article class="relative">
      <content.default />
    </article>
  );
};

RandomNote.metadata = async (routeData) => {
  const id = routeData.params.get('id');
  console.log('Loading note: ', id);
  const content = await import(`@/content/markdown/${id}.mdx`);
  console.log('Loaded note: ', id);

  return {
    title: `${content.title} - random notes`,
    misc: content,
  };
};

export default RandomNote;
