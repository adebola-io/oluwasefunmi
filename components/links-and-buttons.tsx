import type { JSX } from 'retend/jsx-runtime';
import { type RouterLinkProps, Link } from 'retend/router';
import { Plane } from '@/components/plane';

interface LinkButtonProps extends RouterLinkProps {
  'container:class'?: JSX.IntrinsicElements['div']['class'];
  animated?: JSX.ValueOrCell<boolean>;
  animationDelay?: JSX.ValueOrCell<string>;
}

export const LinkButton = (props: LinkButtonProps) => {
  const {
    children,
    animated,
    animationDelay,
    'container:class': containerClass,
    ...rest
  } = props;

  return (
    <Link {...rest}>
      <Plane
        container:class={containerClass}
        class="py-1 px-5 max-w-fit grid place-items-center text-stroke w-fit"
        animated={animated}
        animationDelay={animationDelay}
        elevateOnHover
      >
        {children}
      </Plane>
    </Link>
  );
};
