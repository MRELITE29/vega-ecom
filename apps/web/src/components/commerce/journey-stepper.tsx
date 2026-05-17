import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const steps = ["Cart", "Address", "Review", "Confirm"];

export function JourneyStepper({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isDone = stepNumber < currentStep;

        return (
          <div key={step} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                  isDone || isActive
                    ? "border-[#e10600] bg-[#e10600] text-white"
                    : "border-neutral-300 bg-white text-neutral-500",
                )}
              >
                {isDone ? <Check className="h-4 w-4" /> : stepNumber}
              </span>
              <span className={cn("text-sm font-medium", isActive ? "text-neutral-900" : "text-neutral-500")}>
                {step}
              </span>
            </div>
            {index < steps.length - 1 ? <span className="h-px w-8 bg-neutral-200" /> : null}
          </div>
        );
      })}
    </div>
  );
}
