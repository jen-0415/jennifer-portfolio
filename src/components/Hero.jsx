import { useEffect, useState } from "react";
import { profile } from "../data/portfolioData";

function useTypewriter(words, typingMs = 70, pauseMs = 1400, deletingMs = 40) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deletingMs : typingMs);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingMs, pauseMs, deletingMs]);

  return text;
}

function SchemaMotif() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B24CE0" />
          <stop offset="100%" stopColor="#F0549A" />
        </linearGradient>
      </defs>

      {[
        [90, 90, 150, 200],
        [150, 200, 330, 130],
        [150, 200, 250, 340],
        [250, 340, 390, 300],
        [330, 130, 390, 300],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="url(#edgeGrad)"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeDasharray="5 7"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-120"
            dur="8s"
            repeatCount="indefinite"
          />
        </line>
      ))}

      {[
        { x: 90, y: 90, r: 7, label: "user" },
        { x: 150, y: 200, r: 10, label: "session" },
        { x: 330, y: 130, r: 6, label: "role" },
        { x: 250, y: 340, r: 8, label: "record" },
        { x: 390, y: 300, r: 6, label: "log" },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r} fill="#1B1029" stroke="#B24CE0" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r={n.r - 3} fill="#B24CE0" fillOpacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(178,76,224,0.18) 0%, rgba(15,8,23,0) 70%), radial-gradient(50% 40% at 10% 90%, rgba(240,84,154,0.14) 0%, rgba(15,8,23,0) 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose mb-5">
            Computer Science Student
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-mist">
            Jennifer
            <span className="bg-orchid-rose bg-clip-text text-transparent"> Lumabi</span>
          </h1>

          <div className="mt-6 h-8 font-mono text-lg sm:text-xl text-fog">
            <span className="text-mist">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-rose ml-1 align-middle animate-pulse" />
          </div>

          <p className="mt-6 max-w-xl text-fog leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download="Lumabi_Jennifer_Resume.pdf"
              className="px-6 py-3 rounded-full bg-orchid-rose text-void font-mono text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-line text-mist font-mono text-xs uppercase tracking-widest hover:border-orchid transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center h-[420px] w-full relative">
          <div className="absolute inset-0 opacity-40">
            <SchemaMotif />
          </div>

          {/* Drop a photo at /public/profile.jpg and swap this placeholder
              for an <img src="/profile.jpg" /> to show your real picture. */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-orchid-rose opacity-20 blur-2xl" />
            <img
              src="/profile.png"
              alt="Jennifer Lumabi"
              className="relative h-60 w-60 rounded-full object-cover border-2 border-line"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
