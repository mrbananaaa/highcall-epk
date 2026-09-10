import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

export function Container({
  children,
  className,
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        !clean && "max-w-6xl px-4 sm:px-6 lg:px-8 2xl:max-w-7xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
