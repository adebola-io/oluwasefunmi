import type { RouteComponent } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { ImageWheelIcon } from "@/components/icons/image-wheel";
import { SITE_URL } from "@/constants";

const ImageWheel: RouteComponent = () => {
  return (
    <div class="w-dvw min-h-dvh bg-[#050505] text-white">
      <PlaygroundLayout title="Image Wheel">
        <div class="w-full min-h-[80dvh] flex items-center justify-center opacity-20">
          <ImageWheelIcon width="128" height="128" />
        </div>
      </PlaygroundLayout>
    </div>
  );
};

ImageWheel.metadata = () => ({
  title: "Image Wheel | Playground",
  description: "A specialized image carousel that rotates like a wheel.",
  ogTitle: "Image Wheel | Playground",
  ogDescription:
    "A specialized image carousel that rotates like a wheel.",
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "Image Wheel | Playground",
  twitterDescription:
    "A specialized image carousel that rotates like a wheel.",
  twitterImage: `${SITE_URL}/og/playground.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default ImageWheel;
