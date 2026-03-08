import Link from "next/link"

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "30px" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/projects">Projects</Link> |{" "}
      <Link href="/publications">Publications</Link> |{" "}
      <Link href="/blog">Writing</Link> |{" "}
      <Link href="/resume">Resume</Link>
    </nav>
  )
}
