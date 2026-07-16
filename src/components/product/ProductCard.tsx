import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, MessageCircle, ShoppingBag } from "lucide-react";
import type { Product } from "../../data/types";
import { getCategory } from "../../data/categories";
import ProductArt from "../common/ProductArt";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const category = getCategory(product.category);

  const getPriceData = (priceStr?: string) => {
    if (!priceStr) return null;
    const num = parseInt(priceStr.replace(/[^\d]/g, ""), 10);
    if (isNaN(num)) return null;
    
    // Deterministic discount between 20% and 30%
    const discount = 20 + (product.name.length % 11); 
    const original = Math.round(num / (1 - discount / 100));
    return { current: priceStr, original: `₹${original}`, discount };
  };

  const targetPack = product.packSizes.find(p => {
    const label = p.label.toUpperCase();
    return label.includes("500 GM") || label.includes("BOX OF 6") || label.includes("BOX OF 24");
  }) || product.packSizes[0];
  const mainPrice = getPriceData(targetPack?.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isBestSeller && (
          <span className="bg-maroon text-cream text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="bg-gold text-ink text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
            New
          </span>
        )}
      </div>

      {mainPrice && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#E53935] text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm">
            {mainPrice.discount}% OFF
          </span>
        </div>
      )}

      {/* Image / Art */}
      <Link to={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden bg-gradient-to-br from-cream to-gold/10">
        <motion.div
          className="w-full h-full p-0"
          whileHover={{ scale: 1.06, rotate: 1 }}
          transition={{ duration: 0.5 }}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.imageAlt ?? product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="w-full h-full p-6">
              <ProductArt type={category?.art ?? "leaf"} seed={product.artSeed} className="w-full h-full drop-shadow-xl" />
            </div>
          )}
        </motion.div>

        {/* Hover overlay actions */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView?.(product);
            }}
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-ink shadow-lg hover:bg-maroon hover:text-white transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
          <a
            href={`https://wa.me/917023557846?text=${encodeURIComponent(
              `Hi, I'm interested in ${product.name}`
            )}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
            aria-label="WhatsApp inquiry"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <p className="text-[11px] uppercase tracking-wider text-ink/40 font-semibold mb-1">
          {category?.name}
        </p>
        <Link to={`/products/${product.slug}`} className="hover:text-maroon transition-colors">
          <h3 className="font-display text-lg text-ink leading-snug mb-1 line-clamp-1">{product.name}</h3>
        </Link>
        <p className="text-xs text-ink/60 leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
          {product.shortDescription}
        </p>

        <div className="mt-auto">
          {/* Price Block */}
          {mainPrice ? (
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-xl font-bold text-ink">
                {mainPrice.current}
              </span>
              <span className="text-sm text-ink/40 line-through">
                {mainPrice.original}
              </span>
            </div>
          ) : (
            <div className="h-7 mb-4" /> // spacer
          )}

          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {product.packSizes.slice(0, 3).map((p) => (
                <span
                  key={p.label}
                  className="text-[10px] px-1.5 py-0.5 rounded border border-ink/10 text-ink/60"
                  title={p.price ? `${p.label} - ${p.price}` : p.label}
                >
                  {p.label}
                </span>
              ))}
            </div>
            
            <Link
              to={`/products/${product.slug}`}
              className="text-maroon hover:bg-maroon/5 p-2 rounded-full transition-colors"
              aria-label="View Details"
            >
              <ShoppingBag size={18} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

