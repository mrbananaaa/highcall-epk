import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50">
      <Link href="/" className="text-2xl font-bold tracking-widest text-foreground">
        HIGHCALL
      </Link>
      <nav className="flex gap-8 text-sm font-medium text-secondary">
        <Link href="#profile" className="hover:text-primary transition-colors">
          PROFILE
        </Link>
        <Link href="#experience" className="hover:text-primary transition-colors">
          EXPERIENCE
        </Link>
        <Link href="#contact" className="hover:text-primary transition-colors">
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
