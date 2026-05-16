import { createUnique } from "retend";

export const Passport = createUnique(() => {
  return (
    <div
      class={[
        "@container border-[1cqw] h-[45%] w-auto aspect-square",
        "not-in-data-wallet:place-self-center",
      ]}
    >
      <img
        src="https://github.com/adebola-io.png"
        alt="Adebola's passport photo"
      />
    </div>
  );
});
