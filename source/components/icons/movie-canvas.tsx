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
    >
      <title>Movie canvas</title>
      <rect x="3.5" y="4" width="5" height="7" rx="1" />
      <rect x="10" y="3" width="5" height="7" rx="1" />
      <rect x="16.5" y="4" width="4" height="6" rx="1" />
      <rect x="4.5" y="13.5" width="5" height="6.5" rx="1" />
      <rect x="11" y="12.5" width="5" height="7.5" rx="1" />
      <path d="m18.5 18.5 2 2" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="17" cy="17" r="2.25" />
    </svg>
  );
};
