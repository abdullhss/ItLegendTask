"use client";

import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/icons";
import { cn } from "@/lib/utils/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  hideDefaultHeader?: boolean;
};

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
  contentClassName,
  hideDefaultHeader = false,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        className={cn(
          "relative w-full max-w-[640px] rounded-[3px] bg-white p-8 shadow-xl",
          className,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#666] transition-colors hover:bg-[#f5f5f5] hover:text-[#333]"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        {!hideDefaultHeader && title && (
          <div className="mb-6 flex items-center justify-between gap-4 pr-10">
            <h3 id="modal-title" className="text-[27px] font-semibold text-[#333]">
              {title}
            </h3>
          </div>
        )}

        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
}
