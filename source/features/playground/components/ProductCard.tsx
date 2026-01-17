import type { Product } from "@/data/products";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

interface ProductCardProps {
  product: Product;
  onSelect: (id: number) => void;
}

const heightClasses = {
  short: "aspect-square",
  medium: "aspect-[3/4]",
  tall: "aspect-[2/3]",
};

export const ProductCard = (props: ProductCardProps) => {
  const { product, onSelect } = props;
  const heightClass = heightClasses[product.height];

  const handleClick = () => {
    onSelect(product.id);
  };

  return (
    <article
      class={[
        heightClass,
        "break-inside-avoid mb-5 relative rounded-2xl transition-[border-color] duration-300 ease-out isolate border border-white/20 hover:border-white/50 ",
      ]}
    >
      <button
        type="button"
        class="w-full h-full flex flex-col bg-transparent border-none rounded-2xl p-0 cursor-pointer text-inherit font-inherit"
        onClick={handleClick}
      >
        <div class="grid grid-rows-[1fr] items-center w-full flex-1 bg-[#313030] relative rounded-2xl">
          <ProductImage
            id={`product-image-${product.id}`}
            productId={product.id}
            color={product.colors[0]}
            class="w-full h-full object-contain object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div class="absolute bottom-0 p-5 flex flex-col gap-1 rounded-b-2xl w-full">
          <ProductInfo productId={product.id} />
        </div>
      </button>
    </article>
  );
};
