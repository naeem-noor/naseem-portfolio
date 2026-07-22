# Naseem Hussain Awan — Portfolio

A premium single-page portfolio built with Next.js 14 (App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx       Root layout — fonts (next/font/google), theme init script, metadata
  page.tsx          Assembles all sections in order
  globals.css       Design tokens (colors, type, spacing) and all component styles

components/
  Header.tsx        Sticky nav, scroll-spy active state, mobile menu
  ProgressBar.tsx    Fixed top scroll-progress indicator
  ThemeToggle.tsx    Dark/light theme switch button
  Hero.tsx           Full-screen intro with animated Gantt-style SVG visual
  Intro.tsx          Editorial professional introduction
  Expertise.tsx       Grouped technical capability cards
  Experience.tsx      Career timeline (Zameen Developments, J7 Group) + education
  Projects.tsx        Featured project case studies, handover strip, brand portfolio
  Workflow.tsx        Planning → Scheduling → Monitoring → Risk → Execution → Progress
  Credentials.tsx     Certifications, PEC registration, languages
  Philosophy.tsx      Professional principles grid
  Contact.tsx         Closing CTA, LinkedIn / email / phone
  Footer.tsx
  Reveal.tsx          Scroll-triggered fade/slide-up wrapper (used throughout)

context/
  ThemeContext.tsx   Theme state, localStorage persistence, no-flash init script

hooks/
  useScrollProgress.ts  Scroll % + "compact nav" threshold
  useActiveSection.ts   IntersectionObserver-based scroll-spy for nav links
  useReveal.ts          IntersectionObserver-based one-time reveal animation

data/
  content.ts         All copy and structured data — the single place to edit content
```

## Editing content

Every fact on the site — name, roles, dates, project figures, certifications — lives in
`data/content.ts`, typed and separated from the components that render it. Update that file
to change any content; you shouldn't need to touch a component to edit copy.

Two things worth knowing:

- **Project SPI/CPI figures** on the `featuredProjects` metrics in `data/content.ts` are
  illustrative placeholders (the CV did not include per-project performance figures). Replace
  them with real numbers, or remove the metric objects entirely if you'd rather not display
  them.
- **`prefers-reduced-motion`** is respected globally in `app/globals.css` — all animations and
  smooth scrolling are disabled automatically for users who request it.

## Notes

- Theme defaults to dark (the brief's primary premium experience) and persists via
  `localStorage`; an inline script in `app/layout.tsx` applies the saved theme before paint to
  avoid a flash of the wrong theme.
- Fonts (Space Grotesk, Inter, IBM Plex Mono) are loaded via `next/font/google`, self-hosted
  and optimized by Next.js at build time — no external font requests at runtime.
- This project was authored in an environment without network access, so `npm install` has not
  been run here. The TypeScript source was verified against the TypeScript compiler for syntax
  correctness, but you should run `npm install && npm run build` locally before deploying to
  catch anything that only surfaces with the real `next`/`react` type packages installed.
