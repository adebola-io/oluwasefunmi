import { Cell } from "retend";
import type { RouteComponent } from "retend/router";
import { Input } from "retend-utils/components";

import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { SITE_URL } from "@/constants";
import { CircularPath } from "@/components/ui/CircularPath";
import { Viewer } from "@/features/playground/components/Viewer/Viewer";

const ThreeDimensionalMarquee: RouteComponent = () => {
  const isControlsOpen = Cell.source(true);

  const text = Cell.source("PLAYING: A KNIGHT OF THE SEVEN KINGDOMS.");
  const color = Cell.source("#77a7d4");

  return (
    <div class="w-screen h-dvh bg-[#050505] text-white font-sans overflow-hidden relative touch-none select-none">
      <PlaygroundLayout title="3D Marquee" hint="3D Marquee Experiment">
        <div class="relative w-full h-full">
          <Viewer
            initialRx={33.5336}
            initialRy={-27.3133}
            class="animate-fade-in"
          >
            <CircularPath class="m-auto" style={{ color }} text={text} />
          </Viewer>

          <div class="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end items-end">
            <div
              class={[
                "pointer-events-auto w-[340px] max-w-[calc(100vw-3rem)] max-h-[70vh] bg-[#121212]/75 backdrop-blur-2xl border border-white/5 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right",
                {
                  "translate-y-5 scale-95 opacity-0 pointer-events-none":
                    Cell.derived(() => !isControlsOpen.get()),
                },
              ]}
            >
              <div class="p-6 overflow-y-auto max-h-[70vh]">
                <div class="mb-8 last:mb-0">
                  <h3 class="text-xs uppercase tracking-widest text-white/50 mb-4 font-semibold">
                    Content
                  </h3>
                  <div class="flex items-center gap-4 mb-3">
                    <Input
                      id="input-text"
                      type="text"
                      model={text}
                      class="w-full p-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>

                <div class="mb-8 last:mb-0">
                  <h3 class="text-xs uppercase tracking-widest text-white/50 mb-4 font-semibold">
                    Appearance
                  </h3>
                  <div class="flex items-center gap-4">
                    <input
                      id="input-color"
                      aria-label="Color"
                      type="color"
                      value={color.get()}
                      onInput={(e) =>
                        color.set((e.target as HTMLInputElement).value)
                      }
                      class="appearance-none border-none w-full h-10 rounded-lg bg-transparent cursor-pointer [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border [&::-webkit-color-swatch]:border-white/20 [&::-webkit-color-swatch]:rounded-lg"
                    />
                    <span style={{ color: color }}>{color}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PlaygroundLayout>
    </div>
  );
};

ThreeDimensionalMarquee.metadata = () => ({
  title: "3D Marquee | Playground",
  description: "Interactive, 3D marquee, made with pure CSS",
  ogTitle: "3D Marquee | Playground",
  ogDescription: "Interactive, 3D marquee, made with pure CSS",
  ogImage: `${SITE_URL}/og/marquee.png`,
  twitterTitle: "3D Marquee | Playground",
  twitterDescription: "Interactive, 3D marquee, made with pure CSS",
  twitterImage: `${SITE_URL}/og/marquee.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default ThreeDimensionalMarquee;
