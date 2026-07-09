# Jennifer Lumabi — Portfolio

A React + Tailwind CSS portfolio site, built around a violet/rose palette and a
database-schema visual motif (fitting given the relational-database design
background in the resume).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, etc.

## Where to edit things

- **All content (name, bio, skills, experience, education, projects, contact
  info)** lives in one place: `src/data/portfolioData.js`. Edit that file and
  every section updates automatically.
- **Project images**: each project in `portfolioData.js` currently shows a
  gradient placeholder with its initials. To use a real screenshot, drop the
  image in `public/projects/`, then add an `image: "/projects/your-file.png"`
  field to that project's entry.
- **Colors**: defined in `tailwind.config.js` under `theme.extend.colors`
  (`orchid`, `rose`, `void`, `plum`, `surface`, `mist`, `fog`, `line`).
- **Fonts**: Fraunces (display), Inter (body), JetBrains Mono (labels/code) —
  loaded via Google Fonts in `index.html`.
- **Sections/components**: each section is its own file in `src/components/`
  (`Hero.jsx`, `About.jsx`, `Experience.jsx`, `Projects.jsx`, `Contact.jsx`).

## Notes

- The Projects section is a slideshow (arrows + dot navigation + autoplay
  that pauses on hover) — it does not link out to external sites, per request.
- Phone number was left off the public Contact section for privacy; add it
  in `Contact.jsx` if you'd like it shown.
