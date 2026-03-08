import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 border-b border-zinc-800 mb-16">

      <Link href="/" className="text-lg font-semibold">
        Rajeshwar
      </Link>

      <div className="flex gap-8 text-gray-400 text-sm">

        <Link href="/about" className="hover:text-white transition">
          About
        </Link>

        <Link href="/projects" className="hover:text-white transition">
          Projects
        </Link>

        <Link href="/publications" className="hover:text-white transition">
          Publications
        </Link>

        <Link href="/blog" className="hover:text-white transition">
          Writing
        </Link>

        <Link href="/resume" className="hover:text-white transition">
          Resume
        </Link>

      </div>

    </nav>
  );
}