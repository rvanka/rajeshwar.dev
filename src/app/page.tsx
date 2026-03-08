import Link from "next/link";

const systems = [
  "Cloud Spanner",
  "Cassandra",
  "Distributed Systems",
  "AI / Data Infrastructure",
  "AutoFDO",
  "MATLAB JIT",
  "Home Assistant",
  "News Platform",
  "Self-Hosted Infra",
];

const highlights = [
  {
    title: "What I do",
    description:
      "I work on large-scale databases, distributed systems, performance, and infrastructure, with a background spanning compilers and developer systems.",
  },
  {
    title: "At Google",
    description:
      "My recent work includes Cloud Spanner, customer-facing technical leadership, and infrastructure work at the intersection of databases and AI/data systems.",
  },
  {
    title: "At home",
    description:
      "I build projects around self-hosting, home automation, news intelligence, and applied ML systems.",
  },
];

const featuredProjects = [
  {
    title: "News Aggregation Platform",
    description:
      "A self-hosted system for ingesting, clustering, and organizing news stories, with room for summarization, ranking, and timeline intelligence.",
    href: "/projects",
    tag: "Python • Postgres • ML",
  },
  {
    title: "Home Assistant Infrastructure",
    description:
      "A personal automation stack spanning Home Assistant, local services, remote access, storage, and self-hosted integrations.",
    href: "/projects",
    tag: "Home Assistant • Synology • Tailscale",
  },
  {
    title: "OpenClaw Experiments",
    description:
      "Exploring agent orchestration, workflow systems, and practical patterns for tool-using AI systems.",
    href: "/projects",
    tag: "Agents • AI Workflows",
  },
];

const featuredWriting = [
  {
    title: "Introducing Cassandra-compatible API in Cloud Spanner",
    description:
      "Announcing the Cassandra-compatible API for Cloud Spanner, enabling applications built for Cassandra to run on Spanner’s globally distributed architecture.",
    href: "https://cloud.google.com/blog/products/databases/introducing-cassandra-compatible-api-in-spanner",
    tag: "Cloud Spanner • Cassandra API",
  },
  {
    title: "Cloud Spanner doubles the number of updates per transaction",
    description:
      "An engineering deep dive into improvements that doubled the number of updates allowed per transaction in Cloud Spanner.",
    href: "https://cloud.google.com/blog/products/databases/cloud-spanner-doubles-the-number-of-updates-per-transaction",
    tag: "Cloud Spanner • Performance",
  },
];

export default function Home() {
  return (
    <main className="space-y-24 pb-24 pt-10 md:pt-16">
     <section className="max-w-4xl">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        About me
      </p>

      <h1 className="mt-4 text-xl font-semibold tracking-tight text-white md:text-2xl lg:text-3xl">
        Staff Software Engineer / Technical Lead Manager focused on
        databases, distributed systems, and AI/data infrastructure.
      </h1>

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
          href="/resume"
          className="rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-white/10"
        >
          Experience & Resume
        </Link>

        <Link
          href="/publications"
          className="rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-white/10"
        >
          Publications
        </Link>
      </div>
    </section> 

    <section>
      <div className="mb-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Systems I’ve worked on
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {systems.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </section>

      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            A few ways to navigate my work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm"
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
              Featured work
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Projects and systems I’ve been building
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
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
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

      <section>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Writing
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            Selected articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredWriting.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {post.tag}
              </div>
          
              <h3 className="mt-4 text-xl font-semibold text-white">
                {post.title}
              </h3>
          
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {post.description}
              </p>
          
              <div className="mt-6 text-sm text-zinc-300">
                Read article →
              </div>
            </a>
          ))}
        </div>
      </section>
      </main>
  );
}