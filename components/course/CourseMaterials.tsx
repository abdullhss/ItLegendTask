import {
  ClockIcon,
  EnrolledIcon,
  GlobeIcon,
  LessonsIcon,
} from "@/components/icons";
import type { CourseMaterial } from "@/lib/types/course";

type CourseMaterialsProps = {
  materials: CourseMaterial[];
};

const iconMap = {
  duration: ClockIcon,
  lessons: LessonsIcon,
  enrolled: EnrolledIcon,
  language: GlobeIcon,
} as const;

function MaterialItem({ material }: { material: CourseMaterial }) {
  const Icon = iconMap[material.icon as keyof typeof iconMap];

  return (
    <div className="flex w-full items-center justify-between border-b border-border py-[15px] last:border-b-0">
      <div className="flex items-center gap-2">
        <span className="text-[18px] text-[#545454]">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span className="text-[18px] text-[#545454]">{material.label}:</span>
      </div>
      <div className="font-medium text-black">
        <span>{material.value}</span>
      </div>
    </div>
  );
}

function MaterialColumn({ items }: { items: CourseMaterial[] }) {
  return (
    <div className="w-full">
      {items.map((material) => (
        <MaterialItem key={material.label} material={material} />
      ))}
    </div>
  );
}

export function CourseMaterials({ materials }: CourseMaterialsProps) {
  return (
    <section id="course-materials" className="mt-[60px]">
      <h3 className="mb-5 text-[27px] font-semibold text-[#333]">
        Course Materials
      </h3>
      <div className="grid grid-cols-1 gap-0 rounded-[3px] px-[35px] py-5 shadow-[0_0_30.5px_15px_rgba(0,0,0,0.04)] sm:grid-cols-2 sm:gap-10 max-md:px-5">
        <MaterialColumn items={materials} />
        <MaterialColumn items={materials} />
      </div>
    </section>
  );
}
