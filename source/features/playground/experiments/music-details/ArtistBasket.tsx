export function ArtistBasket() {
  return (
    <div
      class={[
        "[--depth:150px] [--width:200px] [--height:200px] ",
        "[--half-depth:calc(var(--depth)/2)] [--half-width:calc(var(--width)/2)] [--half-height:calc(var(--height)/2)]",
        "transform-3d grid place-items-center grid-cols-1 h-(--height) w-(--width) grid-rows-1 text-black pointer-events-none",
        "*:bg-red-600 *:[grid-area:1/1] *:outline-2",
      ]}
      style={{ "--depth": "150px" }}
    >
      <div
        data-back
        class={["w-full h-full", "-translate-z-(--half-depth) rotate-y-180"]}
      >
        back
      </div>
      <div
        data-left
        class={[
          "w-(--depth) h-(--height)",
          "-rotate-y-90 -translate-x-(--half-width)",
        ]}
      >
        left
      </div>
      <div
        data-right
        class={[
          "w-(--depth) h-(--height)",
          "rotate-y-90 translate-x-(--half-width)",
        ]}
      >
        right
      </div>
      <div
        data-bottom
        class="-rotate-x-90 w-(--width) h-(--depth) translate-y-(--half-height)"
      >
        bottom
      </div>
      <div data-front class={["w-full h-full", "translate-z-(--half-depth)"]}>
        front
      </div>
    </div>
  );
}
