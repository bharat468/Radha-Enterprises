import type { Product } from "./types";

const img = (n: number) => new URL(`../assets/product-image/${n}.jpeg`, import.meta.url).href;

export const products: Product[] = [
{
  "id": "p40",
  "slug": "gulaab-mukhwas",
  "name": "Gulaab Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality gulaab mukhwas",
  "description": "Enjoy the authentic taste of Gulaab Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 1,
  "imageAlt": "Gulaab Mukhwas",
  image: img(1)
},
{
  "id": "p41",
  "slug": "bambaiya-mukhwas",
  "name": "Bambaiya Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality bambaiya mukhwas",
  "description": "Enjoy the authentic taste of Bambaiya Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 2,
  "imageAlt": "Bambaiya Mukhwas",
  image: img(2)
},
{
  "id": "p42",
  "slug": "navratan-mukhwas",
  "name": "Navratan Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality navratan mukhwas",
  "description": "Enjoy the authentic taste of Navratan Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 3,
  "imageAlt": "Navratan Mukhwas",
  image: img(3)
},
{
  "id": "p43",
  "slug": "garden-mukhwas",
  "name": "Garden Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality garden mukhwas",
  "description": "Enjoy the authentic taste of Garden Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 4,
  "imageAlt": "Garden Mukhwas",
  image: img(4)
},
{
  "id": "p44",
  "slug": "kashmiri-mukhwas",
  "name": "Kashmiri Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality kashmiri mukhwas",
  "description": "Enjoy the authentic taste of Kashmiri Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 5,
  "imageAlt": "Kashmiri Mukhwas",
  image: img(5)
},
{
  "id": "p45",
  "slug": "pineapple-mukhwas",
  "name": "Pineapple Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality pineapple mukhwas",
  "description": "Enjoy the authentic taste of Pineapple Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 6,
  "imageAlt": "Pineapple Mukhwas",
  image: img(6)
},
{
  "id": "p46",
  "slug": "chocolate-mukhwas",
  "name": "Chocolate Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality chocolate mukhwas",
  "description": "Enjoy the authentic taste of Chocolate Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 7,
  "imageAlt": "Chocolate Mukhwas",
  image: img(7)
},
{
  "id": "p47",
  "slug": "jhilmil-mukhwas",
  "name": "Jhilmil Mukhwas",
  "category": "sweet-mukhwas",
  "shortDescription": "Premium quality jhilmil mukhwas",
  "description": "Enjoy the authentic taste of Jhilmil Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 8,
  "imageAlt": "Jhilmil Mukhwas",
  image: img(8)
},
{
  "id": "p48",
  "slug": "khas-mukhwas",
  "name": "Khas Mukhwas",
  "category": "sweet-mukhwas",
  "shortDescription": "Premium quality khas mukhwas",
  "description": "Enjoy the authentic taste of Khas Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 9,
  "imageAlt": "Khas Mukhwas",
  image: img(9)
},
{
  "id": "p49",
  "slug": "shahi-khas-mukhwas",
  "name": "Shahi Khas Mukhwas",
  "category": "sweet-mukhwas",
  "shortDescription": "Premium quality shahi khas mukhwas",
  "description": "Enjoy the authentic taste of Shahi Khas Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 10,
  "imageAlt": "Shahi Khas Mukhwas",
  image: img(10)
},
{
  "id": "p50",
  "slug": "kesariya-mukhwas",
  "name": "Kesariya Mukhwas",
  "category": "sweet-mukhwas",
  "shortDescription": "Premium quality kesariya mukhwas",
  "description": "Enjoy the authentic taste of Kesariya Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 11,
  "imageAlt": "Kesariya Mukhwas",
  image: img(11)
},
{
  "id": "p51",
  "slug": "rajasthani-mukhwas",
  "name": "Rajasthani Mukhwas",
  "category": "sweet-mukhwas",
  "isBestSeller": true,
  "shortDescription": "Premium quality rajasthani mukhwas",
  "description": "Enjoy the authentic taste of Rajasthani Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹160"
    },
    {
      "label": "125 GM",
      "price": "₹30"
    },
    {
      "label": "250 GM",
      "price": "₹55"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹190"
    }
  ],
  "artSeed": 12,
  "imageAlt": "Rajasthani Mukhwas",
  image: img(12)
},
{
  "id": "p52",
  "slug": "guava-shots",
  "name": "Guava Shots",
  "category": "shots",
  "shortDescription": "Premium quality guava shots",
  "description": "Enjoy the authentic taste of Guava Shots. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹210"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹120"
    },
    {
      "label": "1 KG Box",
      "price": "₹240"
    }
  ],
  "artSeed": 13,
  "imageAlt": "Guava Shots",
  image: img(13)
},
{
  "id": "p53",
  "slug": "kachi-keri-shots",
  "name": "Kachi Keri Shots",
  "category": "shots",
  "shortDescription": "Premium quality kachi keri shots",
  "description": "Enjoy the authentic taste of Kachi Keri Shots. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹210"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹120"
    },
    {
      "label": "1 KG Box",
      "price": "₹240"
    }
  ],
  "artSeed": 14,
  "imageAlt": "Kachi Keri Shots",
  image: img(14)
},
{
  "id": "p54",
  "slug": "sauf-goli",
  "name": "Sauf Goli",
  "category": "saunf",
  "shortDescription": "Premium quality sauf goli",
  "description": "Enjoy the authentic taste of Sauf Goli. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹135"
    },
    {
      "label": "125 GM",
      "price": "₹25"
    },
    {
      "label": "250 GM",
      "price": "₹45"
    },
    {
      "label": "500 GM",
      "price": "₹80"
    },
    {
      "label": "1 KG Box",
      "price": "₹150"
    }
  ],
  "artSeed": 15,
  "imageAlt": "Sauf Goli",
  image: img(15)
},
{
  "id": "p55",
  "slug": "paaanchuri",
  "name": "Paaanchuri",
  "category": "churan",
  "shortDescription": "Premium quality paaanchuri",
  "description": "Enjoy the authentic taste of Paaanchuri. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹180"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹110"
    },
    {
      "label": "1 KG Box",
      "price": "₹200"
    }
  ],
  "artSeed": 16,
  "imageAlt": "Paaanchuri",
  image: img(16)
},
{
  "id": "p56",
  "slug": "chocolate-madrasi-sauf",
  "name": "Chocolate Madrasi Sauf",
  "category": "saunf",
  "shortDescription": "Premium quality chocolate madrasi sauf",
  "description": "Enjoy the authentic taste of Chocolate Madrasi Sauf. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹135"
    },
    {
      "label": "125 GM",
      "price": "₹25"
    },
    {
      "label": "250 GM",
      "price": "₹45"
    },
    {
      "label": "500 GM",
      "price": "₹80"
    },
    {
      "label": "1 KG Box",
      "price": "₹150"
    }
  ],
  "artSeed": 17,
  "imageAlt": "Chocolate Madrasi Sauf",
  image: img(17)
},
{
  "id": "p57",
  "slug": "anardana-goli",
  "name": "Anardana Goli",
  "category": "churan",
  "shortDescription": "Premium quality anardana goli",
  "description": "Enjoy the authentic taste of Anardana Goli. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹180"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹95"
    },
    {
      "label": "1 KG Box",
      "price": "₹205"
    }
  ],
  "artSeed": 18,
  "imageAlt": "Anardana Goli",
  image: img(18)
},
{
  "id": "p58",
  "slug": "mango-slice",
  "name": "Mango Slice",
  "category": "churan",
  "shortDescription": "Premium quality mango slice",
  "description": "Enjoy the authentic taste of Mango Slice. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹250"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹75"
    },
    {
      "label": "500 GM",
      "price": "₹140"
    },
    {
      "label": "1 KG Box",
      "price": "₹270"
    }
  ],
  "artSeed": 19,
  "imageAlt": "Mango Slice",
  image: img(19)
},
{
  "id": "p59",
  "slug": "jeera-vati",
  "name": "Jeera Vati",
  "category": "churan",
  "shortDescription": "Premium quality jeera vati",
  "description": "Enjoy the authentic taste of Jeera Vati. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹180"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹205"
    }
  ],
  "artSeed": 20,
  "imageAlt": "Jeera Vati",
  image: img(20)
},
{
  "id": "p60",
  "slug": "pipar",
  "name": "Pipar",
  "category": "churan",
  "shortDescription": "Premium quality pipar",
  "description": "Enjoy the authentic taste of Pipar. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹180"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹205"
    }
  ],
  "artSeed": 21,
  "imageAlt": "Pipar",
  image: img(21)
},
{
  "id": "p61",
  "slug": "hing-goli",
  "name": "Hing Goli",
  "category": "churan",
  "shortDescription": "Premium quality hing goli",
  "description": "Enjoy the authentic taste of Hing Goli. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹180"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹205"
    }
  ],
  "artSeed": 22,
  "imageAlt": "Hing Goli",
  image: img(22)
},
{
  "id": "p62",
  "slug": "pudina-vati",
  "name": "Pudina Vati",
  "category": "churan",
  "shortDescription": "Premium quality pudina vati",
  "description": "Enjoy the authentic taste of Pudina Vati. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹180"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹200"
    }
  ],
  "artSeed": 23,
  "imageAlt": "Pudina Vati",
  image: img(23)
},
{
  "id": "p63",
  "slug": "chatpata-amla",
  "name": "Chatpata Amla",
  "category": "amla",
  "shortDescription": "Premium quality chatpata amla",
  "description": "Enjoy the authentic taste of Chatpata Amla. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹110"
    },
    {
      "label": "1 KG Box",
      "price": "₹215"
    }
  ],
  "artSeed": 24,
  "imageAlt": "Chatpata Amla",
  image: img(24)
},
{
  "id": "p64",
  "slug": "honey-ginger-amla",
  "name": "Honey Ginger Amla",
  "category": "amla",
  "shortDescription": "Premium quality honey ginger amla",
  "description": "Enjoy the authentic taste of Honey Ginger Amla. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹75"
    },
    {
      "label": "500 GM",
      "price": "₹130"
    },
    {
      "label": "1 KG Box",
      "price": "₹230"
    }
  ],
  "artSeed": 25,
  "imageAlt": "Honey Ginger Amla",
  image: img(25)
},
{
  "id": "p65",
  "slug": "beetroot-amla",
  "name": "Beetroot Amla",
  "category": "amla",
  "shortDescription": "Premium quality beetroot amla",
  "description": "Enjoy the authentic taste of Beetroot Amla. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹75"
    },
    {
      "label": "500 GM",
      "price": "₹130"
    },
    {
      "label": "1 KG Box",
      "price": "₹230"
    }
  ],
  "artSeed": 26,
  "imageAlt": "Beetroot Amla",
  image: img(26)
},
{
  "id": "p66",
  "slug": "banarasi-paan",
  "name": "Banarasi Paan",
  "category": "paan",
  "shortDescription": "Premium quality banarasi paan",
  "description": "Enjoy the authentic taste of Banarasi Paan. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹130"
    },
    {
      "label": "1 KG Box",
      "price": "₹230"
    }
  ],
  "artSeed": 27,
  "imageAlt": "Banarasi Paan",
  image: img(27)
},
{
  "id": "p67",
  "slug": "kalkati-paan",
  "name": "Kalkati Paan",
  "category": "paan",
  "shortDescription": "Premium quality kalkati paan",
  "description": "Enjoy the authentic taste of Kalkati Paan. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹130"
    },
    {
      "label": "1 KG Box",
      "price": "₹230"
    }
  ],
  "artSeed": 28,
  "imageAlt": "Kalkati Paan",
  image: img(28)
},
{
  "id": "p68",
  "slug": "thanda-meetha-paan",
  "name": "Thanda Meetha Paan",
  "category": "paan",
  "shortDescription": "Premium quality thanda meetha paan",
  "description": "Enjoy the authentic taste of Thanda Meetha Paan. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹40"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹130"
    },
    {
      "label": "1 KG Box",
      "price": "₹230"
    }
  ],
  "artSeed": 29,
  "imageAlt": "Thanda Meetha Paan",
  image: img(29)
},
{
  "id": "p69",
  "slug": "nutty-fusion",
  "name": "Nutty Fusion",
  "category": "roasted-mixes",
  "shortDescription": "Premium quality nutty fusion",
  "description": "Enjoy the authentic taste of Nutty Fusion. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹290"
    },
    {
      "label": "125 GM",
      "price": "₹50"
    },
    {
      "label": "250 GM",
      "price": "₹95"
    },
    {
      "label": "500 GM",
      "price": "₹170"
    },
    {
      "label": "1 KG Box",
      "price": "₹320"
    }
  ],
  "artSeed": 30,
  "imageAlt": "Nutty Fusion",
  image: img(30)
},
{
  "id": "p70",
  "slug": "gujrati-digestive-mukhwas",
  "name": "Gujrati Digestive Mukhwas",
  "category": "sweet-mukhwas",
  "shortDescription": "Premium quality gujrati digestive mukhwas",
  "description": "Enjoy the authentic taste of Gujrati Digestive Mukhwas. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹290"
    },
    {
      "label": "125 GM",
      "price": "₹50"
    },
    {
      "label": "250 GM",
      "price": "₹95"
    },
    {
      "label": "500 GM",
      "price": "₹170"
    },
    {
      "label": "1 KG Box",
      "price": "₹320"
    }
  ],
  "artSeed": 31,
  "imageAlt": "Gujrati Digestive Mukhwas",
  image: img(31)
},
{
  "id": "p71",
  "slug": "super-seed-mix",
  "name": "Super Seed Mix",
  "category": "roasted-mixes",
  "shortDescription": "Premium quality super seed mix",
  "description": "Enjoy the authentic taste of Super Seed Mix. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹570"
    },
    {
      "label": "125 GM",
      "price": "₹95"
    },
    {
      "label": "250 GM",
      "price": "₹175"
    },
    {
      "label": "500 GM",
      "price": "₹330"
    },
    {
      "label": "1 KG Box",
      "price": "₹600"
    }
  ],
  "artSeed": 32,
  "imageAlt": "Super Seed Mix",
  image: img(32)
},
{
  "id": "p72",
  "slug": "alsi-til-gutli-mix",
  "name": "Alsi Til Gutli Mix",
  "category": "roasted-mixes",
  "shortDescription": "Premium quality alsi til gutli mix",
  "description": "Enjoy the authentic taste of Alsi Til Gutli Mix. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹290"
    },
    {
      "label": "125 GM",
      "price": "₹50"
    },
    {
      "label": "250 GM",
      "price": "₹95"
    },
    {
      "label": "500 GM",
      "price": "₹165"
    },
    {
      "label": "1 KG Box",
      "price": "₹315"
    }
  ],
  "artSeed": 33,
  "imageAlt": "Alsi Til Gutli Mix",
  image: img(33)
},
{
  "id": "p73",
  "slug": "anaras-gas-go",
  "name": "Anaras Gas Go",
  "category": "churan",
  "isBestSeller": true,
  "shortDescription": "Premium quality anaras gas go",
  "description": "Enjoy the authentic taste of Anaras Gas Go. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹280"
    },
    {
      "label": "125 GM",
      "price": "₹45"
    },
    {
      "label": "250 GM",
      "price": "₹80"
    },
    {
      "label": "500 GM",
      "price": "₹145"
    },
    {
      "label": "1 KG Box",
      "price": "₹300"
    }
  ],
  "artSeed": 34,
  "imageAlt": "Anaras Gas Go",
  image: img(34)
},
{
  "id": "p74",
  "slug": "jaljeera",
  "name": "Jaljeera",
  "category": "churan",
  "shortDescription": "Premium quality jaljeera",
  "description": "Enjoy the authentic taste of Jaljeera. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹100"
    },
    {
      "label": "1 KG Box",
      "price": "₹225"
    }
  ],
  "artSeed": 35,
  "imageAlt": "Jaljeera",
  image: img(35)
},
{
  "id": "p75",
  "slug": "paan-candy",
  "name": "Paan Candy",
  "category": "candies",
  "shortDescription": "Premium quality paan candy",
  "description": "Enjoy the authentic taste of Paan Candy. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹130"
    },
    {
      "label": "125 GM",
      "price": "₹25"
    },
    {
      "label": "250 GM",
      "price": "₹45"
    },
    {
      "label": "500 GM",
      "price": "₹75"
    },
    {
      "label": "1 KG Box",
      "price": "₹150"
    }
  ],
  "artSeed": 36,
  "imageAlt": "Paan Candy",
  image: img(36)
},
{
  "id": "p76",
  "slug": "kali-mirch-candy",
  "name": "Kali Mirch Candy",
  "category": "candies",
   "isBestSeller": true,
  "shortDescription": "Premium quality kali mirch candy",
  "description": "Enjoy the authentic taste of Kali Mirch Candy. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹130"
    },
    {
      "label": "125 GM",
      "price": "₹25"
    },
    {
      "label": "250 GM",
      "price": "₹45"
    },
    {
      "label": "500 GM",
      "price": "₹75"
    },
    {
      "label": "1 KG Box",
      "price": "₹150"
    }
  ],
  "artSeed": 37,
  "imageAlt": "Kali Mirch Candy",
  image: img(37)
},
{
  "id": "p77",
  "slug": "khajoor-supari",
  "name": "Khajoor Supari",
  "category": "supari",
  "shortDescription": "Premium quality khajoor supari",
  "description": "Enjoy the authentic taste of Khajoor Supari. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹200"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹60"
    },
    {
      "label": "500 GM",
      "price": "₹110"
    },
    {
      "label": "1 KG Box",
      "price": "₹220"
    }
  ],
  "artSeed": 38,
  "imageAlt": "Khajoor Supari",
  image: img(38)
},
{
  "id": "p78",
  "slug": "stick-jelly",
  "name": "Stick Jelly",
  "category": "jelly",
  "shortDescription": "Premium quality stick jelly",
  "description": "Enjoy the authentic taste of Stick Jelly. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹220"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹125"
    },
    {
      "label": "1 KG Box",
      "price": "₹245"
    }
  ],
  "artSeed": 39,
  "imageAlt": "Stick Jelly",
  image: img(39)
},
{
  "id": "p79",
  "slug": "star-jelly",
  "name": "Star Jelly",
  "category": "jelly",
  "shortDescription": "Premium quality star jelly",
  "description": "Enjoy the authentic taste of Star Jelly. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹220"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹125"
    },
    {
      "label": "1 KG Box",
      "price": "₹245"
    }
  ],
  "artSeed": 40,
  "imageAlt": "Star Jelly",
  image: img(40)
},
{
  "id": "p80",
  "slug": "watermelon-jelly",
  "name": "Watermelon Jelly",
  "category": "jelly",
  "shortDescription": "Premium quality watermelon jelly",
  "description": "Enjoy the authentic taste of Watermelon Jelly. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹220"
    },
    {
      "label": "125 GM",
      "price": "₹35"
    },
    {
      "label": "250 GM",
      "price": "₹70"
    },
    {
      "label": "500 GM",
      "price": "₹125"
    },
    {
      "label": "1 KG Box",
      "price": "₹245"
    }
  ],
  "artSeed": 41,
  "imageAlt": "Watermelon Jelly",
  image: img(41)
},
{
  "id": "p81",
  "slug": "royal-barmer-supari",
  "name": "Royal Barmer Supari",
  "category": "supari",
   "isBestSeller": true,
  "shortDescription": "Premium quality royal barmer supari",
  "description": "Enjoy the authentic taste of Royal Barmer Supari. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹1200"
    },
    {
      "label": "50 GM",
      "price": "₹90"
    },
    {
      "label": "125 GM",
      "price": "₹200"
    },
    {
      "label": "250 GM",
      "price": "₹390"
    },
    {
      "label": "500 GM",
      "price": "₹750"
    },
    {
      "label": "1 KG Box",
      "price": "₹1220"
    }
  ],
  "artSeed": 42,
  "imageAlt": "Royal Barmer Supari",
  image: img(42)
},
{
  "id": "p82",
  "slug": "silver-supari",
  "name": "Silver Supari",
  "category": "supari",
  "shortDescription": "Premium quality silver supari",
  "description": "Enjoy the authentic taste of Silver Supari. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹4050"
    },
    {
      "label": "50 GM",
      "price": "₹190"
    },
    {
      "label": "125 GM",
      "price": "₹430"
    },
    {
      "label": "250 GM",
      "price": "₹990"
    },
    {
      "label": "500 GM",
      "price": "₹2010"
    },
    {
      "label": "1 KG Box",
      "price": "₹4080"
    }
  ],
  "artSeed": 43,
  "imageAlt": "Silver Supari",
  image: img(43)
},
{
  "id": "p83",
  "slug": "silver-elaichee-dana",
  "name": "Silver Elaichee Dana",
  "category": "premium",
  "shortDescription": "Premium quality silver elaichee dana",
  "description": "Enjoy the authentic taste of Silver Elaichee Dana. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹9950"
    },
    {
      "label": "50 GM",
      "price": "₹590"
    },
    {
      "label": "125 GM",
      "price": "₹1210"
    },
    {
      "label": "250 GM",
      "price": "₹2450"
    },
    {
      "label": "500 GM",
      "price": "₹4945"
    },
    {
      "label": "1 KG Box",
      "price": "₹9980"
    }
  ],
  "artSeed": 44,
  "imageAlt": "Silver Elaichee Dana",
  image: img(44)
},
{
  "id": "p84",
  "slug": "pumpkin-seeds",
  "name": "Pumpkin Seeds",
  "category": "roasted-mixes",
   "isBestSeller": true,
  "shortDescription": "Premium quality pumpkin seeds",
  "description": "Enjoy the authentic taste of Pumpkin Seeds. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹510"
    },
    {
      "label": "125 GM",
      "price": "₹55"
    },
    {
      "label": "250 GM",
      "price": "₹120"
    },
    {
      "label": "500 GM",
      "price": "₹255"
    },
    {
      "label": "1 KG Box",
      "price": "₹530"
    }
  ],
  "artSeed": 45,
  "imageAlt": "Pumpkin Seeds",
  image: img(45)
},
{
  "id": "p85",
  "slug": "silver-elaichee",
  "name": "Silver Elaichee",
  "category": "premium",
  "shortDescription": "Premium quality silver elaichee",
  "description": "Enjoy the authentic taste of Silver Elaichee. Crafted with premium ingredients for the perfect after-meal treat.",
  "ingredients": [
    "Premium ingredients",
    "Natural flavours"
  ],
  "benefits": [
    "Freshens breath",
    "Aids digestion"
  ],
  "packSizes": [
    {
      "label": "Loose",
      "price": "₹8150"
    },
    {
      "label": "50 GM",
      "price": "₹470"
    },
    {
      "label": "125 GM",
      "price": "₹990"
    },
    {
      "label": "250 GM",
      "price": "₹2010"
    },
    {
      "label": "500 GM",
      "price": "₹4075"
    },
    {
      "label": "1 KG Box",
      "price": "₹8180"
    }
  ],
  "artSeed": 46,
  "imageAlt": "Silver Elaichee",
  image: img(46)
},
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: string) => products.filter((p) => p.category === category);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getRelatedProducts = (product: Product, count = 4) => products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
