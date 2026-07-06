"use client";

import { useState } from "react";
import { CommentStyleForm } from "./CommentStyleForm";

export function CommentForm() {
  const [comment, setComment] = useState("");

  function handleSubmit() {
    setComment("");
  }

  return (
    <div className="mt-0">
      <CommentStyleForm
        textareaId="comment"
        value={comment}
        onChange={setComment}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
