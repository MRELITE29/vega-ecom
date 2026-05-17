"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";

import { CartSummaryPanel } from "@/components/commerce/cart-summary-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency, formatInteger } from "@/lib/order-utils";
import { useBulkCartStore } from "@/store/cart-store";

export function CartReview() {
  const items = useBulkCartStore((state) => state.items);
  const setBoxes = useBulkCartStore((state) => state.setBoxes);

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <Card className="overflow-hidden p-0">
        <div className="grid grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr_0.3fr] gap-4 border-b border-neutral-200 bg-neutral-50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          <span>Product</span>
          <span>Master Box</span>
          <span>Total Units</span>
          <span>Price / Box</span>
          <span>Action</span>
        </div>

        <div className="divide-y divide-neutral-200">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="grid grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr_0.3fr] gap-4 px-6 py-5 text-sm text-neutral-700"
            >
              <div>
                <p className="font-semibold text-neutral-900">{item.product.name}</p>
                <p className="text-neutral-500">{item.product.category} Helmet</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-400">{item.product.sku}</p>
              </div>
              <div className="flex w-fit items-center rounded-xl border border-neutral-200">
                <button
                  type="button"
                  className="px-3 py-2 text-base"
                  onClick={() => setBoxes(item.product.id, item.masterBoxes - 1)}
                >
                  -
                </button>
                <span className="min-w-10 text-center font-semibold">{item.masterBoxes}</span>
                <button
                  type="button"
                  className="px-3 py-2 text-base"
                  onClick={() => setBoxes(item.product.id, item.masterBoxes + 1)}
                >
                  +
                </button>
              </div>
              <div>
                <p className="font-medium text-neutral-900">{formatInteger(item.totalUnits)}</p>
                <p className="text-xs text-neutral-400">{item.product.unitsPerMasterBox} units / box</p>
              </div>
              <div>
                <p className="font-medium text-neutral-900">{formatCurrency(item.product.pricePerBox)}</p>
                <p className="text-xs text-neutral-400">{formatCurrency(item.subtotal)} total</p>
              </div>
              <button
                type="button"
                className="text-[#e10600]"
                onClick={() => setBoxes(item.product.id, 0)}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </Card>

      <div className="space-y-4">
        <CartSummaryPanel items={items} ctaLabel="Proceed to Checkout" />
        <div className="flex gap-3">
          <Button href="/products" variant="secondary" className="flex-1">
            Continue Shopping
          </Button>
          <Link
            href="/checkout"
            className="flex flex-1 items-center justify-center rounded-xl bg-[#e10600] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
