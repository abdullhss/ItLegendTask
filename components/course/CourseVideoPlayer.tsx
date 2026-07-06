import Image from "next/image";
import { PlayIcon } from "@/components/icons";

type CourseVideoPlayerProps = {
  thumbnail: string;
  title: string;
};

export function CourseVideoPlayer({
  thumbnail,
  title,
}: CourseVideoPlayerProps) {
  return (
    <div className="relative">
      <div className="relative z-[2] h-[530px] overflow-hidden rounded-[3px]">
        <Image
          src={thumbnail}
          alt="course image"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        <div className="absolute inset-0 rounded-[3px] bg-black/65" />
        <button
          type="button"
          aria-label="Play course video"
          className="absolute left-1/2 top-1/2 z-10 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[23px] text-play-accent shadow-lg transition-transform hover:scale-105 max-md:h-20 max-md:w-20"
        >
          <PlayIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
