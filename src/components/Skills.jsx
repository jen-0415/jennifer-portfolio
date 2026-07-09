import { skillSchema } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-8 border-t border-line bg-plum/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose mb-4">
          skills : "stack"
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-mist leading-tight">
          Tools I reach for
          <br /> when building things.
        </h2>

        {/* Signature element: skills rendered as a stylized schema definition,
            echoing Jennifer's relational-database design background. */}
        <div className="mt-12 text-left rounded-2xl border border-line bg-surface/60 overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line bg-surface2/50">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-orchid/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-fog/40" />
            <span className="ml-2 font-mono text-xs text-fog">skills.sql</span>
          </div>

          <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <p className="text-fog">
              <span className="text-rose">CREATE TABLE</span> skills (
            </p>
            <div className="pl-4 sm:pl-6">
              {skillSchema.map((row, i) => (
                <div key={row.field} className="py-2.5 border-b border-line/60 last:border-0">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-orchid">{row.field}</span>
                    <span className="text-fog/70">{row.type}{i < skillSchema.length - 1 ? "," : ""}</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {row.values.map((v) => (
                      <span
                        key={v}
                        className="text-xs px-2 py-1 rounded-md bg-void/60 text-mist border border-line"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-fog mt-1">);</p>
          </div>
        </div>
      </div>
    </section>
  );
}
