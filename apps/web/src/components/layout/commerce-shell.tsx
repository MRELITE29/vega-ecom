import Link from "next/link";
import { Bell, Search, ShoppingCart } from "lucide-react";

import { VegaMark } from "@/components/commerce/vega-mark";
import { primaryNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function CommerceShell({
  activeKey,
  breadcrumb,
  children,
}: {
  activeKey: string;
  breadcrumb: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-[1680px]">
        <div className="grid min-h-screen lg:grid-cols-[236px_minmax(0,1fr)]">
          <aside className="border-b border-neutral-200 bg-white px-5 py-6 lg:border-b-0 lg:border-r">
            <div className="lg:sticky lg:top-0 lg:pt-1">
              <Link href="/" className="inline-block">
                <VegaMark />
              </Link>

              <nav className="mt-8 space-y-1.5">
                {primaryNavigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.key === activeKey;

                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[#e10600] text-white"
                          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Account
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">Vega Distributors</p>
                <p className="mt-1 text-sm leading-6 text-neutral-600">
                  Bulk ordering workspace for distributors, warehouses, and repeat procurement teams.
                </p>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-col bg-white">
            <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">
                      {breadcrumb}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="flex min-w-[220px] items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-neutral-500 sm:min-w-[360px]">
                      <Search className="h-4 w-4" />
                      <input
                        aria-label="Search products"
                        className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                        placeholder="Search for models, variants..."
                      />
                    </label>

                    <button
                      type="button"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600"
                    >
                      <Bell className="h-4 w-4" />
                    </button>
                    <Link
                      href="/cart"
                      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#e10600] px-1 text-[10px] font-bold text-white">
                        12
                      </span>
                    </Link>
                  </div>
                </div>
            </header>

            <main className="min-w-0 flex-1 bg-white px-5 py-5 sm:px-6 lg:px-8">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
