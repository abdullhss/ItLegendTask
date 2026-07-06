import Link from "next/link";
import {
  ChatIcon,
  HelpIcon,
  ListIcon,
  UserPlusIcon,
} from "@/components/icons";

const curriculumLinks = [
  { label: "Course materials", href: "#course-materials", icon: ListIcon },
  { label: "Course comments", href: "#course-comments", icon: ChatIcon },
  { label: "Help", href: "#", icon: HelpIcon },
  { label: "Invite user", href: "#", icon: UserPlusIcon },
] as const;

export function CurriculumIcons() {
  return (
    <div className="mt-10 max-md:mt-5">
      <ul className="m-0 flex list-none items-center gap-2.5 p-0">
        {curriculumLinks.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              aria-label={label}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 border-[#f5f9fa] text-lg text-gray-500 transition-all duration-300 hover:bg-gray-500 hover:text-[#f5f9fa]"
            >
              <Icon className="h-[18px] w-[18px]" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
