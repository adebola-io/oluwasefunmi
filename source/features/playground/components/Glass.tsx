import { For } from "retend";
import classes from "./Glass.module.css";

export function Glass() {
  return (
    <div
      class={[
        "grid place-items-center transform-3d",
        "*:[grid-area:1/1] *:h-full *:w-full",
        "[--color:#2b1b13] [--secondary-color:#121010]",
      ]}
      style={{
        width: "500px",
        height: "200px",
      }}
    >
      <div class={[classes.glass, classes.glassFront]} />
      {For(Array.from({ length: 6 }), (_, index) => (
        <div
          class={[classes.glass, classes.glassBehind]}
          style={{
            "--index": index,
            transform:
              "translateZ(calc(-2px * (var(--index) + 1))) scale(0.98)",
          }}
        />
      ))}
      <div class={classes.lens} />
      <div class={classes.hinges} />

      <div class={[classes.templeRight, classes.templeOutside]} />
      {For(Array.from({ length: 10 }), (_, index) => (
        <div
          class={[classes.templeRight, classes.templeRightBehind]}
          style={{
            "--index": index,
            translate: "calc(-1px * (var(--index) + 1)) 0 -1px",
          }}
        />
      ))}
      <div class={[classes.templeLeft, classes.templeOutside]} />
      {For(Array.from({ length: 10 }), (_, index) => (
        <div
          class={[classes.templeLeft, classes.templeRightBehind]}
          style={{
            "--index": index,
            translate: "calc(1px * (var(--index) + 1)) 0 -1px",
          }}
        />
      ))}
    </div>
  );
}
