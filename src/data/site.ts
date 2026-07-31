/**
 * Single source of truth for the landing page copy and navigation.
 *
 * Figures marked with `PLACEHOLDER` are indicative and must be confirmed by
 * Bi Group before the page goes live.
 */

export const site = {
  name: "Bi Group",
  legalName: "Bi Group of Companies",
  /** PLACEHOLDER — swap for the production domain before launch (drives canonical + OG tags). */
  url: "https://www.bigroup.example",
  tagline: "Ten businesses. One standard of quality.",
  description:
    "Bi Group is a diversified Indian enterprise spanning paints and color coating, modular kitchens, agriculture, homeopathy, clothing, electronics, air conditioning, painting solutions, engineering and e-commerce.",
  contact: {
    /** PLACEHOLDER contact details. */
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    email: "connect@bigroup.example",
    salesEmail: "sales@bigroup.example",
    address: "Bi Group Corporate Office, India",
    hours: "Mon – Sat, 9:30 – 18:30 IST",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "X", href: "#" },
  ],
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = NavLink & {
  /**
   * Renders a Jotun-style full-width mega panel on hover / focus. The panel
   * lists every business vertical, so its links come straight from `verticals`.
   */
  mega?: {
    intro: { title: string; text: string; cta: NavLink };
  };
  /** Renders a compact dropdown panel. */
  children?: NavLink[];
};

/** The ten pages from the brief. `Home` is reachable through the logo. */
export const pages: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Businesses", href: "/businesses" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investors", href: "/investors" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Bi Foundation", href: "/bi-foundation" },
  { label: "E-Commerce", href: "/e-commerce" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export const nav: NavItem[] = [
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "Our story", href: "/about#story" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Quality & compliance", href: "/about#quality" },
      { label: "Bi Foundation", href: "/bi-foundation" },
    ],
  },
  {
    label: "Businesses",
    href: "/businesses",
    mega: {
      intro: {
        title: "Ten verticals, one standard",
        text: "From protective coatings on a steel plant to the kitchen in a family home — every Bi business is held to the same specification discipline.",
        cta: { label: "Explore all businesses", href: "/businesses" },
      },
    },
  },
  { label: "Sustainability", href: "/sustainability" },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Financial results", href: "/investors#results" },
      { label: "Annual reports", href: "/investors#reports" },
      { label: "Announcements", href: "/investors#announcements" },
    ],
  },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Career", href: "/career" },
];

export type Vertical = {
  name: string;
  short: string;
  href: string;
  summary: string;
  /** Accent used for the card wash, icon chip and hover state. */
  accent: string;
  icon: string;
  highlights: string[];
  flagship?: boolean;
};

export const verticals: Vertical[] = [
  {
    name: "Bi Paints & Color Coating",
    short: "Paints & Coatings",
    href: "/businesses/paints",
    summary:
      "Decorative emulsions, industrial coatings and pre-painted coil coating engineered for Indian climates and heavy-duty assets.",
    accent: "#1f3fae",
    icon: "paint",
    highlights: ["Decorative", "Industrial", "Coil coating"],
    flagship: true,
  },
  {
    name: "Bi Modular Kitchen",
    short: "Modular Kitchen",
    href: "/businesses/modular-kitchen",
    summary:
      "Made-to-measure kitchens with hardware, finishes and installation handled by one accountable team.",
    accent: "#c2410c",
    icon: "kitchen",
    highlights: ["Design", "Hardware", "Install"],
  },
  {
    name: "Bi Agriculture",
    short: "Agriculture",
    href: "/businesses/agriculture",
    summary:
      "Inputs and agronomy support that help growers lift yield while protecting soil health season after season.",
    accent: "#15803d",
    icon: "agriculture",
    highlights: ["Inputs", "Agronomy", "Yield"],
  },
  {
    name: "Bi Homeopathy",
    short: "Homeopathy",
    href: "/businesses/homeopathy",
    summary:
      "Classical homeopathic formulations produced under strict quality control for everyday family wellness.",
    accent: "#0e7490",
    icon: "wellness",
    highlights: ["Formulations", "QC tested", "Wellness"],
  },
  {
    name: "Bi Clothes",
    short: "Clothes",
    href: "/businesses/clothes",
    summary:
      "Everyday apparel built on dependable fabric sourcing, honest fits and repeatable finishing standards.",
    accent: "#9d174d",
    icon: "apparel",
    highlights: ["Fabric", "Fit", "Finish"],
  },
  {
    name: "Bi Electronics",
    short: "Electronics",
    href: "/businesses/electronics",
    summary:
      "Consumer and utility electronics assembled to specification, backed by a serviceable spares network.",
    accent: "#4338ca",
    icon: "electronics",
    highlights: ["Assembly", "Testing", "Service"],
  },
  {
    name: "Bi Air Conditioner",
    short: "Air Conditioner",
    href: "/businesses/air-conditioner",
    summary:
      "Cooling for homes and light commercial spaces, specified for efficiency and long service intervals.",
    accent: "#0369a1",
    icon: "cooling",
    highlights: ["Residential", "Light commercial", "Efficiency"],
  },
  {
    name: "Bi Painting Solutions",
    short: "Painting Solutions",
    href: "/businesses/painting-solutions",
    summary:
      "Turnkey application crews for plants, infrastructure and homes — surface prep to signed-off handover.",
    accent: "#b45309",
    icon: "roller",
    highlights: ["Surface prep", "Application", "Handover"],
  },
  {
    name: "Bi Engineering",
    short: "Engineering",
    href: "/businesses/engineering",
    summary:
      "Fabrication and engineered components for industrial customers with drawing-level traceability.",
    accent: "#334155",
    icon: "engineering",
    highlights: ["Fabrication", "Components", "Traceability"],
  },
  {
    name: "Bi E-commerce",
    short: "E-commerce",
    href: "/e-commerce",
    summary:
      "One storefront for the group's consumer range, with transparent pricing and pan-India fulfilment.",
    accent: "#7c3aed",
    icon: "ecommerce",
    highlights: ["Storefront", "Fulfilment", "Support"],
  },
];

