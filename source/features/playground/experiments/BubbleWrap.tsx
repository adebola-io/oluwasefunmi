import type { RouteComponent } from "retend/router";
import { SITE_URL } from "@/shared/constants";
import { PlaygroundLayout } from "../components/PlaygroundLayout";
import { InfiniteCanvas } from "@/features/playground/components/InfiniteCanvas/InfiniteCanvas";
import { InfiniteCanvasNode } from "../components/InfiniteCanvas/InfiniteCanvasNode";

const BubbleWrap: RouteComponent = () => {
  return (
    <PlaygroundLayout title="Bubble Wrap">
      <InfiniteCanvas class="fixed top-0 left-0 w-screen h-screen grid grid-cols-1 grid-rows-1">
        <InfiniteCanvasNode x={10} y={300}>
          Hello world.
        </InfiniteCanvasNode>
      </InfiniteCanvas>
    </PlaygroundLayout>
  );
};

BubbleWrap.metadata = () => ({
  title: "Bubble Wrap | Playground",
  description: "An infinite bubble-wrap canvas playground experiment.",
  ogTitle: "Bubble Wrap | Playground",
  ogDescription: "An infinite bubble-wrap canvas playground experiment.",
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "Bubble Wrap | Playground",
  twitterDescription: "An infinite bubble-wrap canvas playground experiment.",
  twitterImage: `${SITE_URL}/og/playground.png`,
});

export default BubbleWrap;
