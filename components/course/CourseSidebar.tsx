import type { CurriculumWeek } from "@/lib/types/course";
import { CurriculumWeekSection } from "./CurriculumWeekSection";
import { ProgressBar } from "@/components/ui/ProgressBar";

type CourseSidebarProps = {
  progress: number;
  curriculum: CurriculumWeek[];
};

export function CourseSidebar({ progress, curriculum }: CourseSidebarProps) {
  const [firstWeek, ...remainingWeeks] = curriculum;

  return (
    <aside aria-labelledby="topics-heading">
      <div>
        <h2
          id="topics-heading"
          className="mb-[50px] text-2xl font-semibold text-[#333]"
        >
          Topics for This Course
        </h2>

        <ProgressBar value={progress} />

        {firstWeek && <CurriculumWeekSection week={firstWeek} />}
      </div>

      {remainingWeeks.map((week) => (
        <div key={week.id}>
          <CurriculumWeekSection week={week} />
        </div>
      ))}
    </aside>
  );
}
