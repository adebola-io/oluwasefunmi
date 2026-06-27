import type { JSX } from "retend/jsx-runtime";

export const MovieCanvasIcon = (props: JSX.IntrinsicElements["svg"]) => {
  const { ...rest } = props;
  return (
    <svg
      aria-hidden="true"
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <title>Movie canvas</title>
      {/* Clapperboard body */}
      <rect x="2" y="8" width="20" height="13" rx="2" />
      {/* Clapperboard top strip */}
      <rect x="2" y="4.5" width="20" height="3.5" rx="1" />
      {/* Clapper sticks diagonal lines on top strip */}
      <line x1="7" y1="4.5" x2="7" y2="8" />
      <line x1="12" y1="4.5" x2="12" y2="8" />
      <line x1="17" y1="4.5" x2="17" y2="8" />
      {/* Play triangle in center of body */}
      <path d="M10 12.5l4 2.5-4 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
};
