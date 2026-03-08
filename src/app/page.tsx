export default function Home() {
  return (
    <main className="space-y-32">

      {/* HERO */}
      <section className="max-w-3xl">

        <h1 className="text-6xl font-bold leading-tight">
          Rajeshwar Vanka
        </h1>

        <p className="text-xl text-gray-400 mt-6">
          Staff Software Engineer / Technical Lead Manager at Google
        </p>

        <p className="text-lg text-gray-300 mt-8">
          I work on distributed systems, large-scale databases,
          and infrastructure. My interests include compiler
          optimization, self-hosted systems, and machine learning
          platforms.
        </p>

      </section>


      {/* CURRENT INTERESTS */}

      <section>

        <h2 className="text-2xl font-semibold mb-6">
          Current Interests
        </h2>

        <ul className="space-y-3 text-gray-400">

          <li>Distributed systems and database infrastructure</li>

          <li>Self-hosted ML and infrastructure experiments</li>

          <li>Home automation platforms and systems</li>

          <li>News aggregation and clustering systems</li>

        </ul>

      </section>


      {/* FEATURED PROJECTS */}

      <section>

        <h2 className="text-2xl font-semibold mb-6">
          Featured Projects
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              News Aggregation Platform
            </h3>
            <p className="text-gray-400">
              Clustering and summarizing large news feeds.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Home Assistant Infrastructure
            </h3>
            <p className="text-gray-400">
              Self-hosted automation stack integrating sensors,
              cameras, and smart devices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              OpenClaw Experiments
            </h3>
            <p className="text-gray-400">
              Experiments with agent orchestration and AI workflows.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}