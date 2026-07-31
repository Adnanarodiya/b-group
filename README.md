# Bi Group — Landing Page

A modern, single-page marketing site for **Bi Group**, a diversified Indian
conglomerate, built with [Astro](https://astro.build).

## Sections

1. Hero with animated background and headline
2. About Bi Group
3. Our Business Verticals (10 businesses, with Bi Paints as flagship)
4. At-a-Glance stats strip with count-up animation
5. Flagship Spotlight — Bi Paints & Color Coating
6. Trusted By — scrolling client logo marquee
7. Why Bi Group
8. Call-to-Action / contact band
9. Footer with full sitemap

The sticky navigation bar is transparent over the hero and transitions to a
frosted white bar on scroll, with animated link underlines (inspired by
jotun.com).

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build
```

## Project structure

```
src/
├── components/   # Header, Hero, About, Verticals, Stats, Spotlight,
│                 # Clients, WhyUs, CtaBand, Footer, Logo
├── layouts/      # Base HTML layout (fonts, meta, reveal-on-scroll script)
├── pages/        # index.astro (the landing page)
└── styles/       # global.css (design tokens, buttons, section patterns)
```

## Notes

- Brand palette (navy `#16338a`, yellow `#f6b40e`) is derived from the
  Bi Group logo and defined as CSS custom properties in
  `src/styles/global.css`.
- Stats in `src/components/Stats.astro` and contact details in
  `CtaBand.astro` / `Footer.astro` are placeholders — update them with real
  figures before going live.
- Navigation links currently point to page sections; swap them for real
  routes as the About / Businesses / Investors pages are built out.
