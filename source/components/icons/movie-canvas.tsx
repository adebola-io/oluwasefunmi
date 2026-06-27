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
      <rect x="6.5" y="3.5" width="11" height="17" rx="1.5" />
      <path d="M9 7h6" stroke-linecap="round" />
      <path d="M9 15h6" stroke-linecap="round" />
      <path d="M9 17.5h4" stroke-linecap="round" />
      <path d="M9 10.5h6v2H9z" />
    </svg>
  );
};
