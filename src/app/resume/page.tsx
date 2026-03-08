const experience = [
  {
    company: "Google — Google-Wide Profiling / AutoFDO",
    role: "Senior Software Engineer",
    period: "Oct 2018 – Dec 2021",
    bullets: [
      "Worked on fleet-wide profiling and AutoFDO infrastructure.",
      "Improved profile generation, stack unwinding accuracy, and large-scale optimization workflows.",
      "Designed context-sensitive profiling systems delivering major compute and memory savings.",
      "Improved rollout and recovery performance in production systems.",
    ],
  },
  {
    company: "The MathWorks — MATLAB Core Execution Engine",
    role: "Senior Compiler Engineer",
    period: "Feb 2013 – Oct 2018",
    bullets: [
      "Part of the team that designed and implemented the JIT shipped in MATLAB R2015b.",
      "Built compiler and interpreter optimizations while preserving language semantics.",
      "Created tools to analyze MATLAB code and guide optimization strategy.",
    ],
  },
];

const projects = [
  {
    title: "News Aggregation Platform",
    description:
      "A self-hosted system for ingesting, clustering, and organizing news stories, with plans for summarization, ranking, and timeline exploration.",
    tags: ["Python", "Postgres", "ML", "Self-hosted"],
  },
  {
    title: "Home Assistant Infrastructure",
    description:
      "A growing personal automation platform across Home Assistant, local integrations, remote access, cameras, storage, and smart-device workflows.",
    tags: ["Home Assistant", "Synology", "Tailscale", "Automation"],
  },
  {
    title: "OpenClaw Experiments",
    description:
      "Experiments around agent orchestration, workflow systems, and structured tool-using AI patterns.",
    tags: ["Agents", "AI", "Workflows"],
  },
  {
    title: "Self-Hosted Systems",
    description:
      "Ongoing work across local AI services, storage, backup, sync, developer tooling, and personal cloud infrastructure.",
    tags: ["Infra", "Storage", "Self-hosting"],
  },
];

const education = [
  {
    school: "North Carolina State University",
    degree: "Ph.D. in Computer Engineering",
    period: "2007 – 2013",
    details: "Thesis: Efficient Data Dependence Profiling",
  },
  {
    school: "North Carolina State University",
    degree: "M.S. in Electrical and Computer Engineering",
    period: "2007 – 2009",
    details: "GPA: 3.86/4.0",
  },
  {
    school: "ICFAI Institute of Science and Technology",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "2003 – 2007",
    details: "GPA: 9.27/10 · Class Rank: 5/100",
  },
];

const skills = [
  "Distributed Systems",
  "Databases",
  "Cloud Spanner",
  "Compilers",
  "Performance Engineering",
  "Profiling",
  "Go",
  "Python",
  "C/C++",
  "Rust",
  "LLVM",
  "Linux",
  "Google Cloud",
  "Self-hosted Infrastructure",
];

const cloudSpannerCards = [
  {
    label: "Technical Lead Manager",
    period: "Mar 2022 – Dec 2025",
    title: "Leadership, execution, and cross-functional delivery",
    summary:
      "I led teams spanning software engineers and technical leads across key Cloud Spanner initiatives, helping move projects from early concept through execution and delivery.",
    bullets: [
      "Led teams working on major Cloud Spanner efforts, including customer migrations and product initiatives.",
      "Worked closely with Directors, UTLs, PMs, and senior engineering leadership to align scope, priorities, and execution plans.",
      "Helped drive ambiguous, cross-functional efforts to completion through alignment, communication, dependency management, and conflict resolution.",
      "Balanced strategic priorities, engineering execution, and customer needs across internal and external stakeholders.",
      "Supported projects from early technical exploration through committed delivery, helping teams stay focused on high-impact outcomes.",
    ],
  },
  {
    label: "Staff Software Engineer",
    period: "Dec 2021 – Present",
    title: "Deep technical work in databases and distributed systems",
    summary:
      "Alongside leadership responsibilities, I continued to work deeply on hard technical problems in Cloud Spanner spanning scalability, distributed resource management, customer-facing architecture, and database infrastructure.",
    bullets: [
      "Designed distributed rate capping and token-bucket-based resource management in Cloud Spanner at very large scale.",
      "Led technical direction for Cassandra compatibility work in Spanner, including ideation, prototyping, implementation, and technical problem solving.",
      "Unblocked scalability bottlenecks in large Spanner regions and improved system behavior at scale.",
      "Worked directly on database and distributed systems problems involving scale, performance, resource management, and architecture.",
      "Partnered with customers and engineering teams to move complex technical efforts from proof-of-concept to committed adoption.",
    ],
  },
];

