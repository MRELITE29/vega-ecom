import Link from "next/link";

import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-[#e10600] text-white hover:bg-[#c80500] focus-visible:ring-[#e10600]",
  secondary:
    "border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 focus-visible:ring-neutral-300",
  ghost: "text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-200",
};

export function Button({
  children,
  className,
  href,
  variant = "primary",
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: keyof typeof variants;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
