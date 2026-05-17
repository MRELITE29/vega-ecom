import {
  Address,
  CategoryCard,
  ConfirmationSummary,
  DashboardMetric,
  FavoriteOrderTemplate,
  Product,
} from "@/types/domain";

export const products: Product[] = [
  {
    id: "prd-axor-apex",
    slug: "axor-apex",
    sku: "VG-AXR-101",
    name: "AXOR Apex",
    category: "Full Face",
    model: "AXOR",
    variant: "Apex",
    color: "Black Red",
    description: "Premium full-face helmet built for high-velocity dealers and frequent reorder cycles.",
    pricePerBox: 8850,
    unitsPerMasterBox: 600,
    minimumBoxes: 3,
    stockMasterBoxes: 48,
    leadTimeDays: 2,
    priority: 99,
    isActive: true,
    accent: "from-rose-600 via-red-500 to-orange-400",
    swatches: ["#050505", "#dc2626", "#1d4ed8", "#9ca3af"],
    rating: 4.6,
    reviews: 245,
  },
  {
    id: "prd-bolt-bunny",
    slug: "bolt-bunny",
    sku: "VG-BLT-220",
    name: "Bolt Bunny",
    category: "Open Face",
    model: "Bolt",
    variant: "Bunny",
    color: "Matte Black",
    description: "Fast-moving commuter helmet for distributors handling dense urban replenishment.",
    pricePerBox: 1750,
    unitsPerMasterBox: 600,
    minimumBoxes: 2,
    stockMasterBoxes: 62,
    leadTimeDays: 3,
    priority: 92,
    isActive: true,
    accent: "from-slate-700 via-slate-500 to-zinc-300",
    swatches: ["#111827", "#ef4444", "#e5e7eb"],
    rating: 4.4,
    reviews: 198,
  },
  {
    id: "prd-vega-crux",
    slug: "vega-crux",
    sku: "VG-CRX-212",
    name: "Vega Crux",
    category: "Full Face",
    model: "Crux",
    variant: "Classic",
    color: "Black Silver",
    description: "Dependable all-rounder with steady repeat order behavior and healthy margin coverage.",
    pricePerBox: 2650,
    unitsPerMasterBox: 600,
    minimumBoxes: 1,
    stockMasterBoxes: 34,
    leadTimeDays: 4,
    priority: 88,
    isActive: true,
    accent: "from-neutral-900 via-neutral-600 to-red-500",
    swatches: ["#000000", "#6b7280", "#ef4444"],
    rating: 4.5,
    reviews: 221,
  },
  {
    id: "prd-vega-off-road",
    slug: "vega-off-road",
    sku: "VG-OFR-904",
    name: "Vega Off Road",
    category: "Off Road",
    model: "Off Road",
    variant: "MX",
    color: "Charcoal Red",
    description: "High-visibility off-road profile with campaign-friendly shelf appeal.",
    pricePerBox: 3250,
    unitsPerMasterBox: 600,
    minimumBoxes: 1,
    stockMasterBoxes: 21,
    leadTimeDays: 5,
    priority: 84,
    isActive: true,
    accent: "from-stone-900 via-red-700 to-zinc-400",
    swatches: ["#1f2937", "#b91c1c", "#d1d5db"],
    rating: 4.3,
    reviews: 132,
  },
  {
    id: "prd-vega-thunder",
    slug: "vega-thunder",
    sku: "VG-THN-111",
    name: "Vega Thunder",
    category: "Flip Up",
    model: "Thunder",
    variant: "Urban",
    color: "Fire Yellow",
    description: "Bright commuter line ideal for mixed-territory dealers and seasonal promotions.",
    pricePerBox: 2890,
    unitsPerMasterBox: 600,
    minimumBoxes: 2,
    stockMasterBoxes: 27,
    leadTimeDays: 4,
    priority: 80,
    isActive: true,
    accent: "from-amber-400 via-red-500 to-orange-600",
    swatches: ["#f59e0b", "#ef4444", "#111827"],
    rating: 4.2,
    reviews: 116,
  },
  {
    id: "prd-vega-sprint",
    slug: "vega-sprint",
    sku: "VG-SPR-443",
    name: "Vega Sprint",
    category: "Open Face",
    model: "Sprint",
    variant: "Lite",
    color: "Pearl White",
    description: "Reliable value line for high-volume dealer programs and institutional procurement.",
    pricePerBox: 1890,
    unitsPerMasterBox: 600,
    minimumBoxes: 2,
    stockMasterBoxes: 54,
    leadTimeDays: 3,
    priority: 78,
    isActive: true,
    accent: "from-zinc-100 via-slate-300 to-slate-500",
    swatches: ["#ffffff", "#cbd5e1", "#111827"],
    rating: 4.1,
    reviews: 87,
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: "600",
    value: "Units per Master Box",
    note: "Built for bulk shipment logic",
    icon: "Package",
  },
  {
    label: "Bulk Pricing",
    value: "Best rates assured",
    note: "Auto-applied by carton quantity",
    icon: "BadgePercent",
  },
  {
    label: "Fast Delivery",
    value: "Pan India dispatch",
    note: "Inventory-aware ETAs",
    icon: "Truck",
  },
  {
    label: "Easy Reorder",
    value: "One click flow",
    note: "Saved templates for repeat buyers",
    icon: "RotateCcw",
  },
];

