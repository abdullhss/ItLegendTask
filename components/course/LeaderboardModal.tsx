"use client";

import { Modal } from "@/components/ui/Modal";

const LEADERBOARD_SLOTS = 6;

type LeaderboardModalProps = {
  open: boolean;
  onClose: () => void;
  courseName: string;
};

export function LeaderboardModal({
  open,
  onClose,
  courseName,
}: LeaderboardModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      hideDefaultHeader
      className="max-w-[520px] rounded-[28px] px-8 pb-10 pt-12"
    >
      <div className="text-center">
        <p className="text-base font-medium text-[#1a1a4b]">{courseName}</p>
        <h2 className="mt-1 text-[32px] font-bold leading-tight text-[#1a1a4b]">
          Leaderboard
        </h2>
      </div>

      <div
        className="mt-8 flex items-center gap-3 rounded-xl bg-[#f5f9fa] px-5 py-4"
        dir="rtl"
      >
        <span className="shrink-0 text-5xl" aria-hidden="true">
          💪
        </span>
        <p className="flex-1 text-right text-[15px] leading-relaxed text-[#1a1a4b]">
          عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمل
          عايز أشوف اسمك في الليدر بورد هنا
        </p>
      </div>

      <div className="mt-6 rounded-[24px] bg-[#f5f9fa] p-5">
        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {Array.from({ length: LEADERBOARD_SLOTS }, (_, index) => (
            <li
              key={index}
              className="h-[52px] rounded-xl border border-[#e8ebf0] bg-white"
            />
          ))}
        </ul>
      </div>
    </Modal>
  );
}
