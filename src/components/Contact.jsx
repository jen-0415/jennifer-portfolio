import { useState } from "react";
import { profile } from "../data/portfolioData";

function InfoCard({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface/50 p-5">
      <span className="h-11 w-11 shrink-0 rounded-full bg-orchid/15 border border-orchid/30 flex items-center justify-center text-orchid">
        {icon}
      </span>
      <span>
        <span className="block font-medium text-mist">{label}</span>
        <span className="block text-sm text-fog mt-0.5 break-all">{value}</span>
      </span>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:border-orchid/60 transition-colors duration-200">
      {inner}
    </a>
  ) : (
    inner
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="h-11 w-11 rounded-full border border-line flex items-center justify-center text-mist hover:text-orchid hover:border-orchid transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || `Message from ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-8 border-t border-line bg-plum/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-rose mb-4">
            contact : "open to work"
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-mist leading-tight">
            Let's build something
            <br /> worth architecting.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
          {/* Left: contact info + socials */}
          <div className="space-y-4">
            <InfoCard
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m4 6 8 6.5L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <InfoCard
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19.5c0 .6-.4 1-1 1C10.6 20.5 3.5 13.4 3.5 4.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-1.9 1.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <InfoCard
              label="Location"
              value={profile.location}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-6.1 7-11.4A7 7 0 0 0 5 9.6C5 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              }
            />

            <div className="pt-2">
              <p className="font-mono text-[11px] uppercase tracking-widest text-fog mb-3">
                Connect With Me
              </p>
              <div className="flex gap-3">
                <SocialIcon href={profile.github} label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </SocialIcon>
                <SocialIcon href={profile.linkedin} label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href={`mailto:${profile.email}`} label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m4 6 8 6.5L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-line bg-surface/50 p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-sm text-mist mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-lg bg-void/60 border border-line px-4 py-3 text-sm text-mist placeholder:text-fog/60 focus:outline-none focus:border-orchid transition-colors duration-200"
                />
              </label>
              <label className="block">
                <span className="block text-sm text-mist mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-void/60 border border-line px-4 py-3 text-sm text-mist placeholder:text-fog/60 focus:outline-none focus:border-orchid transition-colors duration-200"
                />
              </label>
            </div>

            <label className="block">
              <span className="block text-sm text-mist mb-2">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="How can I help you?"
                className="w-full rounded-lg bg-void/60 border border-line px-4 py-3 text-sm text-mist placeholder:text-fog/60 focus:outline-none focus:border-orchid transition-colors duration-200"
              />
            </label>

            <label className="block">
              <span className="block text-sm text-mist mb-2">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={onChange}
                placeholder="Your message here..."
                className="w-full rounded-lg bg-void/60 border border-line px-4 py-3 text-sm text-mist placeholder:text-fog/60 focus:outline-none focus:border-orchid transition-colors duration-200 resize-y"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-orchid-rose text-void font-mono text-xs uppercase tracking-widest font-semibold py-3.5 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 11.5 21 3l-6.5 18-3.2-7.3L3 11.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
