import { Cell, For, If, useSetupEffect } from "retend";
import type { RouteComponent } from "retend/router";
import { useRouteQuery } from "retend/router";
import { PlaygroundLayout } from "./PlaygroundLayout";
import { Modal } from "@/components/Modal";
import { products, getProductById, type Product } from "@/data/products";
import { ProductCard } from "./components/ProductCard";
import { ProductDetails } from "./components/ProductDetails";

const ProductTransition: RouteComponent = () => {
  const query = useRouteQuery();
  const selectedProductId = query.get("product");

  const isModalOpen = Cell.derived(() => selectedProductId.get() !== null);

  const selectedProduct = Cell.derived(() => {
    const id = selectedProductId.get();
    if (!id) return null;
    return getProductById(Number.parseInt(id, 10));
  });

  const handleSelectProduct = async (id: number) => {
    await query.set("product", String(id));
  };

  const handleCloseModal = async () => {
    await query.delete("product");
  };

  useSetupEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div class="w-full min-h-screen bg-linear-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <PlaygroundLayout
        title="Product Transition"
        hint="Click a product to view details"
      >
        <div class="w-full p-8 max-w-350 z-1 relative mt-10 mx-auto max-sm:p-4 grid grid-rows-[auto_1fr] gap-4">
          <h1 class="md:text-5xl text-3xl pt-5">Products</h1>
          <div class="columns-4 gap-5 max-[1200px]:columns-3 max-[900px]:columns-2 max-[500px]:columns-1">
            {For(products, (product) => (
              <ProductCard product={product} onSelect={handleSelectProduct} />
            ))}
          </div>
        </div>
      </PlaygroundLayout>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} fillScreenOnMobile>
        {If(selectedProduct, (product: Product) => (
          <ProductDetails product={product} onClose={handleCloseModal} />
        ))}
      </Modal>
    </div>
  );
};

ProductTransition.metadata = () => ({
  title: "Product Transition | Playground",
  description: "A product transition animation playground.",
  viewport: "width=device-width, initial-scale=1.0",
});

export default ProductTransition;