function TimelineItem({
  title,
  subtitle,
  period,
  children,
}: {
  title: string;
  subtitle?: string;
  period?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-2 h-full w-px bg-white/10" />
      <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full border border-white/20 bg-zinc-400" />

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            {subtitle ? <p className="mt-1 text-zinc-400">{subtitle}</p> : null}
          </div>
          {period ? <p className="text-sm text-zinc-500">{period}</p> : null}
        </div>

        <div className="mt-5 text-sm leading-7 text-zinc-400">{children}</div>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="space-y-16 pb-24 pt-10">
      <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Experience & Resume
          </p>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Work across databases, infrastructure, compilers, performance engineering, 
            and personal systems projects.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="/rajeshwar_vanka.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-400"
          >
            View PDF
          </a>
          <a
            href="/rajeshwar_vanka.pdf"
            download
            className="rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-white/10"
          >
            Download PDF
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm text-zinc-500">Current focus</div>
          <div className="mt-2 text-lg font-semibold text-white">
            Databases & infrastructure
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Large-scale systems, Cloud Spanner, performance, reliability, and
            technical leadership.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm text-zinc-500">Background</div>
          <div className="mt-2 text-lg font-semibold text-white">
            Compilers & tooling
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Compiler optimization, profiling infrastructure, runtime analysis,
            and performance engineering.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm text-zinc-500">Projects</div>
          <div className="mt-2 text-lg font-semibold text-white">
            Systems built outside work
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Self-hosting, automation, local infrastructure, news intelligence,
            and applied ML systems.
          </p>
        </div>
      </section>

     <section>
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Google — Cloud Spanner
        </h2>
        <p className="mt-2 text-zinc-400">
          Staff Software Engineer / Technical Lead Manager
        </p>
      </div>
      
      <div className="space-y-6">

        <TimelineItem
          title="Staff Software Engineer"
          subtitle="Deep technical work in databases and distributed systems"
          period="Dec 2021 – Present"
        >
          <p>
            Alongside leadership responsibilities, I continued to work deeply on
            hard technical problems in Cloud Spanner spanning scalability,
            distributed resource management, customer-facing architecture, and
            database infrastructure.
          </p>
      
          <ul className="mt-4 space-y-3">
            <li className="ml-5 list-disc">
              Designed distributed rate capping and token-bucket-based resource
              management in Cloud Spanner at very large scale.
            </li>
            <li className="ml-5 list-disc">
              Led technical direction for Cassandra compatibility work in Spanner,
              including ideation, prototyping, implementation, and technical
              problem solving.
            </li>
            <li className="ml-5 list-disc">
              Unblocked scalability bottlenecks in large Spanner regions and
              improved system behavior at scale.
            </li>
            <li className="ml-5 list-disc">
              Worked directly on database and distributed systems problems involving
              scale, performance, resource management, and architecture.
            </li>
            <li className="ml-5 list-disc">
              Partnered with customers and engineering teams to move complex
              technical efforts from proof-of-concept to committed adoption.
            </li>
          </ul>
        </TimelineItem>

        <TimelineItem
          title="Technical Lead Manager"
          subtitle="Leadership, execution, and cross-functional delivery"
          period="Mar 2022 – Dec 2025"
        >
          <p>
            I led teams spanning software engineers and technical leads across key
            Cloud Spanner initiatives, helping move projects from early concept
            through execution and delivery.
          </p>
      
          <ul className="mt-4 space-y-3">
            <li className="ml-5 list-disc">
              Led teams working on major Cloud Spanner efforts, including customer
              migrations and product initiatives.
            </li>
            <li className="ml-5 list-disc">
              Worked closely with Directors, UTLs, PMs, and senior engineering
              leadership to align scope, priorities, and execution plans.
            </li>
            <li className="ml-5 list-disc">
              Helped drive ambiguous, cross-functional efforts to completion through
              alignment, communication, dependency management, and conflict
              resolution.
            </li>
            <li className="ml-5 list-disc">
              Balanced strategic priorities, engineering execution, and customer
              needs across internal and external stakeholders.
            </li>
            <li className="ml-5 list-disc">
              Supported projects from early technical exploration through committed
              delivery, helping teams stay focused on high-impact outcomes.
            </li>
          </ul>
        </TimelineItem>
      

      </div>
    </section> 

    <section>
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Earlier experience
        </p>
        <p className="mt-2 text-zinc-400">Roles prior to Cloud Spanner.</p>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <TimelineItem
            key={`${item.company}-${item.role}`}
            title={item.company}
            subtitle={item.role}
            period={item.period}
          >
            <ul className="space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="ml-5 list-disc">
                  {bullet}
                </li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </div>
    </section>

      <section>
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Work I want to highlight
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Education
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <div
              key={`${item.school}-${item.degree}`}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <p className="mt-2 text-zinc-400">{item.school}</p>
              <p className="mt-2 text-sm text-zinc-500">{item.period}</p>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Technical areas
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-700 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}