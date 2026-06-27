export type CategorySlug =
  | "sweet-mukhwas"
  | "paan"
  | "shots"
  | "saunf"
  | "churan"
  | "amla"
  | "candies"
  | "supari"
  | "digestive-mixes"
  | "roasted-mixes";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  art: "leaf" | "seed" | "drop" | "spiral" | "grain" | "berry" | "candy" | "nut" | "mix" | "roast";
}

export interface PackSize {
  label: string;
  price?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  shortDescription: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  packSizes: PackSize[];
  isBestSeller?: boolean;
  isNew?: boolean;
  artSeed: number;
  image?: string;
  imageAlt?: string;
}
