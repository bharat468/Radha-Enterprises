import type { Category } from "./types";

const img = (n: number) => new URL(`../assets/product-image/${n}.jpeg`, import.meta.url).href;

export const categories: Category[] = [
  {
    slug: "sweet-mukhwas",
    name: "Sweet Mukhwas",
    tagline: "A garden of seeds, sugar-crystalled",
    description:
      "Our signature blend of candy-coated fennel, sesame, and rose petals — finished by hand the way it has been for three generations.",
    art: "leaf",
    image: img(1),
  },
  {
    slug: "paan",
    name: "Paan",
    tagline: "The fold that ends every feast",
    description:
      "Meetha paan, banarasi paan, and chocolate paan rolled fresh on betel leaf and dusted in real silver varak.",
    art: "leaf",
    image: img(24),
  },
  {
    slug: "shots",
    name: "Mukhwas Shots",
    tagline: "One shot, full refresh",
    description:
      "Single-serve mouth freshener shots for the glovebox, the gym bag, and the gift hamper.",
    art: "drop",
    image: img(16),
  },
  {
    slug: "saunf",
    name: "Saunf",
    tagline: "The classic, perfected",
    description:
      "Roasted fennel seed in five house blends, from plain roasted to rose-sugar coated.",
    art: "seed",
    image: img(14),
  },
  {
    slug: "churan",
    name: "Churan",
    tagline: "Tangy relief, family recipe",
    description:
      "Digestive churan ground from jeera, hing, and black salt — the after-meal ritual in a tin.",
    art: "spiral",
    image: img(13),
  },
  {
    slug: "amla",
    name: "Amla",
    tagline: "Sun-dried, hand-sorted",
    description:
      "Sweet, salted, and candy amla made from orchard-fresh Indian gooseberry.",
    art: "berry",
    image: img(35),
  },
  {
    slug: "candies",
    name: "Candies",
    tagline: "Old recipes, new shine",
    description:
      "Hand-pulled digestive candies in imli, aam, and kachi kairi — wrapped in gold foil.",
    art: "candy",
    image: img(50),
  },
  {
    slug: "supari",
    name: "Supari",
    tagline: "Sliced thin, dried slow",
    description:
      "Betel nut supari in scented and unscented blends, cut to the thickness connoisseurs ask for by name.",
    art: "nut",
    image: img(26),
  },
  {
    slug: "tangy-digestives",
    name: "Tangy Digestives",
    tagline: "Tangy relief, family recipe",
    description:
      "A tantalizing mix of tangy and sour digestive treats, made to settle the stomach after heavy meals.",
    art: "mix",
    image: img(27),
  },
  {
    slug: "roasted-mixes",
    name: "Roasted Mixes",
    tagline: "Slow roast, deep crunch",
    description:
      "Roasted seed and nut mixes finished over a low flame the way our founder's mother first taught us.",
    art: "roast",
    image: img(55),
  },
  {
    slug: "jelly",
    name: "Jelly",
    tagline: "Soft & chewy fruit jellies",
    description: "Delicious fruit jellies in various fun shapes and flavours.",
    art: "candy",
    image: img(39),
  },
  {
    slug: "premium",
    name: "Premium",
    tagline: "Silver coated luxury",
    description: "Our most premium silver coated offerings for special occasions.",
    art: "seed",
    image: img(44),
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
