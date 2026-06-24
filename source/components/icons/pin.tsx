import type { JSX } from "retend/jsx-runtime";

export const PinIcon = (props: JSX.IntrinsicElements["svg"]) => {
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
      <title>Bookmarks</title>
      <path
        d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
