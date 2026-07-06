"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { CommentStyleForm } from "./CommentStyleForm";

const ASK_QUESTION_DRAFT_KEY = "course-ask-question-draft";

type AskQuestionModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AskQuestionModal({ open, onClose }: AskQuestionModalProps) {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const savedDraft = sessionStorage.getItem(ASK_QUESTION_DRAFT_KEY);
    if (savedDraft) setQuestion(savedDraft);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(ASK_QUESTION_DRAFT_KEY, question);
  }, [question]);

  function handleSubmit() {
    sessionStorage.removeItem(ASK_QUESTION_DRAFT_KEY);
    setQuestion("");
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose} title="Ask a Question">
      <CommentStyleForm
        textareaId="ask-question"
        value={question}
        onChange={setQuestion}
        onSubmit={handleSubmit}
        placeholder="Write your question..."
        submitLabel="Submit Question"
      />
    </Modal>
  );
}
