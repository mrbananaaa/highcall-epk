"use client";

import gsap from "gsap";
import { LINK_URLS, CONTACT_LIST } from "@/config/constants";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { STriggerVars } from "@/lib/gsap";
import { useScrollTo } from "@/hooks/use-scroll-to";

interface AnimatedElement extends HTMLElement {
  animation?: gsap.core.Tween;
}

export default function HeroBanner() {
  const containerRef = useRef(null);
  const { scrollTo } = useScrollTo();

  useGSAP(
    () => {
      gsap.from(".reveal-element", {
        scrollTrigger: STriggerVars.base(containerRef.current),
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        stagger: {
          each: 0.2,
        },
        ease: "expoScale(0.5,7,none)",
      });

      const scaleTextElements =
        gsap.utils.toArray<AnimatedElement>(".scale-text");

      scaleTextElements.forEach((el) => {
        el.animation = gsap.to(el, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
        });
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.play();
  const handleMouseLeave = (e: React.MouseEvent<AnimatedElement>) =>
    e.currentTarget.animation?.reverse();

  return (
    <div ref={containerRef} className="flex flex-col items-center md:pt-22">
      <Link target="_blank" href={`${LINK_URLS.IG}/${CONTACT_LIST.igUsername}`}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="scale-text z-10 cursor-pointer"
        >
          <h1 className="reveal-element hero-logo-text relative text-primary selection:bg-primary selection:text-primary-container">
            HIGHCALL
          </h1>

          {/* glow background */}
          <span className="reveal-element hero-logo-text absolute bg-primary text-primary/40 blur-3xl select-none">
            HIGHCALL
          </span>
        </div>
      </Link>

      <h2
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="reveal-element scale-text z-20 mt-10 font-semibold tracking-wide text-on-surface/60 transition-colors hover:text-white md:mt-20 md:text-lg 2xl:mt-30"
      >
        <Link
          href="#contact"
          onClick={() => scrollTo("#contact")}
          scroll={false}
        >
          BLITAR, ID — OPEN FOR BOOKING
        </Link>
      </h2>
    </div>
  );
}
