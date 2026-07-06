type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className }: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`relative mb-5 flex items-center ${className ?? ""}`}>
      <div className="h-[5px] flex-1 overflow-hidden rounded-[5px] bg-[#e6e6e6]">
        <div
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Course progress: ${clampedValue}%`}
          className="h-full rounded-[5px] bg-progress-fill"
          style={{ width: `${clampedValue}%` }}
        />
      </div>

      <span
        className="absolute top-[calc(50%-12px)] flex -translate-x-[70%] -translate-y-1/2 flex-col items-center gap-[13px] text-sm text-[#333]"
        style={{ left: `${clampedValue}%` }}
      >
        <div className="progress-marker relative mb-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#c8c8c8] text-xs text-progress-marker">
          <span>You</span>
        </div>
        <span className="text-xs">{clampedValue}%</span>
      </span>
    </div>
  );
}
