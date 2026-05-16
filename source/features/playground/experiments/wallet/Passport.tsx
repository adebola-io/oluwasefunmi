export function Passport() {
  return (
    <div
      class={[
        "border-4 w-[50%] aspect-square in-data-wallet:mt-[6%] in-data-wallet:rotate-5",
        "not-in-data-wallet:place-self-center",
      ]}
    >
      <img
        class="size-full object-cover"
        src="https://github.com/adebola-io.png"
        alt="Adebola's passport photo"
      />
    </div>
  );
}
