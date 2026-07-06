"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { MaximizeIcon, PlayIcon, WideIcon } from "@/components/icons";
import { cn } from "@/lib/utils/cn";

type CourseVideoPlayerProps = {
  thumbnail: string;
  title: string;
  videoUrl: string;
  isWide?: boolean;
  onWideChange?: (wide: boolean) => void;
  className?: string;
};

function getYouTubeEmbedUrl(url: string, autoplay = false): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");
    let videoId: string | null = null;

    if (host === "youtu.be") {
      videoId = parsed.pathname.slice(1) || null;
    } else if (host === "youtube.com" || host === "m.youtube.com") {
      videoId = parsed.searchParams.get("v");
    }

    if (!videoId) return null;

    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });

    if (autoplay) params.set("autoplay", "1");

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  } catch {
    return null;
  }
}

export function CourseVideoPlayer({
  thumbnail,
  title,
  videoUrl,
  isWide = false,
  onWideChange,
  className,
}: CourseVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const embedUrl = getYouTubeEmbedUrl(videoUrl, isPlaying);
  const iframeSrc = isPlaying ? embedUrl : null;

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(Boolean(document.fullscreenElement));
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [handleFullscreenChange]);

  async function handleMaximize() {
    const element = containerRef.current;
    if (!element) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else {
        const elementWithWebkit = element as HTMLDivElement & {
          webkitRequestFullscreen?: () => Promise<void> | void;
        };
        await elementWithWebkit.webkitRequestFullscreen?.();
      }
    } catch {
      // Fullscreen may be blocked by browser policy.
    }
  }

  function handleWideToggle() {
    onWideChange?.(!isWide);
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "course-player group relative bg-black max-md:sticky max-md:top-0 max-md:z-40",
        isPlaying && "course-player--playing",
        isWide
          ? "aspect-video w-full rounded-none"
          : "h-[530px] w-full overflow-hidden rounded-[3px] max-md:aspect-video max-md:h-auto",
        isFullscreen && "rounded-none",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full w-full",
          !isWide && "max-md:aspect-video",
        )}
      >
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title={`${title} video`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={thumbnail}
              alt="course image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-black/65" />
            <button
              type="button"
              aria-label="Play course video"
              onClick={() => embedUrl && setIsPlaying(true)}
              disabled={!embedUrl}
              className="absolute left-1/2 top-1/2 z-10 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-play-accent shadow-lg transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 max-md:h-20 max-md:w-20"
            >
              <PlayIcon className="h-6 w-6" />
            </button>
          </>
        )}

        {isPlaying && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-end gap-2 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 max-md:opacity-100">
            {onWideChange && (
              <button
                type="button"
                aria-label={isWide ? "Exit wide mode" : "Wide mode"}
                onClick={handleWideToggle}
                className="pointer-events-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-black/55 text-white transition-colors hover:bg-black/75 max-lg:hidden"
              >
                <WideIcon className="h-4 w-4" />
              </button>
            )}
            <button
              type="button"
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              onClick={handleMaximize}
              className="pointer-events-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-black/55 text-white transition-colors hover:bg-black/75"
            >
              <MaximizeIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
