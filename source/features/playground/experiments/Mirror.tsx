import { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "../components/PlaygroundLayout";
import classes from "./Mirror.module.css";
import { PageMeta } from "retend-server/client";
import { SITE_URL } from "@/shared/constants";

const Mirror: RouteComponent<PageMeta> = () => {
  return (
    <PlaygroundLayout title="Mirror">
      <div class={classes.container}>
        <div class={classes.mirror} />
      </div>
    </PlaygroundLayout>
  );
};

Mirror.metadata = () => ({
  title: "Mirror | Playground",
  description:
    "An interactive CSS glasses demo with style previews and animated try-on transitions.",
  ogTitle: "Mirror | Playground",
  ogDescription:
    "An interactive CSS glasses demo with style previews and animated try-on transitions.",
  ogImage: `${SITE_URL}/og/mirror.png`,
  twitterTitle: "Mirror | Playground",
  twitterDescription:
    "An interactive CSS glasses demo with style previews and animated try-on transitions.",
  twitterImage: `${SITE_URL}/og/mirror.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default Mirror;
