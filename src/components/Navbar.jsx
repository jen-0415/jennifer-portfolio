import { useEffect, useState } from "react";

const LINKS = [
  { label: "home", href: "#top" },
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is currently in view.
  useEffect(() => {
    const sections = LINKS
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isActive = (href) => href.slice(1) === active;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <a href="#top" className="font-display text-lg text-mist tracking-tight">
          J. Lumabi<span className="text-rose">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-fog">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setActive(l.href.slice(1))}
                className={`relative pb-1 transition-colors duration-200 ${
                  isActive(l.href) ? "text-mist" : "hover:text-mist"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-orchid-rose transition-opacity duration-200 ${
                    isActive(l.href) ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-mist"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col gap-1 px-6 pb-6 font-mono text-sm uppercase tracking-widest text-fog bg-void/95 border-b border-line">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => {
                  setActive(l.href.slice(1));
                  setOpen(false);
                }}
                className={`block py-3 transition-colors duration-200 ${
                  isActive(l.href) ? "text-mist" : "hover:text-mist"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
