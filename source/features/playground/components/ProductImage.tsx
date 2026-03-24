import { Cell, If, createUnique } from "retend";
import { getProductImage } from "@/features/playground/data/productImages";
import { getProductById } from "@/features/playground/data/products";
import { UniqueTransition } from "retend-utils/components";
import type { JSX } from "retend/jsx-runtime";
import { useDerivedValue } from "retend-utils/hooks";

interface ProductImageProps {
  productId: number;
  color?: JSX.ValueOrCell<string>;
  class?: string;
}

export const ProductImage = createUnique<ProductImageProps>((props) => {
  const productId = Cell.derived(() => props.get().productId);
  const className = Cell.derived(() => props.get().class);

  const product = getProductById(productId.get());
  if (!product) return null;
  const selectedColor = Cell.derived(() => {
    return useDerivedValue(props.get().color)?.get() || product.colors[0];
  });

  const imageSrc = Cell.derived(() => {
    return getProductImage(productId.get(), selectedColor.get());
  });

  const showImage = Cell.derived(() => !!imageSrc.get());

  const altText = Cell.derived(
    () => `${product.name} in ${selectedColor.get()}`
  );

  return (
    <UniqueTransition
      transitionTimingFunction="cubic-bezier(0.16, 1, 0.3, 1)"
      transitionDuration="550ms"
    >
      {If(showImage, () => (
        <img
          src={imageSrc}
          alt={altText}
          class={[className, "w-full h-[85%] object-cover object-center"]}
        />
      ))}
    </UniqueTransition>
  );
});
