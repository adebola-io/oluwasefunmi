import type { JSX } from "retend/jsx-runtime";

export const SettingsIcon = (props: JSX.IntrinsicElements["svg"]) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    {...props}
  >
    <title>Toggle Controls</title>
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M12 2v2M12 22v-2M2 12h2M22 12h-2" />
  </svg>
);
