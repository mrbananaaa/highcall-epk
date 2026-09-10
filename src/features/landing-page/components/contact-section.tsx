"use client";

import { SplitText } from "gsap/all";
import ContactList from "./contact-list";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { STriggerVars } from "@/lib/gsap";

export default function ContactSection() {
  const hookText =
    "Line's open 24/7. Drop a call or text on WhatsApp, hit my IG, or send an email.";

  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: STriggerVars.base(containerRef.current),
      });

      const titleSplit = SplitText.create(".title-split", {
        type: "words",
      });

      tl.from(".reveal-stagger", {
        scrollTrigger: STriggerVars.base(containerRef.current),
        y: 50,
        opacity: 0,
        stagger: 0.5,
        duration: 1,
        ease: "expo.out",
      }).from(titleSplit.words, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex h-[60svh] items-center justify-center md:h-full"
    >
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-20">
        <ContactList />

        <div className="reveal-stagger hidden md:block">
          <h1 className="max-w-xl font-display text-5xl leading-14 font-black select-none">
            <div className="title-split absolute max-w-xl text-primary-container/40 blur-sm">
              {hookText}
            </div>

            <div className="title-split relative max-w-xl text-on-surface">
              {hookText}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
