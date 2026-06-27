import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "sweet-mukhwas",
    name: "Sweet Mukhwas",
    tagline: "A garden of seeds, sugar-crystalled",
    description:
      "Our signature blend of candy-coated fennel, sesame, and rose petals — finished by hand the way it has been for three generations.",
    art: "leaf",
  },
  {
    slug: "paan",
    name: "Paan",
    tagline: "The fold that ends every feast",
    description:
      "Meetha paan, banarasi paan, and chocolate paan rolled fresh on betel leaf and dusted in real silver varak.",
    art: "leaf",
  },
  {
    slug: "shots",
    name: "Mukhwas Shots",
    tagline: "One shot, full refresh",
    description:
      "Single-serve mouth freshener shots for the glovebox, the gym bag, and the gift hamper.",
    art: "drop",
  },
  {
    slug: "saunf",
    name: "Saunf",
    tagline: "The classic, perfected",
    description:
      "Roasted fennel seed in five house blends, from plain roasted to rose-sugar coated.",
    art: "seed",
  },
  {
    slug: "churan",
    name: "Churan",
    tagline: "Tangy relief, family recipe",
    description:
      "Digestive churan ground from jeera, hing, and black salt — the after-meal ritual in a tin.",
    art: "spiral",
  },
  {
    slug: "amla",
    name: "Amla",
    tagline: "Sun-dried, hand-sorted",
    description:
      "Sweet, salted, and candy amla made from orchard-fresh Indian gooseberry.",
    art: "berry",
  },
  {
    slug: "candies",
    name: "Candies",
    tagline: "Old recipes, new shine",
    description:
      "Hand-pulled digestive candies in imli, aam, and kachi kairi — wrapped in gold foil.",
    art: "candy",
  },
  {
    slug: "supari",
    name: "Supari",
    tagline: "Sliced thin, dried slow",
    description:
      "Betel nut supari in scented and unscented blends, cut to the thickness connoisseurs ask for by name.",
    art: "nut",
  },
  {
    slug: "digestive-mixes",
    name: "Digestive Mixes",
    tagline: "Built for the after-meal table",
    description:
      "Multi-seed digestive mixes layered with dry fruit, sugar pearls, and a hint of camphor.",
    art: "mix",
  },
  {
    slug: "roasted-mixes",
    name: "Roasted Mixes",
    tagline: "Slow roast, deep crunch",
    description:
      "Roasted seed and nut mixes finished over a low flame the way our founder's mother first taught us.",
    art: "roast",
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
