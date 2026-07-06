"use client";

import { useState } from "react";
import {
  ChatIcon,
  HelpIcon,
  LeaderboardIcon,
  ListIcon,
} from "@/components/icons";
import { AskQuestionModal } from "./AskQuestionModal";
import { LeaderboardModal } from "./LeaderboardModal";

type CurriculumIconsProps = {
  courseName: string;
};

const iconButtonClass =
  "flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border-2 border-[#f5f9fa] text-lg text-gray-500 transition-all duration-300 hover:bg-gray-500 hover:text-[#f5f9fa]";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CurriculumIcons({ courseName }: CurriculumIconsProps) {
  const [askQuestionOpen, setAskQuestionOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  return (
    <>
      <div className="mt-10 max-md:mt-5">
        <ul className="m-0 flex list-none items-center gap-2.5 p-0">
          <li>
            <button
              type="button"
              aria-label="Go to course materials"
              className={iconButtonClass}
              onClick={() => scrollToSection("course-materials")}
            >
              <ListIcon className="h-[18px] w-[18px]" />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Go to comments"
              className={iconButtonClass}
              onClick={() => scrollToSection("course-comments")}
            >
              <ChatIcon className="h-[18px] w-[18px]" />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Ask a question"
              className={iconButtonClass}
              onClick={() => setAskQuestionOpen(true)}
            >
              <HelpIcon className="h-[18px] w-[18px]" />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Open leaderboard"
              className={iconButtonClass}
              onClick={() => setLeaderboardOpen(true)}
            >
              <LeaderboardIcon className="h-[18px] w-[18px]" />
            </button>
          </li>
        </ul>
      </div>

      <AskQuestionModal
        open={askQuestionOpen}
        onClose={() => setAskQuestionOpen(false)}
      />
      <LeaderboardModal
        open={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
        courseName={courseName}
      />
    </>
  );
}
