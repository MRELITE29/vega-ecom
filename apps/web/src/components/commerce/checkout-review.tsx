"use client";

import { CartSummaryPanel } from "@/components/commerce/cart-summary-panel";
import { JourneyStepper } from "@/components/commerce/journey-stepper";
import { Card } from "@/components/ui/card";
import { addressBook } from "@/lib/mock-data";
import { useBulkCartStore } from "@/store/cart-store";

export function CheckoutReview() {
  const items = useBulkCartStore((state) => state.items);

  return (
    <div className="space-y-6">
      <JourneyStepper currentStep={2} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">Shipping Address</h2>
            <button type="button" className="text-sm font-semibold text-[#e10600]">
              + Add New Address
            </button>
          </div>

          <div className="space-y-4">
            {addressBook.map((address, index) => (
              <label
                key={address.id}
                className={`block rounded-2xl border p-4 transition-colors ${
                  index === 0 ? "border-[#e10600] bg-white shadow-[inset_0_0_0_1px_rgba(225,6,0,0.08)]" : "border-neutral-200 bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <input type="radio" name="address" defaultChecked={index === 0} className="mt-1" />
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p className="font-semibold text-neutral-900">{address.name}</p>
                    <p>GSTIN: {address.gstin}</p>
                    <p>{address.contact}</p>
                    <p>{address.addressLine}</p>
                    <p>{address.city}</p>
                    <p>{address.phone}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <CartSummaryPanel items={items} ctaLabel="Place Order" />
          <Card className="space-y-3 text-sm text-neutral-600">
            <h3 className="text-lg font-semibold text-neutral-900">Order Review</h3>
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between">
                <span>
                  {item.product.name} x {item.masterBoxes}
                </span>
                <span>{item.subtotal.toLocaleString("en-IN")}</span>
              </div>
            ))}
            <label className="flex items-start gap-3 border-t border-neutral-200 pt-4">
              <input type="checkbox" defaultChecked className="mt-1" />
              <span>I agree to the Terms & Conditions</span>
            </label>
          </Card>
        </div>
      </div>
    </div>
  );
}
