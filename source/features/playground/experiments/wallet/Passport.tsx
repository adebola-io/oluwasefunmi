import { createUnique } from "retend";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";

export const Passport = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <div
        class={[
          "@container border-[1cqw] h-1/2 w-auto aspect-square",
          "not-[:is([data-pulled],.group:hover)_*]:rotate-[4deg]",
          "transition-transform duration-300",
        ]}
      >
        <img
          src="https://github.com/adebola-io.png"
          alt="Adebola's passport photo"
        />
      </div>
    </WalletSpotlightTransition>
  );
});
