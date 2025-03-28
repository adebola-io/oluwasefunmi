import type { JSX } from 'retend/jsx-runtime';

type DivProps = JSX.IntrinsicElements['div'];
export interface PlaneProps extends DivProps {
  'container:class'?: DivProps['class'];
  elevateOnHover?: JSX.ValueOrCell<boolean>;
  noise?: JSX.ValueOrCell<boolean>;
  animated?: JSX.ValueOrCell<boolean>;
  animationDelay?: JSX.ValueOrCell<string>;
  topLevel?: JSX.ValueOrCell<boolean>;
  bare?: JSX.ValueOrCell<boolean>;
}

export const Plane = (props: PlaneProps) => {
  const {
    class: className,
    'container:class': containerClass,
    children,
    elevateOnHover,
    topLevel,
    animated,
    animationDelay = '0ms',
    noise,
    bare,
    ...rest
  } = props;

  return (
    <div
      style={{ '--delay': animationDelay }}
      class={['plane', containerClass, { animated, topLevel, bare }]}
    >
      <div
        {...rest}
        class={[
          'plane-content',
          'min-w-full min-h-full bg-white border-[2.76px] rounded-lg border-stroke',
          {
            'not-[:active,:has(.plane:hover)]:hover:translate-y-[-2px] not-[:active,:has(.plane:hover)]:hover:translate-x-[2px] transition-transform':
              elevateOnHover,
            noise,
          },
          className,
        ]}
      >
        {children}
      </div>
    </div>
  );
};
