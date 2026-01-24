import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { Viewer } from "@/features/playground/components/Viewer/Viewer";
import Keyboard from "@/features/playground/components/Keyboard";

const CssKeyboard = () => {
  return (
    <div class="w-screen h-dvh bg-[#050505] text-white font-sans overflow-hidden relative touch-none select-none">
      <PlaygroundLayout title="CSS Keyboard">
        <div class="relative w-full h-full flex justify-center">
          <Viewer class="animate-fade-in">
            <Keyboard />
          </Viewer>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

CssKeyboard.metadata = () => ({
  title: "CSS Keyboard | Playground",
  description: "A 3D keyboard implementation using pure CSS transformations.",
  ogTitle: "CSS Keyboard | Playground",
  ogDescription: "A 3D keyboard implementation using pure CSS transformations.",
  ogImage: `${SITE_URL}/og/playground.png`,
  twitterTitle: "CSS Keyboard | Playground",
  twitterDescription:
    "A 3D keyboard implementation using pure CSS transformations.",
  twitterImage: `${SITE_URL}/og/playground.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default CssKeyboard;
