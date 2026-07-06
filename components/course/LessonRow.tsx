import { DocumentIcon, LockIcon } from "@/components/icons";
import type { Lesson } from "@/lib/types/course";

type LessonRowProps = {
  lesson: Lesson;
  onOpenPdf?: (url: string, title: string) => void;
  onOpenExam?: (title: string) => void;
};

export function LessonRow({ lesson, onOpenPdf, onOpenExam }: LessonRowProps) {
  const canOpenPdf = !lesson.locked && lesson.pdfUrl && onOpenPdf;
  const canOpenExam = !lesson.locked && lesson.hasExam && onOpenExam;

  function handleClick() {
    if (canOpenPdf && lesson.pdfUrl) {
      onOpenPdf(lesson.pdfUrl, lesson.title);
      return;
    }

    if (canOpenExam) {
      onOpenExam(lesson.title);
    }
  }

  const isClickable = canOpenPdf || canOpenExam;

  const titleContent = lesson.locked ? (
    <p className="text-sm text-[#333]">{lesson.title}</p>
  ) : (
    <p className="flex w-full items-center justify-between text-sm text-[#333]">
      <span className="inline-block w-[44%] leading-snug">{lesson.title}</span>
      <span className="flex items-center gap-2.5">
        {lesson.badges?.map((badge) => (
          <span
            key={badge.label}
            className={
              badge.variant === "question"
                ? "rounded-[3px] bg-badge-teal-bg px-1.5 py-0.5 text-badge-teal"
                : "rounded-[3px] bg-badge-pink-bg px-1.5 py-0.5 text-badge-pink-text"
            }
          >
            {badge.label}
          </span>
        ))}
      </span>
    </p>
  );

  return (
    <div className="flex items-center justify-between border-t border-border py-[15px] last:pb-0">
      <div className="flex w-full min-w-0 items-center justify-between gap-1">
        {isClickable ? (
          <button
            type="button"
            onClick={handleClick}
            className="flex min-w-0 flex-1 cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-left"
          >
            <span className="shrink-0 text-[#333]">
              <DocumentIcon className="h-4 w-4" />
            </span>
            {titleContent}
          </button>
        ) : (
          <div className="flex min-w-0 flex-1 items-center gap-1.5">
            <span className="shrink-0 text-[#333]">
              <DocumentIcon className="h-4 w-4" />
            </span>
            {titleContent}
          </div>
        )}
      </div>

      {lesson.locked && (
        <span className="ml-3 shrink-0 text-[#333]" aria-label="Locked">
          <LockIcon className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}
