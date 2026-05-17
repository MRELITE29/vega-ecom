import {
  CircleHelp,
  FileText,
  Home,
  LogOut,
  MapPinned,
  PackageSearch,
  RefreshCw,
  ShoppingCart,
  UserRound,
} from "lucide-react";

export const primaryNavigation = [
  { key: "dashboard", href: "/", label: "Dashboard", icon: Home },
  { key: "products", href: "/products", label: "Products", icon: PackageSearch },
  { key: "orders", href: "/cart", label: "Orders", icon: ShoppingCart },
  { key: "reorder", href: "/products", label: "Reorder", icon: RefreshCw },
  { key: "invoices", href: "/confirmation", label: "Invoices", icon: FileText },
  { key: "addresses", href: "/checkout", label: "Addresses", icon: MapPinned },
  { key: "profile", href: "#", label: "Profile", icon: UserRound },
  { key: "support", href: "#", label: "Support", icon: CircleHelp },
  { key: "logout", href: "#", label: "Logout", icon: LogOut },
];
