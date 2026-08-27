import Link from "next/link";
import React from "react";

const NAV_LIST = [
  ["PROFILE", "profile"],
  ["EXPERIENCE", "experience"],
  ["CONTACT", "contact"],
] as const;

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between p-6">
      <Link
        href="/"
        className="font-display text-2xl font-bold tracking-tight text-primary"
      >
        HIGHCALL
      </Link>

      <nav className="text-md flex cursor-default gap-1.5 font-sans font-bold tracking-tight text-secondary">
        {NAV_LIST.map(([title, to], i) => {
          return (
            <React.Fragment key={title}>
              <Link
                href={"#" + to}
                className="cursor-pointer tracking-tight text-primary transition-all hover:text-white"
              >
                {title}
              </Link>
              {i < NAV_LIST.length - 1 && <span>//</span>}
            </React.Fragment>
          );
        })}
      </nav>
    </header>
  );
}
