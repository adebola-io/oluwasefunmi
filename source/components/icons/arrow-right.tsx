import type { JSX } from "retend/jsx-runtime";

export const ArrowRightIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    {...props}
  >
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
