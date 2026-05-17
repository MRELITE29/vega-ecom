"use client";

import { useState } from "react";
import { ShieldCheck, Star, Truck } from "lucide-react";

import { HelmetVisual } from "@/components/commerce/helmet-visual";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency, formatInteger } from "@/lib/order-utils";
import { useBulkCartStore } from "@/store/cart-store";
import { Product } from "@/types/domain";

export function ProductDetailExperience({ product }: { product: Product }) {
  const [boxes, setBoxes] = useState(product.minimumBoxes);
  const addBoxes = useBulkCartStore((state) => state.addBoxes);
  const totalUnits = boxes * product.unitsPerMasterBox;
  const totalPrice = boxes * product.pricePerBox;

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <Card className="space-y-4 p-4">
        <div className="grid gap-4 md:grid-cols-[88px_minmax(0,1fr)]">
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200 bg-white p-2"
              >
                <HelmetVisual accent={product.accent} className="h-16" />
              </div>
            ))}
          </div>
          <HelmetVisual accent={product.accent} className="h-[420px]" />
        </div>
      </Card>

      <Card className="space-y-5">
        <div>
          <p className="text-sm text-neutral-500">{product.category} Helmet</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-neutral-950">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
            <Star className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
            <span>{product.rating}</span>
            <span>({product.reviews} Reviews)</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-neutral-700">Color: {product.color}</p>
          <div className="flex gap-3">
            {product.swatches.map((swatch) => (
              <span
                key={swatch}
                className="h-7 w-7 rounded-full border border-neutral-200"
                style={{ backgroundColor: swatch }}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">MOQ</p>
            <p className="mt-2 text-lg font-semibold text-neutral-900">{product.minimumBoxes} boxes</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Dispatch</p>
            <p className="mt-2 text-lg font-semibold text-neutral-900">{product.leadTimeDays} days</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Stock</p>
            <p className="mt-2 text-lg font-semibold text-neutral-900">{product.stockMasterBoxes} boxes</p>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold text-neutral-700">Master Box (Carton)</p>
              <p className="text-xs text-neutral-500">{product.unitsPerMasterBox} units per box</p>
            </div>

            <div className="flex items-center rounded-xl border border-neutral-200 bg-white">
              <button
                type="button"
                className="px-4 py-3 text-lg text-neutral-600"
                onClick={() => setBoxes((value) => Math.max(product.minimumBoxes, value - 1))}
              >
                -
              </button>
              <span className="min-w-12 text-center text-base font-semibold text-neutral-900">{boxes}</span>
              <button
                type="button"
                className="px-4 py-3 text-lg text-neutral-600"
                onClick={() => setBoxes((value) => value + 1)}
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Total Units</p>
              <p className="text-2xl font-bold text-neutral-950">{formatInteger(totalUnits)}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-neutral-500">Price / Box</p>
            <p className="text-3xl font-bold text-neutral-950">{formatCurrency(product.pricePerBox)}</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-neutral-500">Total Price</p>
            <p className="text-3xl font-bold text-neutral-950">{formatCurrency(totalPrice)}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1" onClick={() => addBoxes(product, boxes)}>
            Add to Cart
          </Button>
          <Button className="flex-1" variant="secondary">
            Add to Wishlist
          </Button>
        </div>

        <div className="grid gap-3 border-t border-neutral-200 pt-4 text-sm text-neutral-600 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#e10600]" />
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#e10600]" />
            <span>ISI Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-[#e10600]" />
            <span>{product.leadTimeDays} Day Dispatch</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
