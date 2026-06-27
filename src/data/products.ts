import type { Product } from "./types";

export const products: Product[] = [
  // Sweet Mukhwas
  {
    id: "p01",
    slug: "royal-rose-mukhwas",
    name: "Royal Rose Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Sugar-coated fennel & rose petal blend",
    description:
      "A delicate mix of candy-coated fennel seeds, dried rose petals, and a whisper of cardamom — the mukhwas reserved for special occasions, served in brass bowls at the end of a wedding feast.",
    ingredients: ["Fennel seeds", "Sugar crystals", "Dried rose petals", "Cardamom", "Edible silver leaf"],
    benefits: ["Freshens breath", "Aids digestion", "Calming aroma"],
    packSizes: [
      { label: "100g Pouch", price: "₹120" },
      { label: "250g Jar", price: "₹280" },
      { label: "500g Gift Box", price: "₹520" },
    ],
    isBestSeller: true,
    artSeed: 1,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=900&q=80",
    imageAlt: "Royal Rose Mukhwas in a premium gift box",
  },
  {
    id: "p02",
    slug: "tutti-frutti-mukhwas",
    name: "Tutti Frutti Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Colourful candied fruit & seed mix",
    description:
      "Bright, fruity, and built for sharing — diced candied papaya and fennel folded into a mukhwas that's as much about colour as it is about flavour.",
    ingredients: ["Fennel seeds", "Candied papaya", "Sugar", "Natural fruit flavouring"],
    benefits: ["Freshens breath", "Kid-friendly", "Party favourite"],
    packSizes: [
      { label: "100g Pouch", price: "₹110" },
      { label: "250g Jar", price: "₹250" },
    ],
    artSeed: 2,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Colourful tutti frutti mukhwas in a bright snack jar",
  },
  {
    id: "p03",
    slug: "saffron-supreme-mukhwas",
    name: "Saffron Supreme Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Kashmiri saffron & sesame blend",
    description:
      "Our most premium mukhwas, threaded with real Kashmiri saffron and toasted sesame, finished in a velvet-lined gift tin.",
    ingredients: ["Sesame seeds", "Kashmiri saffron", "Sugar crystals", "Fennel"],
    benefits: ["Premium aroma", "Festive gifting", "Digestive support"],
    packSizes: [
      { label: "150g Velvet Tin", price: "₹340" },
      { label: "300g Hamper Box", price: "₹620" },
    ],
    isNew: true,
    artSeed: 3,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?w=900&q=80",
    imageAlt: "Luxury saffron mukhwas in a gift tin",
  },

  // Paan
  {
    id: "p04",
    slug: "meetha-paan-classic",
    name: "Meetha Paan Classic",
    category: "paan",
    shortDescription: "Sweet betel leaf roll, hand-folded",
    description:
      "Fresh betel leaf hand-rolled around gulkand, candied fennel, and coconut, finished with edible silver varak — packed to stay fresh for the day.",
    ingredients: ["Betel leaf", "Gulkand", "Fennel", "Desiccated coconut", "Silver varak"],
    benefits: ["Traditional after-meal ritual", "Fresh breath"],
    packSizes: [
      { label: "Single Roll", price: "₹45" },
      { label: "Box of 6", price: "₹240" },
      { label: "Box of 12", price: "₹450" },
    ],
    isBestSeller: true,
    artSeed: 4,
    image: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=900&q=80",
    imageAlt: "Classic meetha paan neatly arranged in a premium tray",
  },
  {
    id: "p05",
    slug: "banarasi-paan",
    name: "Banarasi Paan",
    category: "paan",
    shortDescription: "The original from the ghats of Banaras",
    description:
      "Our take on the legendary Banarasi paan — a richer, spiced filling on a slightly tangier leaf, for those who grew up on the original.",
    ingredients: ["Banarasi betel leaf", "Gulkand", "Mixed mukhwas", "Catechu", "Rose syrup"],
    benefits: ["Authentic regional recipe", "Rich, layered flavour"],
    packSizes: [
      { label: "Single Roll", price: "₹55" },
      { label: "Box of 6", price: "₹300" },
    ],
    artSeed: 5,
    image: "https://images.pexels.com/photos/2534690/pexels-photo-2534690.jpeg?w=900&q=80",
    imageAlt: "Banarasi paan with rich filling and traditional presentation",
  },
  {
    id: "p06",
    slug: "chocolate-paan",
    name: "Chocolate Paan",
    category: "paan",
    shortDescription: "A modern fold with dark chocolate",
    description:
      "Belgian dark chocolate shavings folded into our classic sweet paan filling — the bridge between the mithai counter and the dessert menu.",
    ingredients: ["Betel leaf", "Dark chocolate", "Gulkand", "Fennel", "Cherry"],
    benefits: ["Modern twist", "Dessert substitute"],
    packSizes: [
      { label: "Single Roll", price: "₹60" },
      { label: "Box of 6", price: "₹330" },
    ],
    isNew: true,
    artSeed: 6,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Chocolate paan with glossy dark chocolate garnish",
  },

  // Shots
  {
    id: "p07",
    slug: "mint-mukhwas-shot",
    name: "Mint Mukhwas Shot",
    category: "shots",
    shortDescription: "Single-serve mint freshener sachet",
    description:
      "A single-serve sachet built for the glovebox and the desk drawer — crushed mint, fennel, and a touch of menthol for an instant reset.",
    ingredients: ["Fennel", "Mint crystals", "Sugar", "Menthol"],
    benefits: ["Instant freshness", "Travel-friendly", "On-the-go portion"],
    packSizes: [
      { label: "Single Sachet", price: "₹20" },
      { label: "Box of 24 Sachets", price: "₹430" },
    ],
    artSeed: 7,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Mint freshener sachet for on-the-go freshness",
  },
  {
    id: "p08",
    slug: "paan-flavour-shot",
    name: "Paan Flavour Shot",
    category: "shots",
    shortDescription: "All the paan flavour, none of the leaf",
    description:
      "Everything you love about a sweet paan, distilled into a single-serve shot — gulkand, fennel, and rose, ready in your pocket.",
    ingredients: ["Fennel", "Gulkand essence", "Rose flavouring", "Sugar"],
    benefits: ["Instant freshness", "No betel leaf needed"],
    packSizes: [
      { label: "Single Sachet", price: "₹22" },
      { label: "Box of 24 Sachets", price: "₹470" },
    ],
    isBestSeller: true,
    artSeed: 8,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Pocket-size paan flavour shot packet",
  },

  // Saunf
  {
    id: "p09",
    slug: "plain-roasted-saunf",
    name: "Plain Roasted Saunf",
    category: "saunf",
    shortDescription: "Slow-roasted fennel, no sugar",
    description:
      "Fennel seeds roasted low and slow until fragrant, with nothing added — for those who take their after-meal ritual unsweetened.",
    ingredients: ["Fennel seeds"],
    benefits: ["Sugar-free", "Aids digestion", "Naturally fragrant"],
    packSizes: [
      { label: "200g Pouch", price: "₹90" },
      { label: "500g Pack", price: "₹200" },
    ],
    artSeed: 9,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Plain roasted saunf in a premium pouch",
  },
  {
    id: "p10",
    slug: "sugar-coated-saunf",
    name: "Sugar Coated Saunf",
    category: "saunf",
    shortDescription: "The classic sweet shop favourite",
    description:
      "Fennel seeds tumbled in a fine sugar crystal coating — the version you remember from the sweet shop counter.",
    ingredients: ["Fennel seeds", "Sugar crystals", "Edible colour"],
    benefits: ["Classic flavour", "Freshens breath"],
    packSizes: [
      { label: "200g Pouch", price: "₹95" },
      { label: "500g Jar", price: "₹220" },
    ],
    isBestSeller: true,
    artSeed: 10,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Sugar-coated saunf in a glass jar",
  },
  {
    id: "p11",
    slug: "rose-saunf",
    name: "Rose Saunf",
    category: "saunf",
    shortDescription: "Fennel finished in rose syrup",
    description:
      "Roasted fennel finished with a delicate rose syrup glaze, dried to a light crunch.",
    ingredients: ["Fennel seeds", "Rose syrup", "Sugar"],
    benefits: ["Floral aroma", "Digestive support"],
    packSizes: [{ label: "200g Pouch", price: "₹105" }],
    artSeed: 11,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Rose saunf with fragrant floral glaze",
  },

  // Churan
  {
    id: "p12",
    slug: "hajmola-style-churan",
    name: "Classic Digestive Churan",
    category: "churan",
    shortDescription: "Tangy jeera-hing churan powder",
    description:
      "Our family churan recipe — jeera, hing, and black salt ground fine for the after-meal spoonful that's been a household habit for decades.",
    ingredients: ["Cumin (jeera)", "Asafoetida (hing)", "Black salt", "Dried mango powder"],
    benefits: ["Digestive aid", "Relieves bloating", "Tangy palate cleanser"],
    packSizes: [
      { label: "100g Tin", price: "₹85" },
      { label: "250g Tin", price: "₹195" },
    ],
    isBestSeller: true,
    artSeed: 12,
    image: "https://images.pexels.com/photos/3850595/pexels-photo-3850595.jpeg?w=900&q=80",
    imageAlt: "Premium digestive churan in a tin",
  },
  {
    id: "p13",
    slug: "anardana-churan",
    name: "Anardana Churan",
    category: "churan",
    shortDescription: "Pomegranate seed digestive powder",
    description:
      "Dried pomegranate seed ground into a tangy-sweet churan that pairs as well with fruit as it does after a heavy meal.",
    ingredients: ["Dried pomegranate seed (anardana)", "Black salt", "Cumin", "Sugar"],
    benefits: ["Tangy-sweet flavour", "Digestive support"],
    packSizes: [{ label: "100g Tin", price: "₹95" }],
    artSeed: 13,
    image: "https://images.pexels.com/photos/5779949/pexels-photo-5779949.jpeg?w=900&q=80",
    imageAlt: "Anardana churan packed in a compact tin",
  },

  // Amla
  {
    id: "p14",
    slug: "sweet-amla-candy",
    name: "Sweet Amla Candy",
    category: "amla",
    shortDescription: "Sun-dried gooseberry, sugar-cured",
    description:
      "Whole Indian gooseberries, sun-dried and sugar-cured until chewy — a tangy-sweet snack rich in the fruit's natural character.",
    ingredients: ["Indian gooseberry (amla)", "Sugar"],
    benefits: ["Rich in Vitamin C", "Natural tang", "No added colour"],
    packSizes: [{ label: "200g Pouch", price: "₹110" }],
    artSeed: 14,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?w=900&q=80",
    imageAlt: "Sweet amla candy packed in a neat pouch",
  },
  {
    id: "p15",
    slug: "salted-amla",
    name: "Salted Amla",
    category: "amla",
    shortDescription: "Hand-sorted, salt-cured gooseberry",
    description:
      "For the purists — amla cured simply in rock salt, hand-sorted for size and dried to a firm, tangy chew.",
    ingredients: ["Indian gooseberry (amla)", "Rock salt", "Black pepper"],
    benefits: ["Salt-cured tradition", "Tangy snack", "Vitamin C source"],
    packSizes: [{ label: "200g Pouch", price: "₹115" }],
    artSeed: 15,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Salted amla for a savoury snack craving",
  },

  // Candies
  {
    id: "p16",
    slug: "imli-candy",
    name: "Imli Digestive Candy",
    category: "candies",
    shortDescription: "Hand-pulled tamarind candy",
    description:
      "Hand-pulled tamarind candy with a sour-sweet centre — the digestive candy that started in roadside stalls and earned its way onto our shelf.",
    ingredients: ["Tamarind pulp", "Sugar", "Black salt", "Cumin"],
    benefits: ["Digestive aid", "Tangy-sweet", "Individually wrapped"],
    packSizes: [{ label: "Jar of 50", price: "₹140" }, { label: "Bulk Pack 1kg", price: "₹720" }],
    isBestSeller: true,
    artSeed: 16,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=900&q=80",
    imageAlt: "Tangy imli digestive candy in a premium jar",
  },
  {
    id: "p17",
    slug: "kachi-kairi-candy",
    name: "Kachi Kairi Candy",
    category: "candies",
    shortDescription: "Raw mango digestive candy",
    description:
      "The taste of raw mango pickle, distilled into a hard candy — sharp, sour, and exactly what a heavy lunch is asking for.",
    ingredients: ["Raw mango powder (amchur)", "Sugar", "Black salt"],
    benefits: ["Digestive support", "Sharp tang", "Foil-wrapped"],
    packSizes: [{ label: "Jar of 50", price: "₹150" }],
    artSeed: 17,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Raw mango candy wrapped and arranged in a jar",
  },
  {
    id: "p18",
    slug: "gold-foil-paan-candy",
    name: "Gold Foil Paan Candy",
    category: "candies",
    shortDescription: "Paan-flavoured candy, foil-wrapped",
    description:
      "All the flavour of our meetha paan, set into a hard candy and wrapped in gold foil — a gifting favourite at festival time.",
    ingredients: ["Gulkand essence", "Fennel", "Sugar", "Rose"],
    benefits: ["Gifting favourite", "Paan flavour, no leaf needed"],
    packSizes: [{ label: "Jar of 50", price: "₹170" }, { label: "Festive Box of 100", price: "₹320" }],
    isNew: true,
    artSeed: 18,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?w=900&q=80",
    imageAlt: "Gold foil paan candy in a celebratory festive box",
  },

  // Supari
  {
    id: "p19",
    slug: "scented-supari",
    name: "Scented Supari",
    category: "supari",
    shortDescription: "Thin-sliced betel nut, lightly scented",
    description:
      "Betel nut sliced thin and dried slow, finished with a light cardamom-rose scenting for a refined after-meal chew.",
    ingredients: ["Betel nut (supari)", "Cardamom", "Rose essence"],
    benefits: ["Traditional chew", "Light fragrance"],
    packSizes: [
      { label: "100g Pouch", price: "₹125" },
      { label: "250g Pouch", price: "₹280" },
    ],
    artSeed: 19,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=900&q=80",
    imageAlt: "Scented supari in a premium pouch",
  },
  {
    id: "p20",
    slug: "unscented-supari",
    name: "Unscented Supari",
    category: "supari",
    shortDescription: "Plain sliced betel nut",
    description:
      "No additions, no scenting — just betel nut, sliced to the thickness our long-time customers ask for by name.",
    ingredients: ["Betel nut (supari)"],
    benefits: ["No additives", "Classic preparation"],
    packSizes: [
      { label: "100g Pouch", price: "₹115" },
      { label: "250g Pouch", price: "₹260" },
    ],
    artSeed: 20,
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=900&q=80",
    imageAlt: "Classic unscented supari in a simple pouch",
  },

  // Digestive Mixes
  {
    id: "p21",
    slug: "deluxe-digestive-mix",
    name: "Deluxe Digestive Mix",
    category: "digestive-mixes",
    shortDescription: "Multi-seed mix with dry fruit",
    description:
      "Our most elaborate mix — fennel, sesame, melon seed, and chopped dry fruit layered with sugar pearls and a hint of camphor, built for the dinner-party table.",
    ingredients: ["Fennel", "Sesame", "Melon seeds", "Dry fruit", "Sugar pearls", "Camphor"],
    benefits: ["Multi-seed digestion support", "Premium gifting mix"],
    packSizes: [
      { label: "250g Jar", price: "₹310" },
      { label: "500g Gift Jar", price: "₹580" },
    ],
    isBestSeller: true,
    artSeed: 21,
    image: "https://images.pexels.com/photos/3639097/pexels-photo-3639097.jpeg?w=900&q=80",
    imageAlt: "Deluxe digestive mix in an elegant glass jar",
  },
  {
    id: "p22",
    slug: "everyday-digestive-mix",
    name: "Everyday Digestive Mix",
    category: "digestive-mixes",
    shortDescription: "The simple, daily-use blend",
    description:
      "A lighter, everyday mix of fennel and sesame seeds — built for the spoon kept by the dining table, not the gift shelf.",
    ingredients: ["Fennel", "Sesame", "Sugar"],
    benefits: ["Daily digestion support", "Light, simple flavour"],
    packSizes: [{ label: "250g Pouch", price: "₹190" }],
    artSeed: 22,
    image: "https://images.pexels.com/photos/5477408/pexels-photo-5477408.jpeg?w=900&q=80",
    imageAlt: "Everyday digestive mix in a simple pouch",
  },

  // Roasted Mixes
  {
    id: "p23",
    slug: "roasted-seed-trail-mix",
    name: "Roasted Seed Trail Mix",
    category: "roasted-mixes",
    shortDescription: "Slow-roasted seed & nut blend",
    description:
      "Pumpkin, sunflower, and melon seeds roasted over a low flame with a touch of rock salt — built as much for snacking as for the after-meal table.",
    ingredients: ["Pumpkin seeds", "Sunflower seeds", "Melon seeds", "Rock salt"],
    benefits: ["High-protein snack", "Deep roasted flavour"],
    packSizes: [
      { label: "200g Pouch", price: "₹180" },
      { label: "500g Pack", price: "₹420" },
    ],
    artSeed: 23,
    image: "https://images.pexels.com/photos/5920620/pexels-photo-5920620.jpeg?w=900&q=80",
    imageAlt: "Roasted seed trail mix in a premium pouch",
  },
  {
    id: "p24",
    slug: "spiced-roasted-mix",
    name: "Spiced Roasted Mix",
    category: "roasted-mixes",
    shortDescription: "Roasted mix with a chaat masala kick",
    description:
      "The same slow-roasted seed base, finished with a dusting of tangy chaat masala for a sharper, snackable edge.",
    ingredients: ["Pumpkin seeds", "Sunflower seeds", "Chaat masala", "Rock salt"],
    benefits: ["Tangy, spiced flavour", "Snack-ready"],
    packSizes: [{ label: "200g Pouch", price: "₹195" }],
    isNew: true,
    artSeed: 24,
    image: "https://images.pexels.com/photos/3850595/pexels-photo-3850595.jpeg?w=900&q=80",
    imageAlt: "Spiced roasted mix in a vibrant snack pouch",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getRelatedProducts = (product: Product, count = 4) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
