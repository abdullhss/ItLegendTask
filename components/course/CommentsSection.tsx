import type { Comment } from "@/lib/types/course";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";

type CommentsSectionProps = {
  comments: Comment[];
};

export function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <section id="course-comments" className="mt-[60px]">
      <h3 className="mb-5 text-[27px] font-semibold text-[#333]">Comments</h3>
      <div>
        {comments.map((comment, index) => (
          <CommentCard key={comment.id} comment={comment} isFirst={index === 0} />
        ))}
      </div>
      <CommentForm />
    </section>
  );
}
