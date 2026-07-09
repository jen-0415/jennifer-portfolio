import { profile, education, interests } from "../data/portfolioData";

function InfoRow({ icon, label, value, href }) {
  const content = (
    <>
      <span className="h-9 w-9 shrink-0 rounded-full border border-line flex items-center justify-center text-orchid">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-widest text-fog">{label}</span>
        <span className="block text-sm text-mist mt-0.5">{value}</span>
      </span>
    </>
  );

  const className = "flex items-center gap-3";

  return href ? (
    <a href={href} className={`${className} hover:opacity-80 transition-opacity duration-200`}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-8 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose mb-4">
          about : "profile"
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-mist leading-tight max-w-xl">
          The person behind the schemas and screens.
        </h2>

        <div className="mt-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-14">
          <div>
            <p className="text-fog leading-relaxed max-w-lg">{profile.aboutBio}</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <InfoRow
                label="email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m4 6 8 6.5L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
              <InfoRow
                label="location"
                value={profile.location}
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s7-6.1 7-11.4A7 7 0 0 0 5 9.6C5 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                }
              />
            </div>

            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-widest text-fog mb-3">
                core areas
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-line text-mist bg-surface/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-fog mb-6">
              education
            </p>
            <ol className="relative border-l border-line pl-7 space-y-8">
              {education.map((ed, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-void border-2 border-orchid" />
                  <p className="font-mono text-xs text-fog">{ed.period}</p>
                  <p className="font-display text-lg text-mist mt-1">{ed.program}</p>
                  <p className="text-sm text-orchid mt-0.5">{ed.school}</p>
                  <p className="text-sm text-fog mt-2">{ed.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
