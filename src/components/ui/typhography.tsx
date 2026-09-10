"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { STriggerVars } from "@/lib/gsap";

interface SectionTitleProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  sectionNumber: number;
}

export function SectionTitle({
  children,
  sectionNumber,
  className,
  ...props
}: SectionTitleProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: STriggerVars.base(containerRef.current),
      });

      tl.from(".reveal-stagger", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.in",
      }).from(".reveal-line", {
        width: 0,
        duration: 0.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={cn("flex justify-center md:mb-16", className)}
      {...props}
    >
      <div className="flex w-full items-end space-x-6 md:items-center">
        <div className="flex flex-col items-start space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-2">
          <span className="reveal-stagger bg-primary/10 px-1.5 py-1 font-sans text-xs text-primary backdrop-blur-lg md:mb-1">
            SEC_0{sectionNumber}
          </span>

          <h2 className="reveal-stagger font-display text-4xl leading-0 font-bold tracking-tight text-on-surface select-none">
            {children}
          </h2>
        </div>

        <div className="reveal-stagger flex-1">
          <div className="reveal-line h-0.5 w-full rounded-full bg-secondary-container/80"></div>
        </div>
      </div>
    </div>
  );
}
