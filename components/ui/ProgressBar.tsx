"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className }: ProgressBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targetValue = Math.min(100, Math.max(0, value));

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1000;
    const start = performance.now();
    let frameId = 0;

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(targetValue * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated, targetValue]);

  return (
    <div
      ref={containerRef}
      className={cn("relative mb-5 flex items-center", className)}
    >
      <div className="h-[5px] flex-1 overflow-hidden rounded-[5px] bg-[#e6e6e6]">
        <div
          role="progressbar"
          aria-valuenow={hasAnimated ? targetValue : 0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Course progress: ${targetValue}%`}
          className="h-full rounded-[5px] bg-progress-fill transition-[width] duration-1000 ease-out"
          style={{ width: hasAnimated ? `${displayValue}%` : "0%" }}
        />
      </div>

      <span
        className="absolute top-[calc(50%-12px)] flex -translate-x-[70%] -translate-y-1/2 flex-col items-center gap-[13px] text-sm text-[#333] transition-[left] duration-1000 ease-out"
        style={{ left: hasAnimated ? `${displayValue}%` : "0%" }}
      >
        <div className="progress-marker relative mb-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#c8c8c8] text-xs text-progress-marker">
          <span>You</span>
        </div>
        <span className="text-xs">{displayValue}%</span>
      </span>
    </div>
  );
}
