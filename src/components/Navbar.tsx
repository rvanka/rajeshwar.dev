"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Writing" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(11,13,16,0.7)] backdrop-blur-md">
      <nav className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Rajeshwar Vanka
        </Link>

        <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900 md:hidden"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-900 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-zinc-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
                onClick={() => setOpen(false)}
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
        </div>
      )}
    </header>
  );
}