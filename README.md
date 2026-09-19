# Netflix-Inspired Portfolio

A personal portfolio built as a Netflix clone. Instead of a single scrolling
page, visitors pick a "profile" on a Who's Watching screen — Recruiter,
Developer, Stalker, or Adventurer — and the site reshapes itself around what
that visitor came for. A recruiter lands on experience and certifications; a
developer lands on the engineering work.

**Live:** _not deployed yet_

## Why build it this way

A portfolio has several audiences with nothing in common. A recruiter skimming
for two minutes wants titles, dates and a resume link. Another engineer wants
architecture and code. Writing one page for both means writing one page for
neither.

The Netflix profile-picker turns that into a feature rather than a compromise:
the audience self-selects on arrival, and each profile gets a layout built for
it. The framing is also the thing being demonstrated — the site is a working
Netflix UI clone, so the design choice and the portfolio piece are the same
artifact.

## Design notes

**One page component, four profiles.** The four profiles started as four
near-identical page components. They are now a single `ProfilePage` driven by
`getProfile(name)` in [`src/assets/data.js`](src/assets/data.js), which returns
the hero content and row definitions for that profile. Adding a fifth profile is
a data change, not a new component.

**Content lives in data, not JSX.** Work history, skills and project copy are
plain data modules (`src/pages/*/data.js`). Pages render whatever they are
handed. Updating the portfolio after a job change means editing a list.

**Routing mirrors Netflix.** `/` is the profile picker and renders outside the
shared `Layout`, so it has no navbar — the same way Netflix's own profile screen
is chrome-free. Everything else nests inside `Layout`, and
`/:profile/:section` handles the drill-down detail views.

## Tech stack

| | |
|---|---|
| Framework | React 19 |
| Build | Vite 7 |
| Routing | React Router 7 |
| Styling | Bootstrap 5 + per-component CSS |
| Animation | Framer Motion |

## Running locally

Requires Node.js 20.19+ or 22.12+ (Vite 7).

```bash
git clone git@github.com:adityashetty35/netflix-portfolio.git
cd netflix-portfolio
npm install
npm run dev
```

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the project |

## Project structure

```
src/
├── assets/
│   └── data.js              # Profile definitions — getProfile(name)
├── components/
│   ├── Layout/              # Navbar + footer shell for all pages but "/"
│   ├── Hero/                # Netflix-style billboard
│   ├── Section/             # Horizontal card row
│   ├── MediaCard/           # Individual card
│   ├── ProfileCard/         # Avatar on the Who's Watching screen
│   └── ScrollToTop/         # Resets scroll on route change
└── pages/
    ├── WhosWatching/        # "/" profile picker
    ├── Profile/             # Data-driven page for all four profiles
    ├── DetailPage/          # "/:profile/:section" drill-down
    ├── WorkExperience/      # Each owns its own data.js
    ├── Skills/
    ├── Projects/
    ├── Certifications/
    ├── Music/
    ├── Reading/
    └── Contact/
```

## Author

**Aaditya Sangishetty**
[GitHub](https://github.com/adityashetty35) ·
[LinkedIn](https://linkedin.com/in/aaditya-sangishetty-08b0b5215)
