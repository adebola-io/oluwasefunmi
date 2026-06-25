import type { JSX } from "retend/jsx-runtime";

export const BubbleWrapIcon = (props: JSX.IntrinsicElements["svg"]) => {
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
      <title>Bubble wrap</title>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 8.5c1.4-1.4 3.5-2 5.5-1.4" stroke-linecap="round" />
      <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
};
