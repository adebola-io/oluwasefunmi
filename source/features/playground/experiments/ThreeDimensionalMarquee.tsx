import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { CircularPath } from "@/components/ui/CircularPath";
import { Viewer } from "@/features/playground/components/Viewer/Viewer";

const ThreeDimensionalMarquee: RouteComponent = () => {
  return (
    <PlaygroundLayout title="3D Marquee" hint="3D Marquee Experiment">
      <Viewer initialRx={33.5336} initialRy={-27.3133}>
        <CircularPath
          class="m-auto text-[#75d4d2]"
          text="NOW SHOWING: AVENGERS DOOMSDAY. "
        />
      </Viewer>
    </PlaygroundLayout>
  );
};

ThreeDimensionalMarquee.metadata = () => ({
  title: "3D Marquee | Playground",
  description: "A 3D marquee effect.",
  ogTitle: "3D Marquee | Playground",
  ogDescription: "A 3D marquee effect.",
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "3D Marquee | Playground",
  twitterDescription: "A 3D marquee effect.",
  twitterImage: `${SITE_URL}/og/playground.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default ThreeDimensionalMarquee;
