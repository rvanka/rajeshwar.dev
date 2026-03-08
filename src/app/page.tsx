export default function Home() {
  return (
    <main className="space-y-16">

      {/* Hero Section */}
      <section>
        <h1 className="text-5xl font-bold mb-4">
          Rajeshwar Vanka
        </h1>

        <p className="text-xl text-gray-600">
          Staff Software Engineer / Technical Lead Manager at Google
        </p>

        <p className="mt-4 max-w-2xl text-lg">
          I work on large-scale distributed systems, databases,
          and infrastructure. My interests include compiler
          optimization, self-hosted systems, and machine learning
          platforms.
        </p>

        <div className="mt-6 flex gap-6">
          <a href="/projects" className="text-blue-600">Projects</a>
          <a href="/publications" className="text-blue-600">Publications</a>
          <a href="/resume" className="text-blue-600">Resume</a>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Current Work
        </h2>

        <ul className="space-y-2">
          <li>Distributed systems and database infrastructure</li>
          <li>Self-hosted ML and infrastructure experiments</li>
          <li>Home automation platforms and systems</li>
          <li>News aggregation and clustering systems</li>
        </ul>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Featured Projects
        </h2>

        <ul className="space-y-3">
          <li>
            <b>News Aggregation Platform</b> — clustering and summarizing news feeds
          </li>
          <li>
            <b>Home Assistant Infrastructure</b> — self-hosted home automation stack
          </li>
          <li>
            <b>OpenClaw Experiments</b> — AI agent orchestration experiments
          </li>
        </ul>
      </section>

    </main>
  );
}
