import type { JSX } from "retend/jsx-runtime";

export const BookIcon = (props: JSX.IntrinsicElements["svg"]) => {
  const { ...rest } = props;
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <title>floating-books</title>
      <path
        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M8 7h8" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 11h6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
