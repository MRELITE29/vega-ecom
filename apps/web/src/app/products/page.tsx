import Link from "next/link";
import { ChevronRight, Heart, SlidersHorizontal } from "lucide-react";

import { HelmetVisual } from "@/components/commerce/helmet-visual";
import { CommerceShell } from "@/components/layout/commerce-shell";
import { Card } from "@/components/ui/card";
import { filterGroups, products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/order-utils";

export default function ProductsPage() {
  return (
    <CommerceShell activeKey="products" breadcrumb="Products Listing">
      <div className="space-y-6">
        <Card className="p-4">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>

            {Object.values(filterGroups).map((group, index) => (
              <select
                key={`${group[0]}-${index}`}
                className="rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-600 outline-none"
                defaultValue={group[0]}
              >
                {group.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ))}

            <select className="ml-auto rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-600 outline-none">
              <option>Sort By: Popular</option>
              <option>Price: Low to High</option>
              <option>Newest</option>
            </select>
          </div>
        </Card>

        <section className="space-y-4">
          <div className="px-1">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950">32 Products Found</h1>
            <p className="mt-1 text-sm text-neutral-500">
              Bulk-ready models curated for fast dealer ordering with carton-first procurement details.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      {product.sku}
                    </p>
                    <div className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      In Stock: {product.stockMasterBoxes} boxes
                    </div>
                  </div>
                  <div className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-500">
                    <Heart className="h-4 w-4" />
                  </div>
                </div>

                <HelmetVisual accent={product.accent} className="h-48" />

                <div className="mt-4 space-y-1">
                  <p className="font-semibold text-neutral-900">{product.name}</p>
                  <p className="text-sm text-neutral-500">{product.category} Helmet</p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-neutral-50 p-3 text-xs text-neutral-600">
                  <div>
                    <p className="uppercase tracking-[0.12em] text-neutral-400">MOQ</p>
                    <p className="mt-1 font-semibold text-neutral-900">{product.minimumBoxes} boxes</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.12em] text-neutral-400">Dispatch</p>
                    <p className="mt-1 font-semibold text-neutral-900">{product.leadTimeDays} days</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.12em] text-neutral-400">Units / box</p>
                    <p className="mt-1 font-semibold text-neutral-900">{product.unitsPerMasterBox}</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.12em] text-neutral-400">Color</p>
                    <p className="mt-1 font-semibold text-neutral-900">{product.color}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-sm text-neutral-500">Price / box</p>
                    <p className="text-lg font-bold text-[#e10600]">{formatCurrency(product.pricePerBox)}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900">
                    View details <ChevronRight className="h-4 w-4 text-[#e10600]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </CommerceShell>
  );
}
