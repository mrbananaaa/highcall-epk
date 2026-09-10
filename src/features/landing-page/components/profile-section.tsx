"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { STriggerVars } from "@/lib/gsap";
import { VisualFeed } from "./visual-feed";
import { getImages } from "@/config/constants";

export default function ProfileSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const titleSplit = SplitText.create(".title-split", {
        type: "words",
      });

      const paraSplit = SplitText.create(".para-split", {
        type: "words",
      });

      gsap.to(".reveal-to-top", {
        scrollTrigger: STriggerVars.base(containerRef.current),
        opacity: 1,
        translateY: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(".reveal-line", {
        scrollTrigger: STriggerVars.base(containerRef.current),
        opacity: 0,
        height: 0,
        duration: 2,
      });

      gsap.from(titleSplit.words, {
        scrollTrigger: STriggerVars.base(containerRef.current),
        y: 30,
        autoAlpha: 0,
        stagger: 0.05,
      });

      gsap.from(paraSplit.words, {
        scrollTrigger: STriggerVars.base(containerRef.current),
        autoAlpha: 0,
        stagger: 0.03,
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3">
        {/* LEFT */}
        <div className="z-20 flex w-full items-center justify-center md:col-span-2">
          <div className="space-y-4">
            {/* SYS STATUS  */}
            <div className="reveal-to-top mb-10 ml-2 flex w-fit items-center justify-center space-x-1.5 border-[1.5px] border-on-secondary bg-surface-dim px-2 py-1">
              <div className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-1.5 rounded-full bg-primary"></span>
              </div>

              <span className="font-sans text-[8px] font-medium tracking-widest text-secondary/80">
                SYS_STATUS: <span className="pl-1">ONLINE</span>
              </span>
            </div>

            {/* Big ass text */}
            <div className="reveal-to-top font-display text-7xl leading-14 font-black tracking-tighter select-none">
              <div className="title-split absolute max-w-xl text-primary-container/40 blur-sm">
                TURN UP THE SOUND. FEEL THE MOMENT.
              </div>

              <div className="title-split relative max-w-xl text-on-surface">
                TURN UP THE SOUND. FEEL THE MOMENT.
              </div>
            </div>

            <div className="reveal-to-top flex max-w-xl justify-center space-x-3">
              <div className="reveal-line w-1.25 rounded-full bg-primary"></div>

              <div className="para-split font-sans text-xs text-secondary md:text-sm">
                Highcall is a DJ based in Blitar, bringing a versatile blend of
                R&B, Hip-Hop, Amapiano, Afro, and Breakbeat to every set. With
                experience as a resident DJ at Caffe Di Blitar and Kopi Mantu,
                Highcall delivers energetic selections, smooth transitions, and
                a sound built to keep the crowd moving.
              </div>
            </div>
          </div>
        </div>

        {/* Visual Feed */}
        <div className="reveal-to-top hidden md:block">
          <VisualFeed
            feedNumber="01"
            title="• AT KOPI MANTU"
            alt="highcall-profile"
            image={getImages("kopiMantu", 0)}
            width={960}
            height={1280}
          />
        </div>
      </div>
    </div>
  );
}
