import Link from "next/link";

const focusAreas = [
  {
    title: "Distributed Systems",
    description:
      "Large-scale infrastructure, databases, performance, and reliability engineering.",
  },
  {
    title: "Self-Hosted Platforms",
    description:
      "Home automation, local AI infrastructure, storage, and personal cloud systems.",
  },
  {
    title: "Applied AI Projects",
    description:
      "News clustering, agent workflows, local tooling, and practical ML systems.",
  },
];

const featuredProjects = [
  {
    title: "News Aggregation Platform",
    description:
      "A self-hosted news pipeline for ingesting, clustering, and organizing stories with room for summarization and ranking.",
    href: "/projects",
    tag: "Python • Postgres • ML",
  },
  {
    title: "Home Assistant Infrastructure",
    description:
      "A growing home automation stack integrating devices, sensors, cameras, remote access, and self-hosted services.",
    href: "/projects",
    tag: "Home Assistant • Synology • Tailscale",
  },
  {
    title: "OpenClaw Experiments",
    description:
      "Exploring agent orchestration, workflow systems, and practical ways to structure tool-using AI systems.",
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
            Building distributed systems, infrastructure, and practical AI.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Staff Software Engineer / Technical Lead Manager at Google. I work
            on databases, large-scale systems, performance, and infrastructure,
            and I build side projects around self-hosting, automation, and ML.
          </p>

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
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Focus Areas
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              What I spend time on
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
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
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {project.tag}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-zinc-100">
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