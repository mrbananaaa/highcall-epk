"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, useContext, useEffect, useRef } from "react";
import { ScrollSmoother } from "gsap/all";

type ScrollContextType = {};

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const smoother = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    const saveScroll = () => {
      localStorage.setItem("scrollPos", String(window.scrollY));
    };

    const savedPos = localStorage.getItem("scrollPos");
    if (savedPos) {
      gsap.to(window, { scrollTo: Number(savedPos), duration: 0.5 });
      localStorage.removeItem("scrollPos");
    }

    window.addEventListener("beforeunload", saveScroll);

    return () => {
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      smoothTouch: 0.2,
      effects: true,
    });
  });

  return <ScrollContext.Provider value={{}}>{children}</ScrollContext.Provider>;
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context)
    throw new Error("useScroll must be used within a ScrollProvider");

  return context;
}
