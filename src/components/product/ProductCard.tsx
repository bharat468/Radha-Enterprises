import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import type { Product } from "../../data/types";
import { getCategory } from "../../data/categories";
import ProductArt from "../common/ProductArt";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const category = getCategory(product.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gold/20 shadow-luxury hover:shadow-luxury-lg transition-shadow duration-500"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isBestSeller && (
          <span className="bg-maroon-gradient text-cream text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-gold">
            Best Seller
          </span>
        )}
        {product.isNew && (
          <span className="bg-gold text-ink text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
            New
          </span>
        )}
      </div>

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

        <div className="absolute inset-x-0 top-0 flex justify-between p-3">
          <span className="rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-maroon shadow-sm">
            {category?.name}
          </span>
          {product.packSizes[0]?.price && (
            <span className="rounded-full bg-maroon-gradient px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream shadow-gold">
              From {product.packSizes[0].price}
            </span>
          )}
        </div>

        {/* Hover overlay actions */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView?.(product);
              }}
              className="w-10 h-10 rounded-full bg-cream/95 flex items-center justify-center text-maroon shadow-luxury hover:bg-gold transition-colors"
              aria-label="Quick view"
            >
              <Eye size={17} />
            </button>
            <a
              href={`https://wa.me/917023557846?text=${encodeURIComponent(
                `Hi, I'm interested in ${product.name}`
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-luxury hover:scale-105 transition-transform"
              aria-label="WhatsApp inquiry"
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-wider text-gold-muted font-medium mb-1">
          {category?.name}
        </p>
        <h3 className="font-display text-lg text-ink leading-snug mb-1">{product.name}</h3>
        <p className="text-xs text-ink/55 leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.packSizes.slice(0, 2).map((p) => (
            <span
              key={p.label}
              className="text-[10px] px-2 py-1 rounded-full bg-maroon/5 text-maroon border border-maroon/15"
            >
              {p.label}
              {p.price ? ` • ${p.price}` : ""}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gold-muted mb-4">
          <Sparkles size={13} />
          Premium taste • premium finish
        </div>

        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-maroon group-hover:gap-2 transition-all"
        >
          View Details <ArrowUpRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
