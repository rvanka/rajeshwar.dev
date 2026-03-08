import Link from "next/link";

const focusAreas = [
  {
    title: "Cloud Databases",
    description:
      "Technical leadership and engineering work around Cloud Spanner, large-scale data systems, and database infrastructure.",
  },
  {
    title: "AI Infrastructure",
    description:
      "Work spanning AI-related infrastructure, data systems, and applied ML projects inside and outside work.",
  },
  {
    title: "Self-Hosted Systems",
    description:
      "Personal infrastructure across home automation, local services, storage, and practical developer tooling.",
  },
];

const featuredProjects = [
  {
    title: "Home Assistant Infrastructure",
    description:
      "A self-hosted automation stack integrating devices, sensors, cameras, remote access, and local services.",
    href: "/projects",
    tag: "Home Assistant • Synology • Tailscale",
  },
  {
    title: "OpenClaw Experiments",
    description:
      "Exploring agent orchestration, workflow systems, and tool-using AI patterns.",
    href: "/projects",
    tag: "Agents • AI Workflows",
  },
];

export default function Home() {
  return (
    <main className="space-y-24 pb-24">
      <section className="pt-8 md:pt-16">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Rajeshwar Vanka
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Cloud databases, distributed systems, and AI infrastructure.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
            Staff Software Engineer / Technical Lead Manager at Google, working
            on Cloud Spanner and AI-related infrastructure. My background spans
            large-scale databases, performance engineering, compilers, and
            distributed systems, and I build side projects around self-hosting,
            news intelligence, automation, and applied ML systems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <a
              href="mailto:rajeshwar.vanka@gmail.com"
              className="transition hover:text-zinc-200"
            >
              rajeshwar.vanka@gmail.com
            </a>

            <span className="hidden md:inline text-zinc-700">•</span>

            <a
              href="https://github.com/rvanka"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-200"
            >
              GitHub
            </a>

            <span className="hidden md:inline text-zinc-700">•</span>

            <a
              href="https://www.linkedin.com/in/rajeshwarvanka/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-200"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </Link>
            <Link
              href="/publications"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Publications
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Focus Areas
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            What I work on
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Featured projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            See all projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {project.tag}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 text-sm text-zinc-300">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}