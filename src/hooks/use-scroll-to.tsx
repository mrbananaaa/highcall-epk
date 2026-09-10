"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useScrollTo = () => {
  const { contextSafe } = useGSAP();

  const scrollTo = contextSafe((target: string) => {
    gsap.to(window, {
      duration: 0.2,
      ease: "none",
      scrollTo: {
        y: target === "#" ? 0 : target,
        offsetY: 80,
      },
    });
  });

  return {
    scrollTo,
  };
};
