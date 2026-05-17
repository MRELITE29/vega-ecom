import Link from "next/link";
import { Check, FileText, Mail, Truck } from "lucide-react";

import { HelmetVisual } from "@/components/commerce/helmet-visual";
import { CommerceShell } from "@/components/layout/commerce-shell";
import { Card } from "@/components/ui/card";
import { confirmationSummary, products } from "@/lib/mock-data";

export default function ConfirmationPage() {
  return (
    <CommerceShell activeKey="invoices" breadcrumb="Order Confirmation">
      <Card className="overflow-hidden p-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 px-6 py-8 lg:px-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check className="h-8 w-8" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-neutral-950">Order Placed Successfully!</h1>
              <p className="mt-2 text-neutral-500">
                Thank you for your order. We have received your purchase order and started processing it.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Order ID</p>
                <p className="mt-2 font-semibold text-neutral-900">{confirmationSummary.orderId}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Order Date</p>
                <p className="mt-2 font-semibold text-neutral-900">{confirmationSummary.orderDate}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Total Amount</p>
                <p className="mt-2 font-semibold text-neutral-900">{confirmationSummary.totalAmount}</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 p-4">
                <Mail className="h-5 w-5 text-[#e10600]" />
                <p className="mt-3 text-sm text-neutral-700">
                  Confirmation email has been sent to <strong>{confirmationSummary.email}</strong>
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-4">
                <FileText className="h-5 w-5 text-[#e10600]" />
                <p className="mt-3 text-sm text-neutral-700">Invoice will be sent shortly.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 p-4">
                <Truck className="h-5 w-5 text-[#e10600]" />
                <p className="mt-3 text-sm text-neutral-700">
                  We will notify you once your order is dispatched.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/cart"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700"
              >
                View Order Details
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl bg-[#e10600] px-5 py-3 text-sm font-semibold text-white"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="border-l border-neutral-200 bg-neutral-50 p-6">
            <HelmetVisual accent={products[0].accent} className="h-full min-h-[420px]" />
          </div>
        </div>
      </Card>
    </CommerceShell>
  );
}
