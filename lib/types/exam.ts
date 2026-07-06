export type ExamAnswer = {
  id: string;
  label: string;
};

export type ExamQuestion = {
  id: string;
  text: string;
  answers: ExamAnswer[];
};

export type Exam = {
  id: string;
  title: string;
  durationSeconds: number;
  questions: ExamQuestion[];
};

export type ExamProgress = {
  currentQuestionIndex: number;
  selectedAnswers: Record<string, string>;
  timeRemainingSeconds: number;
};
