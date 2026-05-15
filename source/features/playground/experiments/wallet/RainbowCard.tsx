import { createUnique } from "retend";
import { WalletCard } from "./WalletCard";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";

export const RainbowCard = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <WalletCard class="aspect-[1.75] w-full h-auto">
        <WalletCard.Front class="relative size-full overflow-hidden bg-[linear-gradient(to_right,#5aa878_0%,#e6a8cf_24%,#f4d765_50%,#e7652d_74%,#7888df_100%)]">
          <div class="absolute left-[16%] top-[56%] h-[21%] aspect-[1.22] -translate-y-1/2 rounded-[18%] border border-white/30 bg-white/18 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.28)] backdrop-blur-[1px]">
            <div class="grid size-full grid-cols-2 grid-rows-3 gap-[8%] p-[10%]">
              <div class="rounded-[18%] bg-white/28" />
              <div class="rounded-[18%] bg-white/28" />
              <div class="rounded-[18%] bg-white/28" />
              <div class="rounded-[18%] bg-white/28" />
              <div class="rounded-[18%] bg-white/28" />
              <div class="rounded-[18%] bg-white/28" />
            </div>
          </div>
        </WalletCard.Front>
      </WalletCard>
    </WalletSpotlightTransition>
  );
});
