import { Cell, For, If, Switch } from "retend";
import { useDerivedValue } from "retend-utils/hooks";
import { JSX } from "retend/jsx-runtime";

interface FadeSwitchProps<T extends PropertyKey>
  extends JSX.BaseContainerProps {
  value: T | Cell<T>;
  cases: Parameters<typeof Switch<T>>[1];
}

export function FadeSwitch<T extends PropertyKey>(props: FadeSwitchProps<T>) {
  const { value: valueProp, cases, ...rest } = props;
  const value = useDerivedValue(valueProp);
  const keys = Object.keys(cases) as T[];

  const children = For(keys, (key) => {
    const CaseFn = cases[key];
    const ref = Cell.source<HTMLElement | null>(null);
    const isNotSelected = Cell.derived(() => value.get() !== key);

    const settledValue = Cell.derivedAsync(async (get) => {
      const div = get(ref);
      if (!div) return get(value);
      await new Promise<void>((resolve) => queueMicrotask(resolve));
      const animations = div.getAnimations();
      const promises = animations.map((animation) => animation.finished);
      await Promise.allSettled(promises);
      return get(value);
    });

    const isVisible = Cell.derivedAsync(async (get) => {
      return key === get(value) || key === (await get(settledValue));
    });

    return (
      <div
        ref={ref}
        class={[
          "[grid-area:1/1] transition-[opacity,scale] duration-300",
          { "opacity-0 scale-80 pointer-events-none": isNotSelected },
        ]}
      >
        {If(isVisible, CaseFn)}
      </div>
    );
  });

  return (
    <div {...rest} class={["grid grid-cols-1 grid-rows-1", rest.class]}>
      {children}
    </div>
  );
}
