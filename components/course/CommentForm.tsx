"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function CommentForm() {
  const [comment, setComment] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setComment("");
  }

  return (
    <div className="mt-0">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment" className="sr-only">
          Write a comment
        </label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Write a Comment"
          className="h-[170px] w-full resize-y rounded-[3px] border-none p-[30px] text-lg font-medium text-[#111] shadow-[0_0_30.5px_15px_rgba(0,0,0,0.04)] outline-none placeholder:text-text-secondary"
        />
        <button
          type="submit"
          className="mt-[30px] flex h-[60px] w-[215px] cursor-pointer items-center justify-center gap-2.5 rounded-[3px] border-none bg-submit-btn text-base font-semibold text-white"
        >
          <span>Submit Review</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
