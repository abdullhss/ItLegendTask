import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type AvatarProps = {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const imageSizeMap = {
  sm: 32,
  md: 40,
  lg: 48,
};

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-muted-bg ring-2 ring-white",
        sizeMap[size],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={imageSizeMap[size]}
          height={imageSizeMap[size]}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-teal-light text-xs font-medium text-teal">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
