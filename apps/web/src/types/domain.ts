export type UserRole = "admin" | "vendor" | "ops";

export type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: string;
  model: string;
  variant: string;
  color: string;
  description: string;
  pricePerBox: number;
  unitsPerMasterBox: number;
  minimumBoxes: number;
  stockMasterBoxes: number;
  leadTimeDays: number;
  priority: number;
  isActive: boolean;
  accent: string;
  swatches: string[];
  rating: number;
  reviews: number;
};

export type BulkCartItem = {
  product: Product;
  masterBoxes: number;
  totalUnits: number;
  subtotal: number;
};

export type DashboardMetric = {
  label: string;
  value: string;
  note: string;
  icon: string;
};

export type DispatchOrder = {
  id: string;
  buyer: string;
  region: string;
  status: "Review" | "Approved" | "Dispatch Ready";
  cartons: number;
  eta: string;
};

export type InventoryAlert = {
  sku: string;
  model: string;
  availableBoxes: number;
  threshold: number;
  warehouse: string;
};

export type RecommendationSignal = {
  title: string;
  rationale: string;
  confidence: string;
};

export type FavoriteOrderTemplate = {
  id: string;
  name: string;
  buyer: string;
  lines: Array<{
    sku: string;
    boxes: number;
  }>;
};

export type CategoryCard = {
  label: string;
  count: string;
  accent: string;
};

export type Address = {
  id: string;
  name: string;
  gstin: string;
  contact: string;
  phone: string;
  addressLine: string;
  city: string;
};

export type ConfirmationSummary = {
  orderId: string;
  orderDate: string;
  totalAmount: string;
  email: string;
};
