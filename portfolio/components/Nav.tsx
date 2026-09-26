import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-hairline sticky top-0 bg-ink/90 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-hairline shrink-0">
            <Image
              src="/my4to.jpg"
              alt="Movindu Ayanaja"
              width={36}
              height={36}
              className="object-cover w-full h-full object-top"
            />
          </div>
          <span className="font-display text-lg text-paper group-hover:text-amber transition-colors">
            Movindu Ayanaja
          </span>
        </Link>
        <nav className="flex gap-6 text-sm text-muted">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}