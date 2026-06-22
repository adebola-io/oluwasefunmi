import type { JSX } from "retend/jsx-runtime";

export const WalletCardsIcon = (props: JSX.IntrinsicElements["svg"]) => {
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
      <title>Wallet Cards</title>
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
      <rect x="6" y="8" width="14" height="12" rx="2" />
      <path d="M6 12h14" />
      <path d="M10 16h2" />
    </svg>
  );
};
