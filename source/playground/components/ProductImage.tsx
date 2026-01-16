import { Cell, If } from "retend";
import { useRouteQuery } from "retend/router";
import { getProductImage } from "@/utils/productImages";
import { getProductById } from "@/data/products";
import { UniqueTransition } from "retend-utils/components";

interface ProductImageProps {
  productId: number;
  /** Optional color override. If not provided, reads from URL query param. */
  color?: string;
  /** Optional CSS class for the image */
  className?: string;
}

export const ProductImageContent = (props: ProductImageProps) => {
  const { productId, color: colorOverride, className } = props;
  const query = useRouteQuery();

  // Get product to access available colors
  const product = getProductById(productId);
  if (!product) return null;

  // Get selected color - use override if provided, otherwise read from URL
  const selectedColorQuery = query.get("color");
  const selectedColor = Cell.derived(() => {
    // If color override is provided, use it directly
    if (colorOverride) {
      return colorOverride;
    }
    // Otherwise read from URL
    const colorFromUrl = selectedColorQuery.get();
    if (colorFromUrl && product.colors.includes(colorFromUrl)) {
      return colorFromUrl;
    }
    return product.colors[0];
  });

  // Derived cell for the current image URL
  const imageSrc = Cell.derived(() => {
    const color = selectedColor.get();
    return getProductImage(productId, color);
  });

  // Whether to show the image
  const showImage = Cell.derived(() => !!imageSrc.get());

  // Derived alt text
  const altText = Cell.derived(
    () => `${product.name} in ${selectedColor.get()}`,
  );

  const imageClass = className || "w-full h-[85%] object-cover object-center";

  return If(showImage, () => (
    <img src={imageSrc} alt={altText} class={imageClass} />
  ));
};

export const ProductImage = (props: ProductImageProps) => {
  return (
    <UniqueTransition
      name={`product-image-${props.productId}`}
      transitionTimingFunction="cubic-bezier(0.16, 1, 0.3, 1)"
      transitionDuration="500ms"
    >
      {() => <ProductImageContent {...props} />}
    </UniqueTransition>
  );
};
