import { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolioData";

// Drop a screenshot at /public/projects/<file>.png and set `image` on the
// matching project in src/data/portfolioData.js to replace a placeholder.
function ImagePlaceholder({ project, compact }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} preview`}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-line bg-void/40"
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ background: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})` }}
      />
      <svg
        width={compact ? 18 : 30}
        height={compact ? 18 : 30}
        viewBox="0 0 24 24"
        fill="none"
        className="relative text-fog"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 16.5 15.5 11l-3 3-2-2L3 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {!compact && (
        <span className="relative font-mono text-[11px] uppercase tracking-widest text-fog">
          Add project image
        </span>
      )}
      <span className="absolute top-2 left-2 font-mono text-[10px] px-1.5 py-0.5 rounded bg-void/80 text-mist border border-line">
        {project.tag}
      </span>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projects.length;
  const timerRef = useRef(null);
  const filmstripRef = useRef(null);

  const go = (i) => setActive(((i % total) + total) % total);
  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => go(active + 1), 5500);
    return () => clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused]);

  useEffect(() => {
    const container = filmstripRef.current;
    const thumb = container?.children?.[active];
    if (container && thumb) {
      const target =
        thumb.offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2;
      container.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [active]);

  const project = projects[active];

  return (
    <section id="projects" className="py-28 px-6 md:px-8 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose mb-4">
              projects : "portfolio"
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-mist">Selected Work</h2>
          </div>
          <p className="font-mono text-xs text-fog">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        <div
          className="grid lg:grid-cols-[1.3fr_1fr] gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Stage */}
          <div className="relative rounded-2xl overflow-hidden border border-line aspect-[16/10]">
            <ImagePlaceholder project={project} />

            <button
              onClick={prev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-void/70 backdrop-blur border border-line text-mist flex items-center justify-center hover:border-orchid transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-void/70 backdrop-blur border border-line text-mist flex items-center justify-center hover:border-orchid transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Info panel */}
          <div className="rounded-2xl border border-line bg-surface/50 p-6 sm:p-8 flex flex-col">
            <h3 className="font-display text-2xl sm:text-3xl text-mist">{project.name}</h3>
            <p className="text-orchid text-sm mt-1">{project.tagline}</p>
            <p className="text-fog text-sm leading-relaxed mt-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md border border-line text-fog">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filmstrip */}
        <div
          ref={filmstripRef}
          className="mt-6 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => (
            <button
              key={p.name}
              onClick={() => go(i)}
              aria-label={`Show project ${p.name}`}
              className={`relative shrink-0 h-16 w-24 rounded-lg overflow-hidden border transition-all duration-200 ${
                i === active ? "border-orchid ring-2 ring-orchid/40" : "border-line opacity-60 hover:opacity-100"
              }`}
            >
              <ImagePlaceholder project={p} compact />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
