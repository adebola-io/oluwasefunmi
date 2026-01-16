import { Cell, If } from "retend";
import { useRouteQuery } from "retend/router";
import { getProductImage } from "@/utils/productImages";
import { getProductById } from "@/data/products";
import { UniqueTransition } from "retend-utils/components";

interface ProductImageProps {
  productId: number;
  color?: string;
  className?: string;
}

export const ProductImageContent = (props: ProductImageProps) => {
  const { productId, color: colorOverride, className } = props;
  const query = useRouteQuery();

  const product = getProductById(productId);
  if (!product) return null;

  const selectedColorQuery = query.get("color");
  const selectedColor = Cell.derived(() => {
    if (colorOverride) {
      return colorOverride;
    }
    const colorFromUrl = selectedColorQuery.get();
    if (colorFromUrl && product.colors.includes(colorFromUrl)) {
      return colorFromUrl;
    }
    return product.colors[0];
  });

  const imageSrc = Cell.derived(() => {
    const color = selectedColor.get();
    return getProductImage(productId, color);
  });

  const showImage = Cell.derived(() => !!imageSrc.get());

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
