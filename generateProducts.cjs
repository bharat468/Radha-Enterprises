const fs = require('fs');

const rawData = `MUKHWAS	Loose	50GM	125GM	250GM	500GM	Box-1KG
GULAAB MUKHWAS	160		30	55	100	190
BAMBAIYA MUKHWAS	160		30	55	100	190
NAVRATAN MUKHWAS	160		30	55	100	190
GARDEN MUKHWAS	160		30	55	100	190
KASHMIRI MUKHWAS	160		30	55	100	190
PINEAPPLE MUKHWAS	160		30	55	100	190
CHOCOLATE MUKHWAS	160		30	55	100	190
JHILMIL MUKHWAS	160		30	55	100	190
KHAS MUKHWAS	160		30	55	100	190
SHAHI KHAS MUKHWAS	160		30	55	100	190
KESARIYA MUKHWAS	160		30	55	100	190
RAJASTHANI MUKHWAS	160		30	55	100	190
GUAVA SHOTS	210		40	70	120	240
KACHI KERI SHOTS	210		40	70	120	240
SAUF GOLI	135		25	45	80	150
PAAANCHURI	180		35	60	110	200
CHOCOLATE MADRASI SAUF	135		25	45	80	150
ANARDANA GOLI	180		35	60	95	205
MANGO SLICE	250		40	75	140	270
JEERA VATI	180		35	60	100	205
PIPAR	180		35	60	100	205
HING GOLI	180		35	60	100	205
PUDINA VATI	180		35	60	100	200
CHATPATA AMLA	190		35	60	110	215
HONEY GINGER AMLA	190		40	75	130	230
BEETROOT AMLA	190		40	75	130	230
BANARASI PAAN	190		40	70	130	230
KALKATI PAAN	190		40	70	130	230
THANDA MEETHA PAAN	190		40	70	130	230
NUTTY FUSION	290		50	95	170	320
GUJRATI DIGESTIVE MUKHWAS	290		50	95	170	320
SUPER SEED MIX	570		95	175	330	600
ALSI TIL GUTLI MIX	290		50	95	165	315
ANARAS GAS GO	280		45	80	145	300
JALJEERA	190		35	60	100	225
PAAN CANDY	130		25	45	75	150
KALI MIRCH CANDY	130		25	45	75	150
KHAJOOR SUPARI	200		35	60	110	220
STICK JELLY	220		35	70	125	245
STAR JELLY	220		35	70	125	245
WATERMELON JELLY	220		35	70	125	245
ROYAL BARMER SUPARI	1200	90	200	390	750	1220
SILVER SUPARI	4050	190	430	990	2010	4080
SILVER ELAICHEE DANA	9950	590	1210	2450	4945	9980
PUMPKIN SEEDS	510		55	120	255	530
SILVER ELAICHEE 	8150	470	990	2010	4075	8180`;

const lines = rawData.trim().split('\n');
const items = [];

const toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.substring(1)).join(' ');
};

const getCategory = (name) => {
    name = name.toUpperCase();
    if (name.includes('JELLY')) return 'jelly';
    if (name.includes('MUKHWAS')) return 'sweet-mukhwas';
    if (name.includes('SHOTS')) return 'shots';
    if (name.includes('SAUF') || name.includes('SAUNF')) return 'saunf';
    if (name.includes('PAAN') && !name.includes('CANDY')) return 'paan';
    if (name.includes('CANDY')) return 'candies';
    if (name.includes('AMLA')) return 'amla';
    if (name.includes('SUPARI')) return 'supari';
    if (name.includes('ELAICHEE')) return 'premium';
    if (name.includes('MIX') || name.includes('SEEDS') || name.includes('FUSION')) return 'roasted-mixes';
    if (name.includes('GOLI') || name.includes('VATI') || name.includes('SLICE') || name.includes('GAS GO') || name.includes('JALJEERA') || name.includes('PIPAR') || name.includes('PAAANCHURI')) return 'churan';
    return 'tangy-digestives';
};

lines.slice(1).forEach((line, i) => {
    let parts = line.split('\t');
    if (parts.length < 2) return;
    
    let nameStr = parts[0].trim();
    let name = toTitleCase(nameStr);
    let category = getCategory(nameStr);
    
    // Some lines might not have 7 columns if they are empty
    // The columns are: Name, Loose, 50GM, 125GM, 250GM, 500GM, Box-1KG
    let packSizes = [];
    const sizes = ['Loose', '50 GM', '125 GM', '250 GM', '500 GM', '1 KG Box'];
    
    for (let j = 1; j <= 6; j++) {
        let p = parts[j] ? parts[j].trim() : '';
        if (p) {
            packSizes.push({
                label: sizes[j-1],
                price: `₹${p}`
            });
        }
    }
    
    let id = `p${(i + 40).toString().padStart(2, '0')}`;
    let slug = nameStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let artSeed = (i % 75) + 1;
    
    items.push({
        id,
        slug,
        name,
        category,
        shortDescription: `Premium quality ${name.toLowerCase()}`,
        description: `Enjoy the authentic taste of ${name}. Crafted with premium ingredients for the perfect after-meal treat.`,
        ingredients: ['Premium ingredients', 'Natural flavours'],
        benefits: ['Freshens breath', 'Aids digestion'],
        packSizes,
        artSeed,
        image: `img(${artSeed})`,
        imageAlt: name
    });
});

console.log(JSON.stringify(items, null, 2));
fs.writeFileSync('C:/Users/bharat/OneDrive/Desktop/radha-enterprises/new_products.json', JSON.stringify(items, null, 2));
