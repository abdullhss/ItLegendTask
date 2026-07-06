import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { courseDetails } from "@/lib/data/course-details";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | Online Learning Platform",
  description: "Browse available courses.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container className="py-12">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Courses</h1>
        <Link
          href="/courses/course-details"
          className="block rounded-lg border border-border p-6 transition-colors hover:border-teal hover:bg-teal-light/30"
        >
          <h2 className="text-lg font-semibold text-foreground">
            {courseDetails.title}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {courseDetails.materials[0].value} · {courseDetails.materials[1].value} lessons
          </p>
        </Link>
      </Container>
    </main>
  );
}
