import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoursePageBody } from "@/components/course/CoursePageBody";
import { Container } from "@/components/layout/Container";
import type { CourseDetails } from "@/lib/types/course";

type CourseDetailsViewProps = {
  course: CourseDetails;
};

export function CourseDetailsView({ course }: CourseDetailsViewProps) {
  return (
    <div>
      <Breadcrumbs items={course.breadcrumbs} />

      <Container>
        <h1 className="mb-[15px] text-[42px] font-bold text-[#333] max-md:text-3xl">
          {course.title}
        </h1>
      </Container>

      <CoursePageBody course={course} />
    </div>
  );
}
