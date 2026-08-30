import * as motion from "motion/react-client";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  sectionNumber: number;
}

export function SectionTitle({
  children,
  sectionNumber,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <motion.div
      // initial={{
      //   opacity: 0,
      //   x: -75,
      // }}
      // whileInView={{
      //   opacity: 1,
      //   x: 0,
      // }}
      // transition={{
      //   duration: 0.8,
      //   ease: [0.17, 0.55, 0.55, 1], // Smooth cubic-bezier curve
      // }}
      // viewport={{
      //   once: false,
      //   amount: 0.2,
      // }}
      className={cn("flex justify-center", className)}
      {...props}
    >
      <div className="mx-auto flex w-full items-center space-x-6 md:max-w-4xl">
        <div className="flex items-center space-x-2">
          <span className="bg-primary/10 px-1.5 py-1 font-sans text-xs text-primary backdrop-blur-lg">
            SEC_0{sectionNumber}
          </span>
          <h2 className="font-display text-4xl leading-0 font-bold tracking-tight text-on-surface select-none">
            {children}
          </h2>
        </div>
        <div className="hidden flex-1 md:block">
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            whileInView={{
              width: "100%",
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            viewport={{
              once: false,
              amount: 0.1,
            }}
            className="h-0.5 rounded-full bg-secondary-container/80"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

interface SectionSubtitleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function SectionSubtitle({
  children,
  className,
  ...props
}: SectionSubtitleProps) {
  return (
    <motion.div
      className={cn(
        "mb-2 -ml-1 box-content w-fit bg-surface-bright px-1 font-display font-medium text-on-primary-container",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
