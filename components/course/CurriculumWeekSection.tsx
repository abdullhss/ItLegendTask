import type { CurriculumWeek } from "@/lib/types/course";
import { LessonRow } from "./LessonRow";

type CurriculumWeekSectionProps = {
  week: CurriculumWeek;
};

export function CurriculumWeekSection({ week }: CurriculumWeekSectionProps) {
  return (
    <div className="mt-[60px] border border-border px-[15px] py-10">
      <div className="mb-5">
        <h3 className="mb-[15px] text-[22px] font-medium text-[#333]">
          {week.title}
        </h3>
        <p className="text-base leading-normal text-[#777]">{week.description}</p>
      </div>

      <div role="list" aria-label={`${week.title} lessons`}>
        {week.lessons.map((lesson) => (
          <div key={lesson.id} role="listitem">
            <LessonRow lesson={lesson} />
          </div>
        ))}
      </div>
    </div>
  );
}
