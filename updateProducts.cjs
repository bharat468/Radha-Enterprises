const fs = require('fs');
const items = JSON.parse(fs.readFileSync('new_products.json'));
let out = `import type { Product } from "./types";

const img = (n: number) => new URL(\`../assets/product-image/\${n}.jpeg\`, import.meta.url).href;

export const products: Product[] = [
`;
items.forEach(item => {
    let imgStr = item.image;
    delete item.image;
    let str = JSON.stringify(item, null, 2);
    str = str.replace(/\}$/, '  image: ' + imgStr + '\n}');
    str = str.replace(/"imageAlt": "([^"]+)"\n  image:/g, '"imageAlt": "$1",\n  image:');
    out += str + ',\n';
});
out += `];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: string) => products.filter((p) => p.category === category);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getRelatedProducts = (product: Product, count = 4) => products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
`;
fs.writeFileSync('src/data/products.ts', out);
