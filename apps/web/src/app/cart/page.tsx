import { CommerceShell } from "@/components/layout/commerce-shell";
import { JourneyStepper } from "@/components/commerce/journey-stepper";
import { CartReview } from "@/components/commerce/cart-review";

export default function CartPage() {
  return (
    <CommerceShell activeKey="orders" breadcrumb="Cart / Order Summary">
      <div className="space-y-6">
        <JourneyStepper currentStep={1} />
        <CartReview />
      </div>
    </CommerceShell>
  );
}
