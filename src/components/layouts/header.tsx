"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoHighcall from "../../../public/logo-highcall.png";
import { useScrollTo } from "@/hooks/use-scroll-to";

const NAV_LIST = [
  ["PROFILE", "profile"],
  ["CONTACT", "contact"],
  ["GALLERY", "gallery"],
] as const;

export default function Header() {
  const { scrollTo } = useScrollTo();

  return (
    <header className="nav fixed top-0 left-0 z-50 w-full backdrop-blur-lg select-none">
      <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link onClick={() => scrollTo("#")} scroll={false} href="#">
          <div className="w-28">
            <Image
              alt="higcall-logo"
              sizes="100vw"
              src={LogoHighcall}
              width={168}
              height={54}
              preload
              quality={50}
              className="h-auto w-full"
            />
          </div>
        </Link>

        <nav className="text-md flex cursor-default gap-1.5 font-sans font-bold tracking-tight text-secondary">
          {NAV_LIST.map(([title, to], i) => {
            return (
              <React.Fragment key={title}>
                <Link
                  onClick={() => scrollTo(`#${to}`)}
                  scroll={false}
                  href={`#${to}`}
                  className="cursor-pointer tracking-tight text-primary transition-all hover:text-white"
                >
                  {title}
                </Link>

                {i < NAV_LIST.length - 1 && <span>//</span>}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
