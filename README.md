# Bi Group — landing page

A single, modern landing page for **Bi Group**, built with [Astro](https://astro.build) and
Tailwind CSS v4. Content and structure follow the client brief (`Website details from Siddhi — Bi Group`):
hero, about, ten business verticals, stats strip, Bi Paints flagship spotlight, trusted-by logos,
why Bi Group, contact band and footer, with navigation modelled on the animation feel of
[jotun.com](https://www.jotun.com/ww-en).

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build
```

Requires Node 22.12 or newer.

## Project structure

```
src/
  components/
    Header.astro          sticky nav: utility strip, mega menu, mobile drawer
    Hero.astro            full-height hero with the paint-chip fan
    About.astro           About Bi Group + manufacture / apply / deliver
    Verticals.astro       the ten business verticals
    StatsStrip.astro      "At a glance" counters
    FlagshipPaints.astro  Bi Paints spotlight with the interactive shade card
    TrustedBy.astro       client marquee
    WhyBiGroup.astro      six reasons grid
    ContactBand.astro     enquiry form + contact details
    Footer.astro          all ten pages, verticals, contact, legal
    Icon.astro            inline stroke-icon set
    Logo.astro            CSS rebuild of the Bi Group wordmark
  data/site.ts            all copy, navigation, verticals, clients, stats
  layouts/Layout.astro    head/SEO, fonts, reveal + counter scripts
  pages/index.astro       composes the landing page
  styles/global.css       brand tokens, buttons, reveal + motion primitives
```

### Editing content

Everything text-level lives in `src/data/site.ts` — navigation, the ten verticals (name, summary,
accent colour, icon), stats, client list, "why us" reasons, the Bi Paints range and shade card.

## Before going live

The brief did not include verified figures, contact details or brand files, so the following are
placeholders and are marked as such in `src/data/site.ts`:

- `site.url` — drives the canonical URL and Open Graph tags.
- `site.contact.*` — phone, email and address.
- `stats` — years of manufacturing, SKU count and states served.
- `site.social` — social profile URLs currently point at `#`.
- Vertical and page links (`/about`, `/businesses/...`) are the routes from the brief's page list;
  only the landing page exists in this project so far.

Two more items to wire up:

1. **Enquiry form** — set `data-endpoint` on `#enquiry-form` in `ContactBand.astro` to your CRM or
   form handler. Without it the form validates and confirms in place instead of posting anywhere.
2. **Client logos** — the "Trusted by" strip renders client names as typographic chips because no
   logo files were supplied. Drop SVGs into `public/` and swap them in when available.

## Design notes

- **Brand palette** — navy (`--color-navy-*`) and signal yellow (`--color-signal-*`) taken from the
  logo; each vertical carries its own accent colour used for card washes, icon chips and swatches.
- **Type** — Archivo (display) and Inter (body), self-hosted through Fontsource so there are no
  third-party font requests.
- **No stock photography** — every visual is CSS or inline SVG (paint-chip fan, painted wall
  preview, gradient atmospheres, grain overlay), which keeps the page fast and avoids placeholder
  imagery that would have to be replaced later.
- **Motion** — scroll reveals, counters, the nav mega panel and marquees all honour
  `prefers-reduced-motion`.
- **Accessibility** — skip link, keyboard-operable mega menu (Escape closes, focus-out closes),
  `aria-expanded` / `aria-pressed` state, visible focus rings and labelled form fields.
