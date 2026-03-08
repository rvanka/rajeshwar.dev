import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Writing" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  return (
    <header className="border-b border-zinc-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Rajeshwar
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://github.com/rvanka"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rajeshwarvanka/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}