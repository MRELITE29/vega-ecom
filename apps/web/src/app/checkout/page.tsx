import Link from "next/link";

import { CheckoutReview } from "@/components/commerce/checkout-review";
import { CommerceShell } from "@/components/layout/commerce-shell";

export default function CheckoutPage() {
  return (
    <CommerceShell activeKey="addresses" breadcrumb="Checkout / Address & Review">
      <div className="space-y-4">
        <CheckoutReview />
        <div className="flex justify-end">
          <Link
            href="/confirmation"
            className="inline-flex items-center justify-center rounded-xl bg-[#e10600] px-6 py-3 text-sm font-semibold text-white"
          >
            Continue to Confirmation
          </Link>
        </div>
      </div>
    </CommerceShell>
  );
}
