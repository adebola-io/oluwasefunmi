import { formatPrice } from "@/utils";
import { getProductById } from "@/data/products";

interface ProductInfoProps {
  productId: number;
}

export const ProductInfo = (props: ProductInfoProps) => {
  const { productId } = props;
  const product = getProductById(productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <h3 class="product-name text-base text-left font-medium text-[#f0f0f0] m-0 tracking-[0.01em] leading-[1.3] [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
        {product.name}
      </h3>
      <div class="product-price-container flex items-center gap-3">
        <span class="product-price text-[1.1rem] font-semibold text-white tracking-[-0.01em] [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && (
          <span class="text-[0.9rem] text-white/60 line-through font-normal">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>
    </>
  );
};
