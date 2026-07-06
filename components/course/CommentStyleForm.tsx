"use client";

import { ArrowRightIcon } from "@/components/icons";

type CommentStyleFormProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  submitLabel?: string;
  textareaId: string;
};

export function CommentStyleForm({
  value,
  onChange,
  onSubmit,
  placeholder = "Write a Comment",
  submitLabel = "Submit Review",
  textareaId,
}: CommentStyleFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={textareaId} className="sr-only">
        {placeholder}
      </label>
      <textarea
        id={textareaId}
        name={textareaId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-[170px] w-full resize-y rounded-[3px] border-none p-[30px] text-lg font-medium text-[#111] shadow-[0_0_30.5px_15px_rgba(0,0,0,0.04)] outline-none placeholder:text-text-secondary"
      />
      <button
        type="submit"
        className="mt-[30px] flex h-[60px] w-[215px] cursor-pointer items-center justify-center gap-2.5 rounded-[3px] border-none bg-submit-btn text-base font-semibold text-white"
      >
        <span>{submitLabel}</span>
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
