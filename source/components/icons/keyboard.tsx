import type { JSX } from "retend/jsx-runtime";

export const KeyboardIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
  >
    <title>Keyboard</title>
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      rx="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 10h2M10 10h2M14 10h2M18 10h0M6 14h2M10 14h8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
