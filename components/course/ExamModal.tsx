"use client";

import { useCallback, useEffect, useState } from "react";
import { BackIcon, ClockIcon } from "@/components/icons";
import { defaultExam, getExamProgressKey } from "@/lib/data/exam";
import type { Exam, ExamProgress } from "@/lib/types/exam";
import { cn } from "@/lib/utils/cn";

type ExamModalProps = {
  open: boolean;
  onClose: () => void;
  exam?: Exam;
  lessonTitle?: string;
};

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function loadProgress(examId: string, durationSeconds: number): ExamProgress {
  if (typeof window === "undefined") {
    return {
      currentQuestionIndex: 0,
      selectedAnswers: {},
      timeRemainingSeconds: durationSeconds,
    };
  }

  try {
    const saved = sessionStorage.getItem(getExamProgressKey(examId));
    if (saved) return JSON.parse(saved) as ExamProgress;
  } catch {
    // Ignore invalid stored progress.
  }

  return {
    currentQuestionIndex: 0,
    selectedAnswers: {},
    timeRemainingSeconds: durationSeconds,
  };
}

function saveProgress(examId: string, progress: ExamProgress) {
  sessionStorage.setItem(getExamProgressKey(examId), JSON.stringify(progress));
}

export function ExamModal({
  open,
  onClose,
  exam = defaultExam,
  lessonTitle,
}: ExamModalProps) {
  const [progress, setProgress] = useState<ExamProgress>(() =>
    loadProgress(exam.id, exam.durationSeconds),
  );

  const currentQuestion = exam.questions[progress.currentQuestionIndex];
  const selectedAnswerId = currentQuestion
    ? progress.selectedAnswers[currentQuestion.id]
    : undefined;

  const persistProgress = useCallback(
    (next: ExamProgress) => {
      setProgress(next);
      saveProgress(exam.id, next);
    },
    [exam.id],
  );

  useEffect(() => {
    if (!open) return;
    setProgress(loadProgress(exam.id, exam.durationSeconds));
  }, [open, exam.id, exam.durationSeconds]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current.timeRemainingSeconds <= 1) {
          const next = { ...current, timeRemainingSeconds: 0 };
          saveProgress(exam.id, next);
          return next;
        }

        const next = {
          ...current,
          timeRemainingSeconds: current.timeRemainingSeconds - 1,
        };
        saveProgress(exam.id, next);
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [open, exam.id]);

  function handleClose() {
    saveProgress(exam.id, progress);
    onClose();
  }

  function handleSelectAnswer(answerId: string) {
    if (!currentQuestion) return;

    persistProgress({
      ...progress,
      selectedAnswers: {
        ...progress.selectedAnswers,
        [currentQuestion.id]: answerId,
      },
    });
  }

  function handleQuestionChange(index: number) {
    persistProgress({
      ...progress,
      currentQuestionIndex: index,
    });
  }

  if (!open || !currentQuestion) return null;

  return (
    <div className="fixed inset-0 z-[300] flex flex-col bg-[#445bc3]">
      <div className="relative px-4 pb-6 pt-5">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close exam"
          className="absolute left-4 top-5 flex h-10 w-10 cursor-pointer items-center justify-center border-none bg-transparent text-2xl text-white"
        >
          <BackIcon className="h-6 w-6" />
        </button>

        <div className="mx-auto flex w-fit items-center gap-2 rounded-lg bg-[#fbd500] px-6 py-2 text-[#333] shadow-[0_0_50px_15px_rgba(255,255,255,0.2)]">
          <ClockIcon className="h-5 w-5" />
          <span className="text-xl font-medium">
            {formatTime(progress.timeRemainingSeconds)}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {exam.questions.map((question, index) => (
            <button
              key={question.id}
              type="button"
              onClick={() => handleQuestionChange(index)}
              className={cn(
                "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-base font-medium transition-colors",
                progress.currentQuestionIndex === index
                  ? "border-white bg-white text-[#455cc3]"
                  : "border-white bg-transparent text-white",
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {lessonTitle && (
          <p className="mt-4 text-center text-sm text-white/80">{lessonTitle}</p>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <div className="mx-auto max-w-2xl rounded-[10px] bg-white p-5 shadow-[0_0_20px_10px_rgba(68,91,195,0.14)]">
          <p className="mb-6 text-xl font-medium leading-relaxed text-[#333]">
            {progress.currentQuestionIndex + 1}. {currentQuestion.text}
          </p>

          <ul className="m-0 list-none space-y-5 p-0">
            {currentQuestion.answers.map((answer) => {
              const isSelected = selectedAnswerId === answer.id;

              return (
                <li key={answer.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectAnswer(answer.id)}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-5 rounded-[5px] border-none px-2.5 py-0 text-left shadow-[0_0_20px_10px_rgba(68,91,195,0.14)] transition-colors",
                      isSelected ? "bg-[#445bc3]" : "bg-white",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[5px] border",
                        isSelected
                          ? "border-white bg-transparent"
                          : "border-[#4e63c6] bg-transparent",
                      )}
                    >
                      <span
                        className={cn(
                          "block h-2 w-2 rounded-full",
                          isSelected ? "bg-white" : "bg-[#333]",
                        )}
                      />
                    </span>
                    <span
                      className={cn(
                        "py-5 text-base font-medium",
                        isSelected ? "text-white" : "text-[#111]",
                      )}
                    >
                      {answer.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
