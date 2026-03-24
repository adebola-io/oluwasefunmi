import { For } from "retend";
import type { Product } from "@/features/playground/types";

interface ProductSpecsProps {
  product: Product;
}

export const ProductSpecs = (props: ProductSpecsProps) => {
  const { product } = props;

  return (
    <div class="grid grid-cols-1 gap-6 md:gap-8">
      <div class="flex flex-col gap-3">
        <h4 class="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 m-0">
          Material
        </h4>
        <p class="text-sm md:text-base text-white/80 m-0 font-light">
          {product.material}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <h4 class="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 m-0">
          Available Sizes
        </h4>
        <div class="flex flex-wrap gap-2 md:gap-3">
          {For(product.sizes, (size) => (
            <span class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full text-sm text-white/60 bg-transparent transition-all duration-200 ease-out">
              {size}
            </span>
          ))}
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h4 class="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 m-0">
          Care Instructions
        </h4>
        <ul class="m-0 pl-4 text-white/60 text-sm md:text-base leading-relaxed font-light marker:text-white/20 space-y-1">
          {For(product.care, (instruction) => (
            <li>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
