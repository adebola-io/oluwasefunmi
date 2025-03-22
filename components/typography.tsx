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
        'inline-block font-extrabold text-[clamp(6.5dvh,40px,50dvw)] max-md:text-[clamp(3dvh,35px,40dvw)] leading-[1.4] tracking-[-1px] text-heading',
        { underline },
        rest.class,
      ]}
    >
      {children}
    </h1>
  );
}

export function NoteHeadingText(props: HeadingTextProps) {
  const { children, ...rest } = props;
  return (
    <LargeText {...rest} class={['w-full underline text-left', rest.class]}>
      <span class="max-w-[500px]">{children}</span>
    </LargeText>
  );
}

export function ItemNameText(props: HeadingTextProps) {
  const { children, ...rest } = props;
  return (
    <h2
      {...rest}
      class={[
        'inline-block font-bold text-[clamp(3dvh,30px,50dvw)] leading-[1.4]',
        rest.class,
      ]}
    >
      {children}
    </h2>
  );
}

export function SmallText(props: JSX.IntrinsicElements['span']) {
  const { children, ...rest } = props;
  return (
    <span
      {...rest}
      class={['inline-block text-[clamp(2dvh,11pt,70dvw)]', rest.class]}
    >
      {children}
    </span>
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
