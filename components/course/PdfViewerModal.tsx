"use client";

import { Modal } from "@/components/ui/Modal";

type PdfViewerModalProps = {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
};

export function PdfViewerModal({
  open,
  onClose,
  pdfUrl,
  title = "Document Preview",
}: PdfViewerModalProps) {
  const encodedUrl = encodeURI(pdfUrl);

  return (
    <Modal
      open={open}
      onClose={onClose}
      hideDefaultHeader
      className="flex h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-lg p-0"
      contentClassName="flex min-h-0 flex-1 flex-col"
    >
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4 pr-14">
        <h3 className="truncate text-lg font-semibold text-[#333]">{title}</h3>
      </div>

      <div className="min-h-0 flex-1 bg-[#525659]">
        <iframe
          src={encodedUrl}
          title={title}
          className="h-full w-full border-0"
        />
      </div>
    </Modal>
  );
}
