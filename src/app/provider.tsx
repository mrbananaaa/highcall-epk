"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  SplitText,
} from "gsap/all";
import { Analytics } from "@vercel/analytics/next";
import BaseLayout from "@/components/layouts/base-layout";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  SplitText,
);

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      <BaseLayout>{children}</BaseLayout>

      <Analytics />
    </>
  );
}
