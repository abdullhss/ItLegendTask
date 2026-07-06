import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils/cn";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-5 text-sm text-[#666]", className)}>
      <Container>
        <ol className="flex list-none items-center gap-1.5 py-[15px]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRightIcon className="h-4 w-4 text-[#2e2e2e]" />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-base capitalize text-[#2e2e2e] no-underline transition-colors hover:text-black"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "text-base capitalize",
                      isLast ? "font-medium text-black" : "text-[#2e2e2e]",
                    )}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
