"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      anchors: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find closest anchor tag up the DOM tree
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");

        // Check if it's an internal element hash link on the active page
        if (href && href.startsWith("#")) {
          e.preventDefault(); // Stop standard jarring jumps

          if (href === "#") {
            lenis.scrollTo(0); // Top of the page
          } else {
            lenis.scrollTo(href); // Smoothly glide down to id target
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
