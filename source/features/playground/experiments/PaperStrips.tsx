import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/shared/constants";
import { Paper } from "./paper/Paper";
import { Viewer } from "../components/Viewer/Viewer";

const PaperStrips: RouteComponent = () => {
  return (
    <div class="w-dvw h-dvh">
      <PlaygroundLayout title="Paper Strips">
        <div class="w-screen h-screen grid place-items-center overflow-hidden">
          <Viewer>
            <Paper>
              <Paper.Front class="grid place-content-center">
                <div class="font-extrabold text-[500%]">HELLO</div>
              </Paper.Front>
              <Paper.Back class="grid place-content-center">
                <div class="font-extrabold text-[500%]">WORLD</div>
              </Paper.Back>
            </Paper>
          </Viewer>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

PaperStrips.metadata = () => ({
  title: "Paper Strips | Playground",
  description: "Paper fold transitions.",
  ogTitle: "Paper Strips | Playground",
  ogDescription: "Paper fold transitions.",
  ogImage: `${SITE_URL}/og/paper-strips.png`,
  twitterTitle: "Paper Strips | Playground",
  twitterDescription: "Paper fold transitions.",
  twitterImage: `${SITE_URL}/og/paper-strips.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default PaperStrips;
