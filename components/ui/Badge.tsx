import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "question" | "duration";
  className?: string;
};

export function Badge({ children, variant = "question", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide",
        variant === "question" && "bg-badge-teal-bg text-badge-teal",
        variant === "duration" && "bg-badge-pink-bg text-badge-pink",
        className,
      )}
    >
      {children}
    </span>
  );
}
