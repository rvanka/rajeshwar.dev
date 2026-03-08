const articles = [
  {
    title: "Introducing Cassandra-compatible API in Cloud Spanner",
    tag: "Cloud Spanner • Cassandra API",
    description:
      "Announcing the Cassandra-compatible API for Cloud Spanner, enabling applications built for Cassandra to run on Spanner's globally distributed architecture.",
    href: "https://cloud.google.com/blog/products/databases/introducing-cassandra-compatible-api-in-spanner",
  },
  {
    title: "Cloud Spanner doubles the number of updates per transaction",
    tag: "Cloud Spanner • Performance",
    description:
      "An engineering deep dive into improvements that doubled the number of updates allowed per transaction in Cloud Spanner.",
    href: "https://cloud.google.com/blog/products/databases/cloud-spanner-doubles-the-number-of-updates-per-transaction",
  },
];

export default function BlogPage() {
  return (
    <main className="space-y-16 pb-24 pt-8">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Writing
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Articles and posts
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Selected writing on databases, distributed systems, and engineering.
        </p>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((post) => (
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

              <div className="mt-6 text-sm text-zinc-300">Read article →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
