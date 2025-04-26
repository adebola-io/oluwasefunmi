import type { PageMeta } from 'retend-server/client';
import { useRouter, type RouteComponent } from 'retend/router';

const Page: RouteComponent<PageMeta> = () => {
  const router = useRouter();
  const params = router.params.get('id');

  return <div>Param id: {params}.</div>;
};

export default Page;
