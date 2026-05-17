import { Card } from "@/components/ui/card";
import { calculateCartTotals, formatCurrency, formatInteger } from "@/lib/order-utils";
import { BulkCartItem } from "@/types/domain";

export function CartSummaryPanel({
  items,
  ctaLabel,
}: {
  items: BulkCartItem[];
  ctaLabel: string;
}) {
  const totals = calculateCartTotals(items);

  return (
    <Card className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900">Order Summary</h3>
        <p className="mt-1 text-sm text-neutral-500">Commercial totals for the current purchase order.</p>
      </div>

      <div className="space-y-3 text-sm text-neutral-600">
        <div className="flex items-center justify-between">
          <span>Total Master Boxes</span>
          <span>{totals.cartons}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Total Units</span>
          <span>{formatInteger(totals.units)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(totals.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>GST (18%)</span>
          <span>{formatCurrency(totals.gst)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>{totals.shipping === 0 ? "Free" : formatCurrency(totals.shipping)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-200 pt-4 text-lg font-semibold text-neutral-900">
        <span>Grand Total</span>
        <span>{formatCurrency(totals.total)}</span>
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-[#e10600] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c80500]"
      >
        {ctaLabel}
      </button>
    </Card>
  );
}
