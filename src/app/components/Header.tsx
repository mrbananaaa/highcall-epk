import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between p-6">
      <Link
        href="/"
        className="font-display text-2xl font-bold tracking-widest text-foreground"
      >
        HIGHCALL
      </Link>
      <nav className="flex gap-8 font-sans text-sm font-medium text-secondary">
        <Link href="#profile" className="transition-colors hover:text-primary">
          PROFILE
        </Link>
        <Link
          href="#experience"
          className="transition-colors hover:text-primary"
        >
          EXPERIENCE
        </Link>
        <Link href="#contact" className="transition-colors hover:text-primary">
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
