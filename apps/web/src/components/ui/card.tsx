import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]", className)}>
      {children}
    </div>
  );
}
