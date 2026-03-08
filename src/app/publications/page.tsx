const publications = [
  {
    title: "Lightweight Runtime Checking of C Programs with RTC",
    meta: "Journal Paper · CLSS 2016",
    authors:
      "Reed Milewicz, Rajeshwar Vanka, James Tuck, Daniel Quinlan, Peter Pirkelbauer",
    description:
      "RTC instruments C programs with runtime safety checks for memory violations, arithmetic underflow/overflow, and type violations. The framework is lightweight enough for in situ analysis.",
    highlights: [
      "Average runtime overhead: 9.7×",
      "Average memory overhead: 3.5×",
    ],
  },
  {
    title: "Runtime Checking C Programs",
    meta: "Conference Paper · SAC 2015",
    authors:
      "Reed Milewicz, Rajeshwar Vanka, James Tuck, Daniel Quinlan, Peter Pirkelbauer",
    description:
      "Introduces RTC, a runtime monitoring tool that instruments unsafe code and monitors execution to detect safety violations.",
    highlights: [
      "Detected 98% of memory-related bugs in benchmarks",
      "Zero false positives",
    ],
  },
  {
    title: "Efficient and Accurate Data Dependence Profiling using Software Signatures",
    meta: "Conference Paper · CGO 2012",
    authors: "Rajeshwar Vanka, James Tuck",
    description:
      "A novel set-based profiler for fast and accurate runtime data dependence profiling using software signatures and tunable performance/accuracy tradeoffs.",
    highlights: [
      "Fast set membership and insertion operations",
      "Optimization-driven dependence profiling",
    ],
  },
  {
    title: "Efficient Data Dependence Profiling for Speculative Load Hoisting",
    meta: "ACM SRC Poster · PLDI 2011",
    authors: "Rajeshwar Vanka, James Tuck",
    description:
      "A fast and accurate data dependence profiler using Bloom filters, with LLVM IR-level instrumentation feeding profiling data back into optimization passes.",
    highlights: [
      "Average slowdown of 22× versus aggressive baseline",
      "Compiler feedback into unmodified optimization passes",
    ],
  },
  {
    title: "Enhanced Memoization using Function Splitting",
    meta: "ACM SRC Poster · PACT 2009",
    authors: "Rajeshwar Vanka, James Tuck",
    description:
      "Static transformation work to expose and eliminate hidden redundant calls by splitting functions and creating regions better suited for memoization.",
    highlights: [
      "Function splitting to expose redundancy",
      "Improved applicability of existing memoization techniques",
    ],
  },
];

const patents = [
  {
    title: "Computing Performance for Execution of Functions Called by Function Handles",
    meta: "US Patent 10,949,181 · Granted Mar 16, 2021",
    authors: "Rajeshwar Vanka, Ayon Basumallik, Brett Baker",
    description:
      "Scales a JIT compiler’s ability to handle large programs with many function handles by specializing handles on types and shifting cost from runtime to a one-time compile cost.",
  },
  {
    title: "Programmable CORDIC Processor",
    meta: "US Patent 8,332,451 B2",
    authors: "Phanimithra Gangalakurti et al.",
    description:
      "Patent covering a multi-stage programmable CORDIC co-processor design originating from internship work at Redpine Signals.",
  },
];

const grants = [
  {
    title:
      "A Practical Data Dependence Profiler for Program Characterization and Optimization",
    meta: "NSF Grant 1320356",
    authors: "James Tuck",
    description:
      "A practical data dependence profiling project for optimization and program characterization. The proposal built on research connected to my doctoral work.",
  },
];

function Card({
  title,
  meta,
  authors,
  description,
  highlights,
}: {
  title: string;
  meta: string;
  authors: string;
  description: string;
  highlights?: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{meta}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{authors}</p>
      <p className="mt-4 text-sm leading-7 text-zinc-400">{description}</p>

      {highlights && (
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {highlights.map((item) => (
            <li key={item} className="list-disc ml-5">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <main className="space-y-16 pb-24 pt-8">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Publications
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Papers, patents, and grants
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Research and engineering work across compilers, runtime checking,
          profiling, and optimization.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Publications</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {publications.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Patents</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {patents.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Grants</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {grants.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}