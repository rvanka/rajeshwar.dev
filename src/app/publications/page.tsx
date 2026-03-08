export default function Publications() {
  return (
    <main className="space-y-16">

      <section>
        <h1 className="text-4xl font-bold mb-6">Publications</h1>

        <div className="space-y-10">

          <div>
            <h2 className="text-xl font-semibold">
              Lightweight Runtime Checking of C Programs
            </h2>
            <p className="text-gray-600">
              Journal Paper — CLSS 2016
            </p>

            <p className="mt-2">
              Reed Milewicz, Rajeshwar Vanka, James Tuck,
              Daniel Quinlan, Peter Pirkelbauer
            </p>

            <p className="mt-3">
              RTC is a runtime instrumentation framework for C programs that
              detects memory violations, arithmetic overflow/underflow, and
              type violations. The system focuses on maintaining low runtime
              overhead while enabling detailed program analysis.
            </p>

            <p className="mt-2 text-gray-700">
              Benchmarks show an average runtime overhead of 9.7× and memory
              overhead of 3.5× while detecting a broad class of safety errors.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold">
              Runtime Checking C Programs
            </h2>
            <p className="text-gray-600">
              Conference Paper — SAC 2015
            </p>

            <p className="mt-2">
              Reed Milewicz, Rajeshwar Vanka, James Tuck,
              Daniel Quinlan, Peter Pirkelbauer
            </p>

            <p className="mt-3">
              Introduces RTC, a runtime monitoring framework that instruments
              unsafe C code and monitors program execution to detect safety
              violations.
            </p>

            <p className="mt-2 text-gray-700">
              The system detected 98% of memory-related bugs in benchmark
              suites with zero false positives.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold">
              Efficient and Accurate Data Dependence Profiling using Software Signatures
            </h2>

            <p className="text-gray-600">
              Conference Paper — CGO 2012
            </p>

            <p className="mt-2">
              Rajeshwar Vanka, James Tuck
            </p>

            <p className="mt-3">
              Introduces a set-based profiling approach for gathering runtime
              data dependencies between loads and stores in programs.
            </p>

            <p className="mt-2 text-gray-700">
              The approach leverages software signatures to perform fast set
              membership operations, enabling scalable dependence profiling
              with configurable performance/accuracy tradeoffs.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold">
              Efficient Data Dependence Profiling for Speculative Load Hoisting
            </h2>

            <p className="text-gray-600">
              ACM SRC Poster — PLDI 2011
            </p>

            <p className="mt-2">
              Rajeshwar Vanka, James Tuck
            </p>

            <p className="mt-3">
              Describes a fast runtime profiler using Bloom filters to detect
              memory dependences and guide speculative load hoisting
              optimizations in compilers.
            </p>

            <p className="mt-2 text-gray-700">
              LLVM IR-level instrumentation provides profiling feedback to
              existing optimization passes with an average slowdown of 22×.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold">
              Enhanced Memoization using Function Splitting
            </h2>

            <p className="text-gray-600">
              ACM SRC Poster — PACT 2009
            </p>

            <p className="mt-2">
              Rajeshwar Vanka, James Tuck
            </p>

            <p className="mt-3">
              Proposes static program transformations that split functions to
              expose hidden redundant computation, enabling memoization
              techniques to eliminate unnecessary recomputation.
            </p>

          </div>

        </div>
      </section>


      <section>
        <h1 className="text-4xl font-bold mb-6">Patents</h1>

        <div className="space-y-10">

          <div>
            <h2 className="text-xl font-semibold">
              Computing Performance for Execution of Functions Called by Function Handles
            </h2>

            <p className="text-gray-600">
              US Patent 10,949,181 — Granted March 16, 2021
            </p>

            <p className="mt-2">
              Rajeshwar Vanka, Ayon Basumallik, Brett Baker
            </p>

            <p className="mt-3">
              Introduces techniques for scaling JIT compilers handling large
              programs with numerous function handles. By specializing handles
              based on type information, the approach moves recurring runtime
              overhead into a one-time compile cost.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-semibold">
              Programmable CORDIC Processor
            </h2>

            <p className="text-gray-600">
              US Patent 8,332,451 B2
            </p>

            <p className="mt-2">
              Phanimithra Gangalakurti et al.
            </p>

            <p className="mt-3">
              Covers a programmable multi-stage CORDIC co-processor architecture
              developed during internship work at Redpine Signals.
            </p>
          </div>

        </div>
      </section>


      <section>
        <h1 className="text-4xl font-bold mb-6">Research Grants</h1>

        <div>

          <h2 className="text-xl font-semibold">
            A Practical Data Dependence Profiler for Program Characterization and Optimization
          </h2>

          <p className="text-gray-600">
            National Science Foundation Grant — NSF 1320356
          </p>

          <p className="mt-2">
            Principal Investigator: James Tuck
          </p>

          <p className="mt-3">
            This project focused on designing scalable data dependence
            profiling techniques that enable compiler optimizations across a
            wide range of applications. The proposal was based on research
            conducted during my doctoral work on dependence profiling.
          </p>

        </div>

      </section>

    </main>
  );
}
