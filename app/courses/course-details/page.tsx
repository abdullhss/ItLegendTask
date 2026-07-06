import { CourseDetailsView } from "@/components/course/CourseDetailsView";
import { courseDetails } from "@/lib/data/course-details";

export default function CourseDetailsPage() {
  return <CourseDetailsView course={courseDetails} />;
}
