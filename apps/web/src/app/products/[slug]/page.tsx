import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { ProductDetailExperience } from "@/components/commerce/product-detail-experience";
import { CommerceShell } from "@/components/layout/commerce-shell";
import { getProductBySlug, products } from "@/lib/mock-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <CommerceShell activeKey="products" breadcrumb="Product Detail & Add to Cart">
      <div className="space-y-4">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500">
          <ChevronLeft className="h-4 w-4" />
          Back to Products
        </Link>
        <ProductDetailExperience product={product} />
      </div>
    </CommerceShell>
  );
}
