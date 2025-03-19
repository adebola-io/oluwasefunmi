import type { JSX } from 'retend/jsx-runtime';
import { Plane } from '@/components/plane';

type DivProps = JSX.IntrinsicElements['div'];

interface ShiftingLayoutProps extends DivProps {
  'container:class'?: JSX.IntrinsicElements['div']['class'];
  animated?: JSX.ValueOrCell<boolean>;
  animationDelay?: JSX.ValueOrCell<string>;
}

export function ShiftingLayout(props: ShiftingLayoutProps) {
  const {
    animated,
    animationDelay,
    'container:class': containerClass,
    ...rest
  } = props;

  return (
    <Plane
      {...rest}
      animated={animated}
      animationDelay={animationDelay}
      class="background grid grid-cols-6 grid-rows-6 p-4 gap-2"
      container:class={containerClass}
    >
      {/* Row 1 */}
      <Plane noise container:class="col-span-6" class="[div]:bg-solid" />
      {/* Row 2 */}
      <Plane
        noise
        container:class="col-span-6 row-span-2"
        class="[div]:bg-solid"
      />
      {/* Row 3 */}
      <Plane
        noise
        container:class="col-span-2 row-span-2"
        class="[div]:bg-solid"
      />
      <Plane
        noise
        container:class="col-span-2 row-span-2"
        class="[div]:bg-solid"
      />
      <Plane
        noise
        container:class="col-span-2 row-span-2"
        class="[div]:bg-solid"
      />
      {/* Row 4 */}
      <Plane
        noise
        container:class="col-span-3 row-span-2"
        class="[div]:bg-solid"
      />
      <Plane
        noise
        container:class="col-span-3 row-span-2"
        class="[div]:bg-solid"
      />
    </Plane>
  );
}
