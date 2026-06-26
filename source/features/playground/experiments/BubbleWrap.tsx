import type { RouteComponent } from "retend/router";
import { SITE_URL } from "@/shared/constants";
import { PlaygroundLayout } from "../components/PlaygroundLayout";
import { InfiniteCanvas } from "@/features/playground/components/InfiniteCanvas/InfiniteCanvas";
import { InfiniteRepeatedPattern } from "../components/InfiniteCanvas/InfiniteRepeatedPattern";
import { Cell } from "retend";

interface ColorProps {
  row: Cell<number>;
  col: Cell<number>;
}

const BubbleWrap: RouteComponent = () => {
  const Color = (props: ColorProps) => {
    const { row, col } = props;
    const rowDivisibleBy2 = Cell.derived(() => {
      return row.get() % 3 === 0;
    });
    const colDivisibleby3 = Cell.derived(() => {
      return col.get() % 3 === 0;
    });
    const color = Cell.derived(() => {
      if (rowDivisibleBy2.get() && !colDivisibleby3.get()) return "red";
      if (!rowDivisibleBy2.get() && colDivisibleby3.get()) return "green";
      return "blue";
    });

    return <div class="w-full h-full" style={{ backgroundColor: color }}></div>;
  };

  return (
    <PlaygroundLayout title="Bubble Wrap">
      <InfiniteCanvas class="fixed top-0 left-0 w-screen h-screen grid grid-cols-1 grid-rows-1">
        <InfiniteRepeatedPattern density={5} Template={Color} />
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
