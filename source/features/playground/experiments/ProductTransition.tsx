import { For, useSetupEffect } from "retend";
import type { RouteComponent } from "retend/router";
import { Outlet, useRouter } from "retend/router";
import { PlaygroundLayout } from "@/features/playground/components/PlaygroundLayout";
import { products } from "@/data/products";
import { ProductCard } from "@/features/playground/components/ProductCard";
import { PageTitle } from "@/components/layout/PageTitle";
import { SITE_URL } from "@/constants";

const ProductTransition: RouteComponent = () => {
  const router = useRouter();

  const handleSelectProduct = async (id: number) => {
    await router.navigate(`/playground/product-transitions/${id}`);
  };

  useSetupEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div class="w-full min-h-screen bg-linear-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <PlaygroundLayout title="Product Transition">
        <div class="w-full p-8 max-w-350 z-1 relative mt-10 mx-auto max-sm:p-4 max-sm:mt-19 grid grid-rows-[auto_1fr] gap-4">
          <div class="flex flex-col items-center gap-4 text-center mb-12">
            <PageTitle name="Products" />
            <p class="max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Explore our curated collection of premium apparel. Every
              interaction is designed to be as fluid as the fabrics themselves,
              featuring seamless layout transitions between the catalog and
              detailed views.
            </p>
          </div>
          <div class="columns-4 gap-5 max-[1200px]:columns-3 max-[900px]:columns-2 max-[500px]:columns-1">
            {For(products, (product) => (
              <ProductCard product={product} onSelect={handleSelectProduct} />
            ))}
          </div>
        </div>
      </PlaygroundLayout>

      <Outlet />
    </div>
  );
};

ProductTransition.metadata = () => ({
  title: "Product Transition | Playground",
  description: "A product transition animation playground.",
  ogTitle: "Product Transition | Playground",
  ogDescription: "A product transition animation playground.",
  ogImage: `${SITE_URL}/og/product-transitions.png`,
  twitterTitle: "Product Transition | Playground",
  twitterDescription: "A product transition animation playground.",
  twitterImage: `${SITE_URL}/og/product-transitions.png`,
  viewport: "width=device-width, initial-scale=1.0",
});

export default ProductTransition;
