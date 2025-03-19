import type { JSX } from 'retend/jsx-dev-runtime';

type HeadingTextProps = JSX.IntrinsicElements['h1'];

export function HugeText(props: HeadingTextProps) {
  const { children, ...rest } = props;
  return (
    <h1
      {...rest}
      class={[
        'inline-block text-[clamp(20dvh,150px,70dvw)] leading-[1.4] text-heading',
        rest.class,
      ]}
    >
      {children}
    </h1>
  );
}

interface LargeTextProps extends HeadingTextProps {
  underline?: JSX.ValueOrCell<boolean>;
}
export function LargeText(props: LargeTextProps) {
  const { children, underline, ...rest } = props;
  return (
    <h1
      {...rest}
      class={[
        'inline-block font-extrabold text-[clamp(6.5dvh,40px,60dvw)] leading-[1.4] tracking-[-1px] text-heading',
        { underline },
        rest.class,
      ]}
    >
      {children}
    </h1>
  );
}

export function Emphasis(props: JSX.IntrinsicElements['i']) {
  const { children, ...rest } = props;
  return (
    <i {...rest} class={['text-emphasis', rest.class]}>
      {children}
    </i>
  );
}