/** PLACEHOLDER figures — confirm with the client, then update here only. */
export const stats = [
  { value: 10, suffix: "", label: "Business verticals", detail: "Operating under one group standard" },
  { value: 25, suffix: "+", label: "Years of manufacturing", detail: "Building for Indian conditions" },
  { value: 1200, suffix: "+", label: "Product SKUs", detail: "Across consumer and industrial lines" },
  { value: 18, suffix: "", label: "States served", detail: "Dealer, project and online channels" },
];

export const clients = [
  "AM/NS India",
  "Larsen & Toubro",
  "Godrej & Boyce",
  "Ministry of Defence",
  "Chowgule Group",
  "ElectroMech",
  "UNP Polyvalves",
  "Lohr India",
  "Marini Fayat Group",
  "Laxmipati Engineering",
  "NAFTech",
];

export const reasons = [
  {
    title: "One group, ten capabilities",
    text: "Paint, fabricate, fit out, cool and deliver — sourced through a single relationship instead of ten vendor contracts.",
    icon: "layers",
  },
  {
    title: "Specified for industry",
    text: "Steel majors, EPC contractors and defence buyers hold us to their inspection regimes. Those standards set the floor for everything we make.",
    icon: "shield",
  },
  {
    title: "Manufacturing we control",
    text: "In-house formulation and fabrication mean batch consistency, faster changeovers and answers that come from the plant floor.",
    icon: "factory",
  },
  {
    title: "Application, not just supply",
    text: "Our own crews apply what we manufacture, so surface preparation and film build are never left to chance.",
    icon: "roller",
  },
  {
    title: "Built to last in Indian conditions",
    text: "Coastal salt, monsoon humidity and 45 °C summers are the test bench — not the exception.",
    icon: "sun",
  },
  {
    title: "Answerable after handover",
    text: "Documented specs, warranties and a service network that stays reachable long after the invoice clears.",
    icon: "handshake",
  },
];

export const paintRange = [
  {
    name: "Interior emulsions",
    text: "Low-VOC, washable finishes in matt, sheen and luxury silk.",
  },
  {
    name: "Exterior weather shields",
    text: "Elastomeric films that resist UV, algae and monsoon driving rain.",
  },
  {
    name: "Industrial & protective",
    text: "Epoxy and PU systems for plants, structures and heavy equipment.",
  },
  {
    name: "Color coated coils",
    text: "Pre-painted steel and aluminium lines for roofing and appliances.",
  },
  {
    name: "Wood & metal enamels",
    text: "High-build enamels with retained gloss and fast recoat.",
  },
  {
    name: "Waterproofing",
    text: "Terrace, wall and basement systems with tested adhesion.",
  },
];

/** Swatches for the interactive Bi Paints colour wall. */
export const swatches = [
  { name: "Bi Signal Yellow", code: "BI 1001", hex: "#ffc20e" },
  { name: "Bi Group Navy", code: "BI 2004", hex: "#16307f" },
  { name: "Terracotta Sun", code: "BI 3110", hex: "#c8552f" },
  { name: "Monsoon Sage", code: "BI 4220", hex: "#6f8f76" },
  { name: "Warm Chalk", code: "BI 0102", hex: "#efe6d6" },
  { name: "Graphite Works", code: "BI 8800", hex: "#3a4049" },
];
