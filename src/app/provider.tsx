"use client";

import BaseLayout from "@/components/layouts/base-layout";
import LenisProvider from "@/components/layouts/lenis-provider";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      <LenisProvider>
        <BaseLayout>{children}</BaseLayout>
      </LenisProvider>
    </>
  );
}
