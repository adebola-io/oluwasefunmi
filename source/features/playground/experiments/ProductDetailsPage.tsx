import type { RouteComponent } from "retend/router";
import { useCurrentRoute, useRouter } from "retend/router";
import { Cell, If } from "retend";
import { Modal } from "@/components/ui/Modal";
import { ProductDetails } from "@/features/playground/components/ProductDetails";
import { getProductById, type Product } from "@/data/products";
import { SITE_URL } from "@/constants";

const ProductDetailsPage: RouteComponent = () => {
  const currentRoute = useCurrentRoute();
  const router = useRouter();

  const productId = Cell.derived(() => {
    const params = currentRoute.get().params;
    return params.get("productId");
  });

  const selectedProduct = Cell.derived(() => {
    const id = productId.get();
    if (!id) return null;
    return getProductById(Number.parseInt(id, 10));
  });

  const isModalOpen = Cell.derived(() => selectedProduct.get() !== null);

  const handleCloseModal = async () => {
    await router.navigate("/playground/product-transition");
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} fillScreenOnMobile>
      {If(selectedProduct, (product: Product) => (
        <ProductDetails product={product} onClose={handleCloseModal} />
      ))}
    </Modal>
  );
};

ProductDetailsPage.metadata = () => ({
  title: "Product Details | Playground",
  description: "View product details.",
  ogTitle: "Product Details | Playground",
  ogDescription: "View product details.",
  ogImage: `${SITE_URL}/og/product-transitions.png`,
  twitterTitle: "Product Details | Playground",
  twitterDescription: "View product details.",
  twitterImage: `${SITE_URL}/og/product-transitions.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default ProductDetailsPage;