export const categoryCards: CategoryCard[] = [
  { label: "Full Face", count: "18 Models", accent: "from-red-500 to-rose-200" },
  { label: "Open Face", count: "10 Models", accent: "from-zinc-900 to-slate-300" },
  { label: "Flip Up", count: "8 Models", accent: "from-orange-500 to-amber-200" },
  { label: "Off Road", count: "6 Models", accent: "from-red-700 to-stone-300" },
  { label: "Kids Helmets", count: "7 Models", accent: "from-sky-500 to-cyan-200" },
  { label: "Accessories", count: "12 SKUs", accent: "from-zinc-700 to-zinc-200" },
];

export const filterGroups = {
  categories: ["All Categories", "Full Face", "Open Face", "Flip Up", "Off Road"],
  modelTypes: ["Model Type", "Apex", "Crux", "Thunder", "Sprint"],
  prices: ["Price", "Under 2000", "2000 - 3000", "3000+"],
  colors: ["Color", "Black", "Black Red", "White", "Mixed"],
};

export const favoriteOrderTemplates: FavoriteOrderTemplate[] = [
  {
    id: "fav-01",
    name: "Urban Dealer Stack",
    buyer: "Vega Distributors",
    lines: [
      { sku: "VG-AXR-101", boxes: 3 },
      { sku: "VG-BLT-220", boxes: 2 },
      { sku: "VG-CRX-212", boxes: 1 },
    ],
  },
  {
    id: "fav-02",
    name: "North Zone Top Movers",
    buyer: "North Zone Warehouse",
    lines: [
      { sku: "VG-AXR-101", boxes: 4 },
      { sku: "VG-SPR-443", boxes: 2 },
    ],
  },
];

export const defaultCartSelections = [
  { productId: "prd-axor-apex", masterBoxes: 3 },
  { productId: "prd-bolt-bunny", masterBoxes: 2 },
  { productId: "prd-vega-crux", masterBoxes: 1 },
];

export const addressBook: Address[] = [
  {
    id: "addr-1",
    name: "Vega Distributors",
    gstin: "27ABCDE1234F1Z5",
    contact: "Nitin B",
    phone: "+91 98765 43210",
    addressLine: "Plot No. 15, Industrial Area",
    city: "Ghaziabad, Uttar Pradesh - 201009",
  },
  {
    id: "addr-2",
    name: "Vega North Zone Warehouse",
    gstin: "07ABCDE1234F1Z5",
    contact: "Operations Desk",
    phone: "+91 99876 54321",
    addressLine: "WZ-12, Sector 63",
    city: "Noida, Uttar Pradesh - 201301",
  },
];

export const confirmationSummary: ConfirmationSummary = {
  orderId: "VH2505120896",
  orderDate: "17 May 2026, 03:05 PM",
  totalAmount: "₹38,586",
  email: "info@vegadistributors.com",
};

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
