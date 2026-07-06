import type { CourseDetails } from "@/lib/types/course";

export const courseDetails: CourseDetails = {
  id: "1",
  slug: "starting-seo-as-your-home",
  title: "Starting SEO as your Home",
  videoThumbnail: "/course-45.jpg",
  videoUrl: "https://www.youtube.com/watch?v=knj1eZ7sr9U",
  materials: [
    { icon: "duration", label: "Duration", value: "3 weeks" },
    { icon: "lessons", label: "Lessons", value: "8" },
    { icon: "enrolled", label: "Enrolled", value: "65 students" },
    { icon: "language", label: "Language", value: "English" },
  ],
  comments: [
    {
      id: "1",
      author: "Goes Here",
      avatarUrl: "/user1-image.jpg",
      date: "Oct 10, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "2",
      author: "Goes Here",
      avatarUrl: "/user2-image.jpg",
      date: "Oct 10, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "3",
      author: "Goes Here",
      avatarUrl: "/user3-image.jpg",
      date: "Oct 10, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  progress: 63,
  curriculum: [
    {
      id: "week-1",
      title: "Week 1-4",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { id: "l1", title: "Introduction", locked: true },
        { id: "l2", title: "Course Overview", locked: true },
        {
          id: "l3",
          title: "Course Overview",
          badges: [
            { label: "0 QUESTION", variant: "question" },
            { label: "10 MINUTES", variant: "duration" },
          ],
          locked: false,
          pdfUrl: "/Abdullah Yosry - Resume.pdf",
        },
        {
          id: "l4",
          title: "Course Exercise / Reference Files",
          locked: false,
          hasExam: true,
        },
        {
          id: "l5",
          title: "Code Editor Installation (Optional if you have one)",
          locked: true,
        },
        { id: "l6", title: "Embedding PHP in HTML", locked: true },
      ],
    },
    {
      id: "week-2",
      title: "Week 5-8",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { id: "l7", title: "Defining Functions", locked: true },
        { id: "l8", title: "Function Parameters", locked: true },
        {
          id: "l9",
          title: "Return Values From Functions",
          badges: [
            { label: "2 QUESTION", variant: "question" },
            { label: "15 MINUTES", variant: "duration" },
          ],
          locked: false,
          hasExam: true,
        },
        { id: "l10", title: "Global Variable and Scope", locked: true },
        {
          id: "l11",
          title: "Newer Way of creating a Constant",
          locked: true,
        },
        { id: "l12", title: "Constants", locked: true },
      ],
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "#" },
    { label: "Courses", href: "#" },
    { label: "Course Details" },
  ],
};
