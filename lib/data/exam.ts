import type { Exam } from "@/lib/types/exam";

export const defaultExam: Exam = {
  id: "course-exam-1",
  title: "Course Exam",
  durationSeconds: 10 * 60 + 32,
  questions: [
    {
      id: "q1",
      text: "Among the following status of India, which one has the oldest rock formations in the country?",
      answers: [
        { id: "q1-a", label: "Asam" },
        { id: "q1-b", label: "Bahar" },
        { id: "q1-c", label: "Kamaltake" },
        { id: "q1-d", label: "Utter Pardesh" },
      ],
    },
    {
      id: "q2",
      text: "Which SEO technique focuses on improving website loading speed?",
      answers: [
        { id: "q2-a", label: "Keyword stuffing" },
        { id: "q2-b", label: "Technical SEO" },
        { id: "q2-c", label: "Link farming" },
        { id: "q2-d", label: "Hidden text" },
      ],
    },
    {
      id: "q3",
      text: "What does SERP stand for in digital marketing?",
      answers: [
        { id: "q3-a", label: "Search Engine Results Page" },
        { id: "q3-b", label: "Site Engagement Rate Protocol" },
        { id: "q3-c", label: "Structured Email Response Plan" },
        { id: "q3-d", label: "Social Engagement Ranking Point" },
      ],
    },
    {
      id: "q4",
      text: "Which HTML element is most appropriate for the main page heading?",
      answers: [
        { id: "q4-a", label: "<div>" },
        { id: "q4-b", label: "<h1>" },
        { id: "q4-c", label: "<span>" },
        { id: "q4-d", label: "<p>" },
      ],
    },
    {
      id: "q5",
      text: "What is the primary purpose of meta descriptions?",
      answers: [
        { id: "q5-a", label: "Increase page load speed" },
        { id: "q5-b", label: "Summarize page content in search results" },
        { id: "q5-c", label: "Hide keywords from users" },
        { id: "q5-d", label: "Replace title tags" },
      ],
    },
  ],
};

export function getExamProgressKey(examId: string) {
  return `course-exam-progress-${examId}`;
}
