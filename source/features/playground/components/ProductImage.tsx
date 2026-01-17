import { Cell, If } from "retend";
import { getProductImage } from "@/data/productImages";
import { getProductById } from "@/data/products";
import { createUniqueTransition } from "retend-utils/components";

interface ProductImageProps {
  productId: number;
  color?: string;
  class?: string;
}

export const ProductImage = createUniqueTransition<ProductImageProps>(
  (props) => {
    const productId = Cell.derived(() => props.get().productId);
    const className = Cell.derived(() => props.get().class);

    const product = getProductById(productId.get());
    if (!product) return null;

    const selectedColor = Cell.derived(() => {
      return props.get().color || product.colors[0];
    });

    const imageSrc = Cell.derived(() => {
      const color = selectedColor.get();
      return getProductImage(productId.get(), color);
    });

    const showImage = Cell.derived(() => !!imageSrc.get());

    const altText = Cell.derived(
      () => `${product.name} in ${selectedColor.get()}`,
    );

    return If(showImage, () => (
      <img
        src={imageSrc}
        alt={altText}
        class={[className, "w-full h-[85%] object-cover object-center"]}
      />
    ));
  },
  {
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDuration: "500ms",
  },
);
