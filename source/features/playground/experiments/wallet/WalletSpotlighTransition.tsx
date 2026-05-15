import { UniqueTransition } from "retend-utils/components";
import { JSX } from "retend/jsx-runtime";

interface WalletSpotlighTransitionProps {
  children: JSX.Children;
}

export function WalletSpotlightTransition(
  props: WalletSpotlighTransitionProps
) {
  const { children } = props;
  return (
    <UniqueTransition
      transitionDuration="400ms"
      transitionTimingFunction="var(--ease-spring)"
    >
      {children}
    </UniqueTransition>
  );
}
