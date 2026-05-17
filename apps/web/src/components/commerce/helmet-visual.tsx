import { cn } from "@/lib/utils";

export function HelmetVisual({
  accent,
  className,
}: {
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-neutral-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f5f5_100%)]",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.85),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(0,0,0,0.03)_55%,transparent_100%)]" />
      <div className={cn("absolute -right-10 top-6 h-44 w-44 rounded-full bg-gradient-to-br opacity-20 blur-2xl", accent)} />
      <div className="absolute inset-x-10 bottom-6 top-8 rounded-[46%_54%_38%_42%/46%_44%_40%_42%] border border-neutral-700/20 bg-[linear-gradient(160deg,#1c1c1c,#070707_50%,#202020_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_30px_rgba(0,0,0,0.12)]">
        <div className="absolute inset-y-3 left-[20%] right-[14%] rounded-[42%_58%_32%_48%/48%_52%_36%_42%] border border-white/5 bg-[linear-gradient(145deg,#f5f5f5_0%,#d6d6d6_12%,#111111_18%,#0a0a0a_100%)]" />
        <div className="absolute inset-y-7 left-[14%] w-4 rounded-full bg-gradient-to-b from-red-500 to-red-700" />
        <div className="absolute bottom-8 left-[34%] right-[18%] h-3 rounded-full bg-white/85 blur-[0.5px]" />
        <div className="absolute bottom-0 left-[16%] h-10 w-20 rounded-t-[3rem] bg-black" />
      </div>
      <div className="absolute bottom-5 left-1/2 h-3 w-32 -translate-x-1/2 rounded-full bg-black/10 blur-md" />
    </div>
  );
}
