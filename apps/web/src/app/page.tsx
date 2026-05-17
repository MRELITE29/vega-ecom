import Link from "next/link";
import { BadgePercent, ChevronRight, Package, RotateCcw, Truck } from "lucide-react";

import { HelmetVisual } from "@/components/commerce/helmet-visual";
import { VegaMark } from "@/components/commerce/vega-mark";
import { CommerceShell } from "@/components/layout/commerce-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categoryCards, dashboardMetrics, favoriteOrderTemplates, products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/order-utils";

const metricIcons = {
  Package,
  BadgePercent,
  Truck,
  RotateCcw,
};

export default function Home() {
  const heroProduct = products[0];

  return (
    <CommerceShell activeKey="dashboard" breadcrumb="Home / Dashboard">
      <div className="space-y-6">
        <Card className="overflow-hidden p-0">
          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1fr_420px] lg:px-8">
            <div className="space-y-5">
              <VegaMark />
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Bulk ordering workspace
                </p>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
                  Faster procurement for distributors, dealers, and repeat buyers.
                </h1>
                <p className="max-w-xl text-base leading-7 text-neutral-600">
                  Place large-volume orders with carton-level pricing, stock-aware selection, and
                  repeatable procurement flows designed for operational teams.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/products">Browse Products</Button>
                <Button href="/cart" variant="secondary">
                  Open Order Summary
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <HelmetVisual accent={heroProduct.accent} className="h-[320px]" />
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => {
            const Icon = metricIcons[metric.icon as keyof typeof metricIcons];

            return (
              <Card key={metric.label} className="flex items-start gap-4 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#e10600]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{metric.label}</p>
                  <p className="text-sm text-neutral-700">{metric.value}</p>
                  <p className="mt-1 text-xs text-neutral-500">{metric.note}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">Popular Categories</h2>
              <p className="text-sm text-neutral-500">Structured around the way dealers replenish inventory.</p>
            </div>
            <Link href="/products" className="text-sm font-semibold text-[#e10600]">
              View all
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {categoryCards.map((category) => (
              <Link
                href="/products"
                key={category.label}
                className="rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300"
              >
                <div className={`h-12 rounded-xl bg-gradient-to-r ${category.accent}`} />
                <p className="mt-3 font-semibold text-neutral-900">{category.label}</p>
                <p className="text-sm text-neutral-500">{category.count}</p>
              </Link>
            ))}
          </div>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900">Fast-Moving Products</h2>
                <p className="text-sm text-neutral-500">Core lines with reliable volume movement.</p>
              </div>
              <Link href="/products" className="text-sm font-semibold text-[#e10600]">
                View all
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="rounded-2xl border border-neutral-200 p-4 transition hover:border-neutral-300"
                >
                  <HelmetVisual accent={product.accent} className="h-40" />
                  <p className="mt-4 font-semibold text-neutral-900">{product.name}</p>
                  <p className="text-sm text-neutral-500">{product.category} Helmet</p>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="font-semibold text-[#e10600]">{formatCurrency(product.pricePerBox)} / box</span>
                    <span className="text-neutral-500">{product.stockMasterBoxes} boxes ready</span>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          <Card className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900">Saved Reorders</h2>
              <p className="text-sm text-neutral-500">Repeatable templates for frequent procurement cycles.</p>
            </div>

            <div className="space-y-3">
              {favoriteOrderTemplates.map((template) => (
                <div key={template.id} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="font-semibold text-neutral-900">{template.name}</p>
                  <p className="text-sm text-neutral-500">{template.buyer}</p>
                  <div className="mt-3 space-y-2 text-sm text-neutral-700">
                    {template.lines.map((line) => (
                      <div key={`${template.id}-${line.sku}`} className="flex items-center justify-between">
                        <span>{line.sku}</span>
                        <span>{line.boxes} boxes</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/cart"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e10600]"
                  >
                    Reorder now <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </CommerceShell>
  );
}
