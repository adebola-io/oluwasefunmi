import { createUnique } from "retend";
import { WalletSpotlightTransition } from "./WalletSpotlighTransition";

export const Passport = createUnique(() => {
  return (
    <WalletSpotlightTransition>
      <div
        class={[
          "@container border-[1cqw] h-[45%] w-auto aspect-square",
          "in-data-wallet:rotate-[4deg] not-in-data-wallet:rotate-0 hover:rotate-0",
          "not-in-data-wallet:place-self-center",
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
