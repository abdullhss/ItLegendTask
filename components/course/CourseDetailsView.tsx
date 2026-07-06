import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CommentsSection } from "@/components/course/CommentsSection";
import { CourseMaterials } from "@/components/course/CourseMaterials";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseVideoPlayer } from "@/components/course/CourseVideoPlayer";
import { CurriculumIcons } from "@/components/course/CurriculumIcons";
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
        <h1 className="mb-[15px] text-[42px] font-bold text-[#333]">
          {course.title}
        </h1>
      </Container>

      <div className="bg-white">
        <Container className="grid grid-cols-1 gap-[65px] py-[15px] lg:grid-cols-[2fr_1fr]">
          <div className="course-content">
            <div>
              <CourseVideoPlayer
                thumbnail={course.videoThumbnail}
                title={course.title}
              />
              <CurriculumIcons />
            </div>

            <CourseMaterials materials={course.materials} />
            <CommentsSection comments={course.comments} />
          </div>

          <div>
            <CourseSidebar
              progress={course.progress}
              curriculum={course.curriculum}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
