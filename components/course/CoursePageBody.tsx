"use client";

import { useState } from "react";
import { CommentsSection } from "@/components/course/CommentsSection";
import { CourseMaterials } from "@/components/course/CourseMaterials";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseVideoPlayer } from "@/components/course/CourseVideoPlayer";
import { CurriculumIcons } from "@/components/course/CurriculumIcons";
import { Container } from "@/components/layout/Container";
import type { CourseDetails } from "@/lib/types/course";

type CoursePageBodyProps = {
  course: CourseDetails;
};

export function CoursePageBody({ course }: CoursePageBodyProps) {
  const [isWide, setIsWide] = useState(false);

  const player = (
    <CourseVideoPlayer
      thumbnail={course.videoThumbnail}
      title={course.title}
      videoUrl={course.videoUrl}
      isWide={isWide}
      onWideChange={setIsWide}
      className={!isWide ? "max-md:-mx-[15px] max-md:w-[calc(100%+30px)]" : undefined}
    />
  );

  const courseSections = (
    <>
      <CourseMaterials materials={course.materials} />
      <CommentsSection comments={course.comments} />
    </>
  );

  if (isWide) {
    return (
      <div className="bg-white">
        <div className="w-full bg-black">{player}</div>

        <Container className="py-[15px]">
          <CurriculumIcons courseName={course.title} />
        </Container>

        <Container className="grid grid-cols-1 gap-[65px] py-[15px] lg:grid-cols-[2fr_1fr]">
          <div className="course-content">{courseSections}</div>
          <div>
            <CourseSidebar
              progress={course.progress}
              curriculum={course.curriculum}
            />
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Container className="grid grid-cols-1 gap-[65px] py-[15px] lg:grid-cols-[2fr_1fr]">
        <div className="course-content">
          {player}
          <CurriculumIcons courseName={course.title} />
          {courseSections}
        </div>

        <div>
          <CourseSidebar
            progress={course.progress}
            curriculum={course.curriculum}
          />
        </div>
      </Container>
    </div>
  );
}
