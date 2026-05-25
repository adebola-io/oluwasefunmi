import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";

const PaperFoldTransitions: RouteComponent = () => {
  return (
    <div class="w-dvw h-dvh">
      <PlaygroundLayout title="Paper Fold Transitions">
        <div class="w-screen h-screen grid place-items-center overflow-hidden"></div>
      </PlaygroundLayout>
    </div>
  );
};

PaperFoldTransitions.metadata = () => ({
  title: "Paper Fold Transitions | Playground",
  description: "Paper fold transitions.",
  ogTitle: "Paper Fold Transitions | Playground",
  ogDescription: "Paper fold transitions.",
  ogImage: `${SITE_URL}/og/paper-fold-transitions.png`,
  twitterTitle: "Paper Fold Transitions | Playground",
  twitterDescription: "Paper fold transitions.",
  twitterImage: `${SITE_URL}/og/paper-fold-transitions.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default PaperFoldTransitions;
