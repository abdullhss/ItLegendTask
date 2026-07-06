"use client";

import { useState } from "react";
import type { CurriculumWeek } from "@/lib/types/course";
import { CurriculumWeekSection } from "./CurriculumWeekSection";
import { ExamModal } from "./ExamModal";
import { PdfViewerModal } from "./PdfViewerModal";
import { ProgressBar } from "@/components/ui/ProgressBar";

type CourseSidebarProps = {
  progress: number;
  curriculum: CurriculumWeek[];
};

export function CourseSidebar({ progress, curriculum }: CourseSidebarProps) {
  const [pdfPreview, setPdfPreview] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [examLessonTitle, setExamLessonTitle] = useState<string | null>(null);

  const [firstWeek, ...remainingWeeks] = curriculum;

  function handleOpenPdf(url: string, title: string) {
    setPdfPreview({ url, title });
  }

  function handleClosePdf() {
    setPdfPreview(null);
  }

  function handleOpenExam(title: string) {
    setExamLessonTitle(title);
  }

  function handleCloseExam() {
    setExamLessonTitle(null);
  }

  return (
    <>
      <aside aria-labelledby="topics-heading">
        <div>
          <h2
            id="topics-heading"
            className="mb-[50px] text-2xl font-semibold text-[#333]"
          >
            Topics for This Course
          </h2>

          <ProgressBar value={progress} />

          {firstWeek && (
            <CurriculumWeekSection
              week={firstWeek}
              onOpenPdf={handleOpenPdf}
              onOpenExam={handleOpenExam}
            />
          )}
        </div>

        {remainingWeeks.map((week) => (
          <div key={week.id}>
            <CurriculumWeekSection
              week={week}
              onOpenPdf={handleOpenPdf}
              onOpenExam={handleOpenExam}
            />
          </div>
        ))}
      </aside>

      <PdfViewerModal
        open={Boolean(pdfPreview)}
        onClose={handleClosePdf}
        pdfUrl={pdfPreview?.url ?? ""}
        title={pdfPreview?.title}
      />

      <ExamModal
        open={Boolean(examLessonTitle)}
        onClose={handleCloseExam}
        lessonTitle={examLessonTitle ?? undefined}
      />
    </>
  );
}
