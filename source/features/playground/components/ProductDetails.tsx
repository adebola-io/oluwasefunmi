import { Cell, For, useSetupEffect } from "retend";
import { useRouteQuery } from "retend/router";
import { colorMap, type Product } from "@/data/products";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import styles from "./ProductDetails.module.css";

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetails = (props: ProductDetailsProps) => {
  const { product, onClose } = props;
  const query = useRouteQuery();

  // Get selected color from URL, default to first color
  const selectedColorQuery = query.get("color");
  const selectedColor = Cell.derived(() => {
    const colorFromUrl = selectedColorQuery.get();
    if (colorFromUrl && product.colors.includes(colorFromUrl)) {
      return colorFromUrl;
    }
    return product.colors[0];
  });

  const handleColorClick = (color: string) => {
    query.set("color", color);
  };

  useSetupEffect(() => {
    return () => {
      setTimeout(() => {
        query.delete("color");
      });
    };
  });

  return (
    <>
      <div
        class={[
          styles.productDetailsView,
          styles.mobileScrollContainer,
          "w-full h-full overflow-y-auto md:grid md:grid-cols-[45%_55%] md:overflow-hidden bg-[#0c0c0c] md:bg-transparent md:w-[min(90vw,900px)] md:h-[min(85vh,800px)] md:max-h-[90vh]",
        ]}
      >
        <button
          type="button"
          class="fixed top-4 right-4 md:absolute md:top-5 md:right-5 w-10 h-10 border-none rounded-full bg-black/20 md:bg-white/5 text-white/90 text-xl leading-none cursor-pointer z-200 flex items-center justify-center transition-all duration-200 ease-out hover:bg-black/40 md:hover:bg-white/15 hover:text-white backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>

        {/* Image Container */}
        <div class="sticky top-0 h-[60vh] w-full shrink-0 md:relative md:h-full md:w-auto z-0 md:z-auto bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
          <div
            class={[
              styles.mobileScrollImage,
              "max-sm:*:h-full! w-full h-full flex items-center justify-center",
            ]}
          >
            <ProductImage
              productId={product.id}
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        {/* Details Container */}
        <div class="relative has-data-transitioning:z-99 z-10 bg-[#0c0c0c] p-6 min-h-[50vh] flex flex-col gap-6 md:h-full md:p-12 md:z-auto">
          {/* Header Section */}
          <div class="flex flex-col gap-2">
            <ProductInfo productId={product.id} />
          </div>

          <div class="flex flex-col gap-3">
            <h4 class="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 m-0">
              Colors
            </h4>
            <div class="flex flex-wrap gap-2 md:gap-3">
              {For(product.colors, (color) => {
                const isSelected = Cell.derived(
                  () => selectedColor.get() === color
                );
                const optionClasses = Cell.derived(() =>
                  isSelected.get()
                    ? "py-2 px-4 rounded-full text-sm text-white/90 bg-white/15 border border-white/40 transition-all duration-200 ease-out cursor-pointer flex items-center gap-2"
                    : "py-2 px-4 rounded-full text-sm text-white/70 bg-white/5 border border-transparent transition-all duration-200 ease-out cursor-pointer hover:bg-white/10 hover:border-white/10 flex items-center gap-2"
                );

                return (
                  <button
                    type="button"
                    class={optionClasses}
                    onClick={() => handleColorClick(color)}
                  >
                    <span
                      class="inline-block w-3 h-3 rounded-full shrink-0"
                      style={{
                        backgroundColor: colorMap[color] || color,
                        border:
                          color === "Orange" ||
                          color === "Ivory" ||
                          color === "Cream"
                            ? "1px solid rgba(255,255,255,0.3)"
                            : "none",
                      }}
                    />
                    {color}
                  </button>
                );
              })}
            </div>
          </div>

          <p class="text-base leading-relaxed text-white/70 font-light m-0 w-full md:max-w-[90%] text-pretty">
            {product.description}
          </p>

          {/* Info Sections Grid */}
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
                  <span class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full text-sm text-white/60 bg-transparent transition-all duration-200 ease-out cursor-pointer hover:border-white hover:text-white">
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
          {/* Extra padding at bottom for mobile scrolling */}
          <div class="h-10 md:h-0 shrink-0" />
        </div>
      </div>
    </>
  );
};
