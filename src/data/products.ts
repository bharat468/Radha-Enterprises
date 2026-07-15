import type { Product } from "./types";

// Helper to get local image path
const img = (n: number) => new URL(`../assets/product-image/${n}.jpeg`, import.meta.url).href;

export const products: Product[] = [
  // ═══════════════════════════════════════════
  //  SWEET MUKHWAS
  // ═══════════════════════════════════════════
  {
    id: "p01",
    slug: "navratna-mukhwas",
    name: "Navratna Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Nine-ingredient premium mouth freshener blend",
    description:
      "A royal blend of nine carefully selected ingredients — fennel, coriander, sesame, sugar pearls, coconut, and more — that creates a symphony of flavours in every bite. The crown jewel of our mukhwas range.",
    ingredients: ["Fennel seeds", "Coriander seeds", "Sesame", "Sugar pearls", "Coconut", "Dhaniya Dal", "Saunf", "Khoya", "Paan Chun"],
    benefits: ["Freshens breath", "Aids digestion", "Premium nine-ingredient blend"],
    packSizes: [
      { label: "100 GM", price: "₹40" },
      { label: "250 GM", price: "₹95" },
      { label: "500 GM", price: "₹180" },
      { label: "1 KG", price: "₹350" },
    ],
    isBestSeller: true,
    artSeed: 1,
    image: img(1),
    imageAlt: "Navratna Mukhwas premium mouth freshener",
  },
  {
    id: "p02",
    slug: "scented-mukhwas",
    name: "Scented Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Aromatic sugar-coated fennel & seed blend",
    description:
      "A fragrant blend of sugar-coated fennel and colourful seeds with a soothing aroma. Perfect as an after-meal refresher that leaves a lasting impression.",
    ingredients: ["Colourful Saunf", "Colourful Jirdan", "Dhaniya Daal", "Saunf", "Khoya", "Paan Chun", "Natural ingredients"],
    benefits: ["Aromatic fragrance", "Freshens breath", "Aids digestion"],
    packSizes: [
      { label: "100 GM", price: "₹35" },
      { label: "250 GM", price: "₹85" },
      { label: "500 GM", price: "₹160" },
      { label: "1 KG", price: "₹310" },
    ],
    artSeed: 2,
    image: img(2),
    imageAlt: "Scented Mukhwas aromatic mouth freshener",
  },
  {
    id: "p03",
    slug: "chandan-mukhwas",
    name: "Chandan Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Sandalwood-flavoured vibrant seed mix",
    description:
      "Infused with the cooling essence of sandalwood, this colourful mukhwas combines fennel, coriander, and sugar pearls for a refreshing after-meal treat with a premium twist.",
    ingredients: ["Colourful Saunf", "Colourful Jirdan", "Dhaniya Daal", "Saunf", "Chandan essence", "Paan Chun"],
    benefits: ["Cooling sandalwood aroma", "Vibrant colours", "Freshens breath"],
    packSizes: [
      { label: "100 GM", price: "₹40" },
      { label: "250 GM", price: "₹95" },
      { label: "500 GM", price: "₹180" },
      { label: "1 KG", price: "₹350" },
    ],
    isBestSeller: true,
    artSeed: 3,
    image: img(3),
    imageAlt: "Chandan Mukhwas with sandalwood essence",
  },
  {
    id: "p04",
    slug: "chocolate-mukhwas",
    name: "Chocolate Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Chocolate-coated fennel seed blend",
    description:
      "A modern twist on the classic mukhwas — chocolate-coated fennel and sesame seeds with colourful candy pieces. A favourite among younger generations.",
    ingredients: ["Colourful Saunf", "Colourful Jirdan", "Dhaniya Daal", "Saunf", "Chocolate coating", "Natural ingredients"],
    benefits: ["Modern chocolate flavour", "Kid-friendly", "Freshens breath"],
    packSizes: [
      { label: "100 GM", price: "₹45" },
      { label: "250 GM", price: "₹110" },
      { label: "500 GM", price: "₹210" },
      { label: "1 KG", price: "₹400" },
    ],
    isNew: true,
    artSeed: 4,
    image: img(4),
    imageAlt: "Chocolate Mukhwas mouth freshener",
  },
  {
    id: "p05",
    slug: "shahi-khas-mukhwas",
    name: "Shahi Khas Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Royal special mouth freshener blend",
    description:
      "Our most regal mukhwas — a rich blend of premium fennel, sesame, sugar crystals, and pink candy beads. Reserved for special occasions and festive gifting.",
    ingredients: ["Premium Saunf", "Colourful Jirdan", "Dhaniya Daal", "Saunf", "Khoya", "Paan Chun", "Pink candy beads"],
    benefits: ["Premium festive blend", "Rich aroma", "Perfect for gifting"],
    packSizes: [
      { label: "100 GM", price: "₹50" },
      { label: "250 GM", price: "₹120" },
      { label: "500 GM", price: "₹230" },
      { label: "1 KG", price: "₹450" },
    ],
    isBestSeller: true,
    artSeed: 5,
    image: img(5),
    imageAlt: "Shahi Khas Mukhwas royal mouth freshener",
  },
  {
    id: "p06",
    slug: "jhilmil-mukhwas",
    name: "Jhilmil Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Light, sparkling seed mix",
    description:
      "A lighter, everyday mukhwas with a sparkling mix of fennel, sesame, and delicate sugar crystals. Simple, clean, and perfect after every meal.",
    ingredients: ["Fennel seeds", "Sesame", "Sugar crystals", "Dhaniya Daal", "Natural ingredients"],
    benefits: ["Light flavour", "Everyday use", "Easy on the palate"],
    packSizes: [
      { label: "100 GM", price: "₹30" },
      { label: "250 GM", price: "₹70" },
      { label: "500 GM", price: "₹130" },
      { label: "1 KG", price: "₹250" },
    ],
    artSeed: 6,
    image: img(22),
    imageAlt: "Jhilmil Mukhwas light mouth freshener",
  },
  {
    id: "p07",
    slug: "gulab-mukhwas",
    name: "Gulab Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Rose-infused premium mouth freshener",
    description:
      "Infused with the essence of Rajasthani roses, this mukhwas blends fennel, coriander, and rose petals with sugar pearls for a floral, romantic after-meal experience.",
    ingredients: ["Fennel seeds", "Rose petals", "Coriander", "Sugar pearls", "Paan Chun", "Natural rose essence"],
    benefits: ["Floral rose aroma", "Premium gifting", "Romantic presentation"],
    packSizes: [
      { label: "100 GM", price: "₹45" },
      { label: "250 GM", price: "₹110" },
      { label: "500 GM", price: "₹210" },
      { label: "1 KG", price: "₹400" },
    ],
    isBestSeller: true,
    artSeed: 7,
    image: img(40),
    imageAlt: "Gulab Mukhwas rose-infused mouth freshener",
  },
  {
    id: "p08",
    slug: "bambaiya-mukhwas",
    name: "Bambaiya Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Mumbai-style colourful mouth freshener",
    description:
      "Inspired by the vibrant mukhwas culture of Mumbai — a kaleidoscope of colourful seeds, fennel, and sugar beads that brings the energy of the city to your palate.",
    ingredients: ["Colourful Saunf", "Fennel", "Sugar beads", "Dhaniya Daal", "Natural flavours"],
    benefits: ["Vibrant Mumbai style", "Party favourite", "Refreshing taste"],
    packSizes: [
      { label: "100 GM", price: "₹35" },
      { label: "250 GM", price: "₹85" },
      { label: "500 GM", price: "₹160" },
      { label: "1 KG", price: "₹310" },
    ],
    artSeed: 8,
    image: img(6),
    imageAlt: "Bambaiya Mukhwas Mumbai-style mouth freshener",
  },
  {
    id: "p09",
    slug: "rajasthani-mukhwas",
    name: "Rajasthani Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Authentic Rajasthani blend with roasted coriander",
    description:
      "Our signature Rajasthani recipe — a rich blend of roasted coriander, fennel seeds, and rose petals in a premium jar. Controls bad breath and reduces cholesterol.",
    ingredients: ["Roasted Coriander", "Fennel Seeds", "Rose Petals", "Sugar pearls", "Premium spices"],
    benefits: ["Authentic Rajasthani recipe", "Controls bad breath", "Reduces cholesterol"],
    packSizes: [
      { label: "100 GM", price: "₹45" },
      { label: "250 GM", price: "₹110" },
      { label: "500 GM", price: "₹210" },
      { label: "1 KG", price: "₹400" },
    ],
    isNew: true,
    artSeed: 9,
    image: img(30),
    imageAlt: "Rajasthani Mukhwas in premium jar",
  },
  {
    id: "p10",
    slug: "khas-mukhwas",
    name: "Khas Mukhwas",
    category: "sweet-mukhwas",
    shortDescription: "Special blend with premium ingredients",
    description:
      "A special mukhwas blend featuring handpicked seeds, dried fruits, and a hint of natural sweetness. The 'khas' in its name means special — and it lives up to it.",
    ingredients: ["Fennel", "Dhaniya Daal", "Chhuhara", "Mixed seeds", "Natural sweetener"],
    benefits: ["Handpicked ingredients", "Natural sweetness", "After-meal freshener"],
    packSizes: [
      { label: "100 GM", price: "₹40" },
      { label: "250 GM", price: "₹95" },
      { label: "500 GM", price: "₹180" },
      { label: "1 KG", price: "₹350" },
    ],
    artSeed: 10,
    image: img(18),
    imageAlt: "Khas Mukhwas special blend",
  },

  // ═══════════════════════════════════════════
  //  PAAN
  // ═══════════════════════════════════════════
  {
    id: "p11",
    slug: "gulkand-paan",
    name: "Gulkand Paan",
    category: "paan",
    shortDescription: "Classic rose petal jam paan preparation",
    description:
      "Fresh betel leaf layered with rich gulkand (rose petal jam), candied fennel, and coconut flakes. Served in the traditional Rajasthani style on a silver plate.",
    ingredients: ["Betel leaf", "Gulkand", "Candied fennel", "Coconut", "Cherry", "Silver varak"],
    benefits: ["Traditional recipe", "Sweet after-meal treat", "Freshens breath"],
    packSizes: [
      { label: "Single Paan", price: "₹30" },
      { label: "Box of 6", price: "₹160" },
      { label: "Box of 12", price: "₹300" },
    ],
    isBestSeller: true,
    artSeed: 11,
    image: img(24),
    imageAlt: "Gulkand Paan on betel leaf",
  },
  {
    id: "p12",
    slug: "meetha-paan",
    name: "Meetha Paan",
    category: "paan",
    shortDescription: "Sweet betel leaf with rich filling",
    description:
      "The classic sweet paan — betel leaf stuffed with gulkand, fennel, coconut, and drizzled with cherry syrup. A timeless after-meal indulgence.",
    ingredients: ["Betel leaf", "Gulkand", "Fennel", "Desiccated coconut", "Cherry syrup", "Silver varak"],
    benefits: ["Classic sweet taste", "Fresh breath", "Traditional recipe"],
    packSizes: [
      { label: "Single Paan", price: "₹25" },
      { label: "Box of 6", price: "₹140" },
      { label: "Box of 12", price: "₹260" },
    ],
    artSeed: 12,
    image: img(28),
    imageAlt: "Meetha Paan with rich filling on betel leaf",
  },

  // ═══════════════════════════════════════════
  //  SHOTS (SINGLE-SERVE MUKHWAS)
  // ═══════════════════════════════════════════
  {
    id: "p13",
    slug: "mint-mukhwas-shot",
    name: "Mint Mukhwas Shot",
    category: "shots",
    shortDescription: "Single-serve mint freshener sachet",
    description:
      "A single-serve sachet built for the glovebox and the desk drawer — crushed mint, fennel, and a touch of menthol for an instant reset.",
    ingredients: ["Fennel", "Mint crystals", "Sugar", "Menthol"],
    benefits: ["Instant freshness", "Travel-friendly", "On-the-go portion"],
    packSizes: [
      { label: "Single Sachet", price: "₹10" },
      { label: "Box of 24 Sachets", price: "₹220" },
    ],
    artSeed: 13,
    image: img(17),
    imageAlt: "Mint freshener sachet for on-the-go freshness",
  },
  {
    id: "p14",
    slug: "paan-flavour-shot",
    name: "Paan Flavour Shot",
    category: "shots",
    shortDescription: "All the paan flavour, none of the leaf",
    description:
      "Everything you love about a sweet paan, distilled into a single-serve shot — gulkand, fennel, and rose, ready in your pocket.",
    ingredients: ["Fennel", "Gulkand essence", "Rose flavouring", "Sugar"],
    benefits: ["Instant freshness", "No betel leaf needed"],
    packSizes: [
      { label: "Single Sachet", price: "₹12" },
      { label: "Box of 24 Sachets", price: "₹260" },
    ],
    isBestSeller: true,
    artSeed: 14,
    image: img(16),
    imageAlt: "Pocket-size paan flavour shot packet",
  },

  // ═══════════════════════════════════════════
  //  SAUNF (FENNEL)
  // ═══════════════════════════════════════════
  {
    id: "p15",
    slug: "plain-roasted-saunf",
    name: "Plain Roasted Saunf",
    category: "saunf",
    shortDescription: "Slow-roasted fennel, no sugar",
    description:
      "Fennel seeds roasted low and slow until fragrant, with nothing added — for those who take their after-meal ritual unsweetened.",
    ingredients: ["Fennel seeds"],
    benefits: ["Sugar-free", "Aids digestion", "Naturally fragrant"],
    packSizes: [
      { label: "100 GM", price: "₹25" },
      { label: "250 GM", price: "₹60" },
      { label: "500 GM", price: "₹110" },
      { label: "1 KG", price: "₹210" },
    ],
    artSeed: 15,
    image: img(55),
    imageAlt: "Plain roasted saunf in a premium pouch",
  },
  {
    id: "p16",
    slug: "sugar-coated-saunf",
    name: "Sugar Coated Saunf",
    category: "saunf",
    shortDescription: "The classic sweet shop favourite",
    description:
      "Fennel seeds tumbled in a fine sugar crystal coating — the version you remember from the sweet shop counter. White, clean, and classic.",
    ingredients: ["Fennel seeds", "Sugar crystals", "Edible colour"],
    benefits: ["Classic flavour", "Freshens breath", "Traditional preparation"],
    packSizes: [
      { label: "100 GM", price: "₹20" },
      { label: "250 GM", price: "₹45" },
      { label: "500 GM", price: "₹85" },
      { label: "1 KG", price: "₹160" },
    ],
    isBestSeller: true,
    artSeed: 16,
    image: img(14),
    imageAlt: "Sugar-coated saunf in a glass bowl",
  },
  {
    id: "p17",
    slug: "colourful-saunf",
    name: "Colourful Saunf",
    category: "saunf",
    shortDescription: "Rainbow fennel seed mix",
    description:
      "Fennel seeds coated in vibrant candy colours — a festive favourite that brightens up any after-meal bowl.",
    ingredients: ["Fennel seeds", "Sugar", "Edible colours"],
    benefits: ["Festive colours", "Freshens breath", "Party favourite"],
    packSizes: [
      { label: "100 GM", price: "₹22" },
      { label: "250 GM", price: "₹50" },
      { label: "500 GM", price: "₹95" },
      { label: "1 KG", price: "₹180" },
    ],
    artSeed: 17,
    image: img(70),
    imageAlt: "Colourful saunf in a bowl",
  },

  // ═══════════════════════════════════════════
  //  CHURAN & DIGESTIVES
  // ═══════════════════════════════════════════
  {
    id: "p18",
    slug: "anardana-goli",
    name: "Anardana Goli",
    category: "churan",
    shortDescription: "Pomegranate seed digestive balls",
    description:
      "Hand-rolled pomegranate seed balls with black salt and cumin — a time-tested Ayurvedic churan that cures weak digestion, improves appetite, and reduces nausea.",
    ingredients: ["Dried pomegranate seed (anardana)", "Black salt", "Cumin", "Sugar", "Spices"],
    benefits: ["Cures weak digestion", "Improves appetite", "Reduces nausea"],
    packSizes: [
      { label: "100 GM", price: "₹40" },
      { label: "250 GM", price: "₹95" },
      { label: "500 GM", price: "₹180" },
    ],
    isBestSeller: true,
    artSeed: 18,
    image: img(13),
    imageAlt: "Anardana Goli digestive balls in jar",
  },
  {
    id: "p19",
    slug: "manchali-imli",
    name: "Manchali Imli",
    category: "churan",
    shortDescription: "Tangy tamarind digestive candy",
    description:
      "Tamarind pulp hand-rolled with aromatic spices, black pepper, and rock salt. A tangy-sweet treat that cures weak digestion and improves appetite.",
    ingredients: ["Tamarind pulp", "Sugar", "Black salt", "Black pepper", "Cinnamon", "Natural spices"],
    benefits: ["Cures weak digestion", "Improves appetite", "Reduces nausea"],
    packSizes: [
      { label: "100 GM", price: "₹35" },
      { label: "250 GM", price: "₹80" },
      { label: "500 GM", price: "₹150" },
    ],
    isBestSeller: true,
    artSeed: 19,
    image: img(27),
    imageAlt: "Manchali Imli tamarind digestive",
  },
  {
    id: "p20",
    slug: "anarras-gas-go",
    name: "Anarras Gas-Go",
    category: "churan",
    shortDescription: "Pineapple-flavoured gas relief churan",
    description:
      "A unique pineapple-flavoured digestive churan that provides quick relief from gas and bloating. Rich in antioxidants, Vitamin-C, and boosts immunity.",
    ingredients: ["Pineapple extract", "Black salt", "Cumin", "Ajwain", "Rock salt"],
    benefits: ["Antioxidant", "Rich in Vitamin-C", "Immunity Booster"],
    packSizes: [
      { label: "100 GM", price: "₹40" },
      { label: "250 GM", price: "₹95" },
      { label: "500 GM", price: "₹180" },
    ],
    artSeed: 20,
    image: img(50),
    imageAlt: "Anarras Gas-Go digestive churan",
  },
  {
    id: "p21",
    slug: "mango-slice",
    name: "Mango Slice",
    category: "churan",
    shortDescription: "Dried mango digestive slices",
    description:
      "Sun-dried mango slices seasoned with tangy spices — a delicious snack that doubles as a digestive aid. Cures weak digestion and improves appetite.",
    ingredients: ["Dried mango", "Sugar", "Black salt", "Spices"],
    benefits: ["Cures weak digestion", "Improves appetite", "Reduces nausea"],
    packSizes: [
      { label: "100 GM", price: "₹35" },
      { label: "250 GM", price: "₹80" },
      { label: "500 GM", price: "₹150" },
    ],
    artSeed: 21,
    image: img(50),
    imageAlt: "Mango Slice digestive snack",
  },
  {
    id: "p22",
    slug: "digestive-churan-tablets",
    name: "Digestive Churan Tablets",
    category: "churan",
    shortDescription: "Compressed churan tablets for easy use",
    description:
      "Our classic digestive churan compressed into easy-to-carry tablets. Perfect for travel, office, or after every meal for quick digestive relief.",
    ingredients: ["Cumin", "Black salt", "Asafoetida", "Dried mango powder", "Ajwain"],
    benefits: ["Easy to carry", "Quick relief", "Travel-friendly"],
    packSizes: [
      { label: "50 Tablets", price: "₹30" },
      { label: "100 Tablets", price: "₹55" },
      { label: "200 Tablets", price: "₹100" },
    ],
    artSeed: 22,
    image: img(75),
    imageAlt: "Digestive churan tablets",
  },

  // ═══════════════════════════════════════════
  //  AMLA
  // ═══════════════════════════════════════════
  {
    id: "p23",
    slug: "sweet-amla-candy",
    name: "Sweet Amla Candy",
    category: "amla",
    shortDescription: "Farm-fresh amla, sugar-cured",
    description:
      "Made with farm-fresh amla (Indian gooseberry), our sweet amla candy is a natural antioxidant treat. Rich in Vitamin-C and acts as an immunity booster.",
    ingredients: ["Indian gooseberry (amla)", "Sugar", "Natural spices"],
    benefits: ["Antioxidant", "Rich in Vitamin-C", "Immunity Booster"],
    packSizes: [
      { label: "100 GM", price: "₹40" },
      { label: "250 GM", price: "₹95" },
      { label: "500 GM", price: "₹180" },
      { label: "1 KG", price: "₹350" },
    ],
    isBestSeller: true,
    artSeed: 23,
    image: img(35),
    imageAlt: "Sweet Amla Candy in premium jar",
  },
  {
    id: "p24",
    slug: "chatpata-amla-candy",
    name: "Chatpata Amla Candy",
    category: "amla",
    shortDescription: "Spiced tangy amla candy",
    description:
      "Farm-fresh amla cured with black salt, cumin, and a blend of chatpata spices for a tangy-sweet kick. Antioxidant-rich and packed with Vitamin-C.",
    ingredients: ["Indian gooseberry (amla)", "Black salt", "Cumin", "Red chilli", "Sugar"],
    benefits: ["Antioxidant", "Rich in Vitamin-C", "Immunity Booster"],
    packSizes: [
      { label: "100 GM", price: "₹45" },
      { label: "250 GM", price: "₹110" },
      { label: "500 GM", price: "₹210" },
      { label: "1 KG", price: "₹400" },
    ],
    isNew: true,
    artSeed: 24,
    image: img(60),
    imageAlt: "Chatpata Amla Candy with spices",
  },

  // ═══════════════════════════════════════════
  //  CANDIES
  // ═══════════════════════════════════════════
  {
    id: "p25",
    slug: "orange-candy",
    name: "Orange Candy",
    category: "candies",
    shortDescription: "Tangy orange-flavoured hard candy",
    description:
      "A bright, tangy hard candy bursting with natural orange flavour. Perfect for a quick refresher any time of day.",
    ingredients: ["Sugar", "Orange flavouring", "Citric acid", "Natural colours"],
    benefits: ["Tangy refresher", "Individually wrapped", "Travel-friendly"],
    packSizes: [
      { label: "100 GM", price: "₹25" },
      { label: "250 GM", price: "₹60" },
      { label: "500 GM", price: "₹110" },
      { label: "1 KG", price: "₹200" },
    ],
    artSeed: 25,
    image: img(50),
    imageAlt: "Orange candy in a jar",
  },
  {
    id: "p26",
    slug: "paan-candy",
    name: "Paan Candy",
    category: "candies",
    shortDescription: "Paan-flavoured candy, no leaf needed",
    description:
      "All the flavour of meetha paan, set into a hard candy — gulkand, fennel, and rose notes wrapped in foil. A gifting favourite at festival time.",
    ingredients: ["Gulkand essence", "Fennel", "Sugar", "Rose", "Natural colours"],
    benefits: ["Paan flavour without leaf", "Gifting favourite", "Individually wrapped"],
    packSizes: [
      { label: "100 GM", price: "₹30" },
      { label: "250 GM", price: "₹70" },
      { label: "500 GM", price: "₹130" },
      { label: "1 KG", price: "₹250" },
    ],
    isBestSeller: true,
    artSeed: 26,
    image: img(50),
    imageAlt: "Paan candy individually wrapped",
  },
  {
    id: "p27",
    slug: "imli-candy",
    name: "Imli Candy",
    category: "candies",
    shortDescription: "Tangy tamarind hard candy",
    description:
      "Hand-pulled tamarind candy with a sour-sweet centre — the digestive candy that started in roadside stalls and earned its way onto our shelf.",
    ingredients: ["Tamarind pulp", "Sugar", "Black salt", "Cumin"],
    benefits: ["Digestive aid", "Tangy-sweet", "Individually wrapped"],
    packSizes: [
      { label: "100 GM", price: "₹25" },
      { label: "250 GM", price: "₹60" },
      { label: "500 GM", price: "₹110" },
      { label: "1 KG", price: "₹200" },
    ],
    artSeed: 27,
    image: img(27),
    imageAlt: "Imli candy tamarind",
  },

  // ═══════════════════════════════════════════
  //  SUPARI
  // ═══════════════════════════════════════════
  {
    id: "p28",
    slug: "raseeli-supari",
    name: "Raseeli Supari",
    category: "supari",
    shortDescription: "Juicy sweet-coated betel nut",
    description:
      "Betel nut pieces coated in a rich, juicy sweet mixture with sugar and menthol. A premium mouth freshener that delivers an intense, satisfying chew.",
    ingredients: ["Supari", "Sugar", "Sugar-coated Saunf (menthol)", "Permitted Colour Flavour"],
    benefits: ["Juicy sweet flavour", "Intense freshness", "Premium quality"],
    packSizes: [
      { label: "100 GM", price: "₹60" },
      { label: "250 GM", price: "₹140" },
      { label: "500 GM", price: "₹270" },
    ],
    isBestSeller: true,
    artSeed: 28,
    image: img(26),
    imageAlt: "Raseeli Supari in jar",
  },
  {
    id: "p29",
    slug: "khajoor-supari",
    name: "Khajoor Supari",
    category: "supari",
    shortDescription: "Date-flavoured premium supari",
    description:
      "Supari pieces infused with the natural sweetness of dates (khajoor), creating a unique and indulgent after-meal chew.",
    ingredients: ["Supari", "Date extract", "Sugar", "Natural flavours"],
    benefits: ["Natural date sweetness", "Premium chew", "Traditional preparation"],
    packSizes: [
      { label: "100 GM", price: "₹55" },
      { label: "250 GM", price: "₹130" },
      { label: "500 GM", price: "₹250" },
    ],
    artSeed: 29,
    image: img(10),
    imageAlt: "Khajoor Supari date-flavoured",
  },
  {
    id: "p30",
    slug: "salli-supari",
    name: "Salli Supari",
    category: "supari",
    shortDescription: "Thinly sliced traditional supari",
    description:
      "Betel nut sliced into thin salli strips and dried slow — the traditional cut that supari connoisseurs ask for by name.",
    ingredients: ["Supari", "Rock salt"],
    benefits: ["Traditional cut", "No additives", "Classic preparation"],
    packSizes: [
      { label: "100 GM", price: "₹50" },
      { label: "250 GM", price: "₹120" },
      { label: "500 GM", price: "₹230" },
    ],
    artSeed: 30,
    image: img(11),
    imageAlt: "Salli Supari thinly sliced",
  },
  {
    id: "p31",
    slug: "chikni-meethi-supari",
    name: "Chikni Meethi Supari",
    category: "supari",
    shortDescription: "Smooth sweet supari",
    description:
      "A smooth, polished supari with a gentle sweet coating — our softest cut for those who prefer a mellow, refined chew.",
    ingredients: ["Supari", "Sugar coating", "Cardamom essence"],
    benefits: ["Smooth texture", "Sweet flavour", "Gentle chew"],
    packSizes: [
      { label: "100 GM", price: "₹55" },
      { label: "250 GM", price: "₹130" },
      { label: "500 GM", price: "₹250" },
    ],
    artSeed: 31,
    image: img(9),
    imageAlt: "Chikni Meethi Supari smooth sweet",
  },
  {
    id: "p32",
    slug: "gond-supari",
    name: "Gond Supari",
    category: "supari",
    shortDescription: "Edible gum-coated supari",
    description:
      "Betel nut pieces coated with edible gum (gond) for a unique chewy texture. A distinct preparation passed down through Rajasthani traditions.",
    ingredients: ["Supari", "Edible gum (gond)", "Sugar", "Natural flavours"],
    benefits: ["Unique chewy texture", "Traditional recipe", "Premium quality"],
    packSizes: [
      { label: "100 GM", price: "₹60" },
      { label: "250 GM", price: "₹140" },
      { label: "500 GM", price: "₹270" },
    ],
    isNew: true,
    artSeed: 32,
    image: img(25),
    imageAlt: "Gond Supari edible gum coated",
  },

  // ═══════════════════════════════════════════
  //  TANGY DIGESTIVES
  // ═══════════════════════════════════════════
  {
    id: "p33",
    slug: "gujrati-digestive-mukhwas",
    name: "Gujrati Digestive Mukhwas",
    category: "tangy-digestives",
    shortDescription: "Curated seed mix with turmeric & black salt",
    description:
      "A Gujarati-style digestive mukhwas featuring chia seeds, pumpkin seeds, flax seeds, watermelon seeds, and sunflower seeds — roasted with turmeric and black salt. High in Omega and reduces cholesterol.",
    ingredients: ["Chia Seeds", "Pumpkin Seeds", "Flax Seeds", "Watermelon Seeds", "Sunflower Seeds", "Honey", "Almonds", "Turmeric", "Black Salt"],
    benefits: ["Roasted with Turmeric & Black Salt", "High in Omega", "Reduce Cholesterol & Blood Pressure"],
    packSizes: [
      { label: "100 GM", price: "₹55" },
      { label: "250 GM", price: "₹130" },
      { label: "500 GM", price: "₹250" },
      { label: "1 KG", price: "₹480" },
    ],
    isBestSeller: true,
    artSeed: 33,
    image: img(55),
    imageAlt: "Gujrati Digestive Mukhwas seed mix",
  },
  {
    id: "p34",
    slug: "deluxe-digestive-mix",
    name: "Deluxe Digestive Mix",
    category: "tangy-digestives",
    shortDescription: "Multi-seed premium digestive blend",
    description:
      "Our most elaborate mix — fennel, sesame, melon seed, and chopped dry fruit layered with sugar pearls and a hint of camphor, built for the dinner-party table.",
    ingredients: ["Fennel", "Sesame", "Melon seeds", "Dry fruit", "Sugar pearls", "Camphor"],
    benefits: ["Multi-seed digestion support", "Premium gifting mix"],
    packSizes: [
      { label: "100 GM", price: "₹50" },
      { label: "250 GM", price: "₹120" },
      { label: "500 GM", price: "₹230" },
      { label: "1 KG", price: "₹440" },
    ],
    artSeed: 34,
    image: img(12),
    imageAlt: "Deluxe digestive mix in bowl",
  },

  // ═══════════════════════════════════════════
  //  ROASTED MIXES
  // ═══════════════════════════════════════════
  {
    id: "p35",
    slug: "roasted-seed-trail-mix",
    name: "Roasted Seed Trail Mix",
    category: "roasted-mixes",
    shortDescription: "Slow-roasted premium seed blend",
    description:
      "Pumpkin, sunflower, and melon seeds roasted over a low flame with a touch of rock salt — built as much for snacking as for the after-meal table.",
    ingredients: ["Pumpkin seeds", "Sunflower seeds", "Melon seeds", "Rock salt"],
    benefits: ["High-protein snack", "Deep roasted flavour", "Healthy alternative"],
    packSizes: [
      { label: "100 GM", price: "₹45" },
      { label: "250 GM", price: "₹110" },
      { label: "500 GM", price: "₹210" },
      { label: "1 KG", price: "₹400" },
    ],
    isBestSeller: true,
    artSeed: 35,
    image: img(55),
    imageAlt: "Roasted seed trail mix",
  },
  {
    id: "p36",
    slug: "spiced-roasted-mix",
    name: "Spiced Roasted Mix",
    category: "roasted-mixes",
    shortDescription: "Roasted seeds with chaat masala kick",
    description:
      "The same slow-roasted seed base, finished with a dusting of tangy chaat masala for a sharper, snackable edge.",
    ingredients: ["Pumpkin seeds", "Sunflower seeds", "Chaat masala", "Rock salt"],
    benefits: ["Tangy, spiced flavour", "Snack-ready", "Healthy crunch"],
    packSizes: [
      { label: "100 GM", price: "₹50" },
      { label: "250 GM", price: "₹120" },
      { label: "500 GM", price: "₹230" },
    ],
    isNew: true,
    artSeed: 36,
    image: img(55),
    imageAlt: "Spiced roasted mix with chaat masala",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getRelatedProducts = (product: Product, count = 4) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
