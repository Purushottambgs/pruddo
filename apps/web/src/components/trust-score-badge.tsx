import { cn } from "@/lib/utils";
import type { TrustVerdict } from "@pruddo/shared";

interface TrustScoreBadgeProps {
  score: number;
  verdict: TrustVerdict;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const VERDICT_CONFIG: Record<TrustVerdict, { label: string; className: string }> = {
  great_buy: {
    label: "Great Buy",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  consider: {
    label: "Consider",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  avoid: {
    label: "Avoid",
    className: "bg-red-50 text-red-700 border-red-200",
  },
};

export function TrustScoreBadge({
  score,
  verdict,
  size = "md",
  showLabel = true,
}: TrustScoreBadgeProps) {
  const config = VERDICT_CONFIG[verdict];

  const sizeClasses = {
    sm: { score: "text-lg font-bold", label: "text-xs", padding: "px-3 py-2" },
    md: { score: "text-3xl font-bold", label: "text-sm", padding: "px-5 py-3" },
    lg: { score: "text-5xl font-bold", label: "text-base", padding: "px-8 py-5" },
  }[size];

  return (
    <div
      className={cn(
        "inline-flex flex-col items-center rounded-xl border",
        config.className,
        sizeClasses.padding
      )}
    >
      <span className={sizeClasses.score}>{score}</span>
      {showLabel && (
        <span className={cn(sizeClasses.label, "font-semibold mt-0.5")}>{config.label}</span>
      )}
    </div>
  );
}
