import { products } from "../../../data/products";
import ProductDetailContent from "./ProductDetailContent";
import ProductNotFound from "./ProductNotFound";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <ProductNotFound />;
  }

  return <ProductDetailContent product={product} />;
}
