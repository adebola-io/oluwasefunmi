import { type RouterLinkProps, useRouter } from 'retend/router';
import { Plane } from '@/components/plane';

export const LinkButton = (props: RouterLinkProps) => {
  const { Link } = useRouter();
  const { children, ...rest } = props;
  return (
    <Link {...rest}>
      <Plane
        class="py-1 px-5 max-w-fit grid place-items-center text-stroke w-fit"
        elevateOnHover
      >
        {children}
      </Plane>
    </Link>
  );
};
