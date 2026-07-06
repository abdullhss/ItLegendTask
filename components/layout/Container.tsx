import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1300px] px-0 max-md:mx-[15px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
