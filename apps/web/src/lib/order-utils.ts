import { BulkCartItem, Product } from "@/types/domain";

export const GST_RATE = 0.18;

export function calculateLine(product: Product, masterBoxes: number): BulkCartItem {
  const totalUnits = masterBoxes * product.unitsPerMasterBox;
  const subtotal = masterBoxes * product.pricePerBox;

  return {
    product,
    masterBoxes,
    totalUnits,
    subtotal,
  };
}

export function calculateCartTotals(items: BulkCartItem[]) {
  const cartons = items.reduce((sum, item) => sum + item.masterBoxes, 0);
  const units = items.reduce((sum, item) => sum + item.totalUnits, 0);
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const gst = subtotal * GST_RATE;
  const shipping = subtotal > 30000 ? 0 : 1200;
  const total = subtotal + gst + shipping;

  return {
    cartons,
    units,
    subtotal,
    gst,
    shipping,
    total,
  };
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatInteger(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}
