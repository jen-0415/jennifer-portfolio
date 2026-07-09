import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-8 border-t border-line bg-plum/40">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose mb-4">
          experience : "log"
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-mist mb-14">
          Where I've worked.
        </h2>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-line bg-surface/50 p-6 sm:p-8 hover:border-orchid/60 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="sm:w-40 shrink-0">
                  <span className="font-mono text-xs text-fog leading-snug">
                    {job.period}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl sm:text-2xl text-mist">{job.role}</h3>
                    <span className="text-orchid text-sm">{job.org}</span>
                  </div>
                  <p className="font-mono text-xs text-fog mt-1">{job.place}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p, j) => (
                      <li key={j} className="text-sm text-fog leading-relaxed pl-4 relative">
                        <span className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-rose" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <span className="pointer-events-none absolute inset-x-6 sm:inset-x-8 bottom-0 h-px bg-gradient-to-r from-orchid/0 via-orchid/40 to-rose/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
