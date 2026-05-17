import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
