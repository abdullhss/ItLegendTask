import Image from "next/image";
import type { Comment } from "@/lib/types/course";

type CommentCardProps = {
  comment: Comment;
  isFirst?: boolean;
};

export function CommentCard({ comment, isFirst }: CommentCardProps) {
  return (
    <article
      className={`flex items-start gap-[30px] border-b border-border py-[30px] last:border-b-0 ${
        isFirst ? "pt-0" : ""
      }`}
    >
      <div className="shrink-0">
        <Image
          src={comment.avatarUrl ?? ""}
          alt={`${comment.author} image`}
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-cover"
        />
      </div>
      <div className="mt-2.5 min-w-0 flex-1">
        <h4 className="text-lg font-semibold text-[#333]">
          Student Name: <span>{comment.author}</span>
        </h4>
        <time
          className="mt-2.5 block text-[15px] font-medium text-text-secondary"
          dateTime={comment.date}
        >
          {comment.date}
        </time>
        <p className="mt-5 max-w-[90%] text-base leading-[1.4] text-text-secondary">
          {comment.content}
        </p>
      </div>
    </article>
  );
}
