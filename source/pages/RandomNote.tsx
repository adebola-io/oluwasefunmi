import type { RouteComponent, ObjectToMap } from "retend/router";
import { useRouter, Link } from "retend/router";
import type { PageMeta } from "retend-server/client";
import type { Note } from "@/types";
import { SITE_URL } from "@/constants";
import classes from "./RandomNote.module.css";

const RandomNote: RouteComponent<PageMeta<Note>> = () => {
  const router = useRouter();
  const currentRoute = router.getCurrentRoute();
  const metadata = currentRoute.get().metadata as ObjectToMap<PageMeta<Note>>;
  const content = metadata.get("misc");

  if (!content) {
    return (
      <div class={classes.page}>
        <div class={classes.container}>
          <Link href="/random-notes" class={classes.backLink}>
            ← back to notes
          </Link>
          <div class={classes.notFound}>
            <h1>Note not found.</h1>
            <p>The note you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class={classes.page}>
      <div class={classes.container}>
        <Link href="/random-notes" class={classes.backLink}>
          ← back to notes
        </Link>
        <article class={classes.article}>
          <content.default />
        </article>
      </div>
    </div>
  );
};

RandomNote.metadata = async (routeData) => {
  const slug = routeData.params.get("slug");
  const content = (await import(`@/content/notes/${slug}/page.mdx`)) as Note;

  return {
    title: `${content.title} - random notes`,
    ogTitle: `${content.title} - random notes`,
    twitterTitle: `${content.title} - random notes`,
    ogType: "article",
    twitterDescription: content.description,
    description: content.description,
    ogDescription: content.description,
    author: "Oluwasefunmi Akomolafe",
    ogImage: content.ogImage?.startsWith("http")
      ? content.ogImage
      : `${SITE_URL}${content.ogImage}`,
    twitterImage: content.ogImage?.startsWith("http")
      ? content.ogImage
      : `${SITE_URL}${content.ogImage}`,
    misc: content,
  };
};

export default RandomNote;
