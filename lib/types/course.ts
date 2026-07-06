export type CourseMaterial = {
  icon:
    | "duration"
    | "instructor"
    | "price"
    | "lessons"
    | "enrolled"
    | "language"
    | "certificate";
  label: string;
  value: string;
};

export type Comment = {
  id: string;
  author: string;
  avatarUrl?: string;
  date: string;
  content: string;
};

export type LessonBadge = {
  label: string;
  variant: "question" | "duration";
};

export type Lesson = {
  id: string;
  title: string;
  badges?: LessonBadge[];
  locked: boolean;
  pdfUrl?: string;
  hasExam?: boolean;
};

export type CurriculumWeek = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type CourseDetails = {
  id: string;
  slug: string;
  title: string;
  videoThumbnail: string;
  videoUrl: string;
  materials: CourseMaterial[];
  comments: Comment[];
  progress: number;
  curriculum: CurriculumWeek[];
  breadcrumbs: { label: string; href?: string }[];
};
