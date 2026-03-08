export default function ResumePage() {
  const experience = [
    {
      company: "Google — Cloud Spanner",
      role: "Staff Software Engineer / Technical Lead Manager",
      period: "Dec 2021 – Present",
      bullets: [
        "Technical lead / manager for Yahoo Mail’s transition to Cloud Spanner.",
        "Led teams across large customer migrations and internal product delivery.",
        "Designed distributed rate capping and token-bucket resource management in Cloud Spanner at very large scale.",
        "Led Cassandra Endpoint for Spanner and helped move customers from negotiation to revenue commit.",
        "Unblocked scalability limits in large Spanner regions.",
      ],
    },
    {
      company: "Google — Google-Wide Profiling / AutoFDO",
      role: "Senior Software Engineer",
      period: "Oct 2018 – Dec 2021",
      bullets: [
        "Worked on fleet-wide profiling and AutoFDO infrastructure.",
        "Overhauled automatic profile generation and improved stack unwinding accuracy.",
        "Designed and deployed context-sensitive profiles for major compute and RAM savings.",
        "Built customized AutoFDO profiles that scaled across Google C++ binaries.",
        "Improved YouTube CDN rollout and recovery performance by resolving lock contention.",
      ],
    },
    {
      company: "The MathWorks — MATLAB Core Execution Engine",
      role: "Senior Compiler Engineer",
      period: "Feb 2013 – Oct 2018",
      bullets: [
        "Part of the team that designed and implemented the JIT shipped in MATLAB R2015b.",
        "Built language-level and builtin optimizations across the interpreter and JIT.",
        "Created scalable analysis tools to guide optimization strategy.",
        "Mentored compiler-related projects with scoped delivery timelines.",
      ],
    },
    {
      company: "Lawrence Livermore National Labs / Redpine Signals",
      role: "Intern",
      period: "",
      bullets: [
        "Designed and implemented a CORDIC co-processor in Verilog at Redpine Signals.",
        "Built a source-level runtime error checking tool for C/C++ at LLNL.",
      ],
    },
  ];

  const education = [
    {
      school: "North Carolina State University",
      degree: "Ph.D. in Computer Engineering",
      period: "Aug 2007 – Feb 2013",
      details:
        "Advisor: Dr. James M. Tuck. Thesis: Efficient Data Dependence Profiling.",
    },
    {
      school: "North Carolina State University",
      degree: "M.S. in Electrical and Computer Engineering",
      period: "Aug 2007 – May 2009",
      details: "GPA: 3.86/4.0",
    },
    {
      school: "ICFAI Institute of Science and Technology",
      degree: "B.Tech in Electronics and Communication Engineering",
      period: "Aug 2003 – Jul 2007",
      details: "GPA: 9.27/10 · Class Rank: 5/100",
    },
  ];

  const skills = [
    "Distributed Systems",
    "Databases (Spanner, Cassandra)",
    "Compilers",
    "Computer Architecture",
    "Profiling",
    "C/C++",
    "Go",
    "Python",
    "Rust",
    "MATLAB",
    "LLVM",
    "Linux",
    "Google Cloud",
  ];

  return (
    <main className="space-y-16 pb-24 pt-8">
      <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Resume
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Rajeshwar Vanka
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Staff Software Engineer / Technical Lead Manager focused on
            distributed systems, databases, infrastructure, compilers, and
            performance engineering.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="/rajeshwar_vanka.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View PDF
          </a>
          <a
            href="/rajeshwar_vanka.pdf"
            download
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Download PDF
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="text-sm text-zinc-500">Focus</div>
          <div className="mt-2 text-lg font-semibold text-white">
            Systems & Infrastructure
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Large-scale distributed systems, databases, profiling, and
            performance engineering.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="text-sm text-zinc-500">Background</div>
          <div className="mt-2 text-lg font-semibold text-white">
            Compilers & Tooling
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Compiler optimization, JIT systems, analysis tooling, and runtime
            instrumentation.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="text-sm text-zinc-500">Leadership</div>
          <div className="mt-2 text-lg font-semibold text-white">
            Technical Leadership
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Cross-functional execution, customer-facing technical work, and
            leading multi-engineer teams.
          </p>
        </div>
      </section>

      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Experience
        </p>
        <div className="mt-6 space-y-6">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {item.company}
                  </h2>
                  <p className="mt-1 text-zinc-400">{item.role}</p>
                </div>
                <p className="text-sm text-zinc-500">{item.period}</p>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc ml-5">
                    {bullet}
                  </li>
                ))}
              </ul>
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
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
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
          Skills
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}