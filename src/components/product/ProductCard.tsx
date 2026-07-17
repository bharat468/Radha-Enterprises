import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Star, Tag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Badges */}
      <div className="absolute top-0 left-0 z-10 flex flex-col items-start">
        {product.isBestSeller && (
          <span className="bg-maroon text-cream text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 sm:py-1 shadow-sm">
            Best Seller
          </span>
        )}
        {mainPrice && (
          <span className="bg-gold text-ink text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 sm:py-1 mt-[1px] flex items-center gap-0.5 sm:gap-1 shadow-sm">
            <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {mainPrice.discount}% off
          </span>
        )}
      </div>

      {/* Image / Art */}
      <Link to={`/products/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-white border-b border-gray-100">
        <motion.div
          className="w-full h-full p-0 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.imageAlt ?? product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="w-full h-full p-6">
              <ProductArt type={category?.art ?? "leaf"} seed={product.artSeed} className="w-full h-full drop-shadow-md" />
            </div>
          )}
        </motion.div>

        {/* Hover overlay actions */}
        <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView?.(product);
            }}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ink shadow-lg hover:bg-maroon hover:text-white transition-colors"
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow bg-white">
        <Link to={`/products/${product.slug}`} className="hover:text-maroon transition-colors mb-1 sm:mb-1.5">
          <h3 className="font-bold text-ink text-sm sm:text-xl leading-tight line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-gold text-gold" />
            ))}
          </div>
        </div>

        <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-5 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex flex-col gap-3 sm:gap-4">
          {/* Price Block */}
          {mainPrice ? (
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                <span className="text-base sm:text-2xl font-bold text-maroon">
                  {mainPrice.current}
                </span>
                <span className="text-[10px] sm:text-sm text-gray-400 font-medium">
                  MRP <span className="line-through">{mainPrice.original}</span>
                </span>
              </div>
              {targetPack?.label && (
                <span className="text-[9px] sm:text-[11px] font-bold text-gray-500 tracking-wide uppercase bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded whitespace-nowrap">
                  {targetPack.label}
                </span>
              )}
            </div>
          ) : (
            <div className="h-6 sm:h-8" /> // spacer
          )}

          <a
            href={`https://wa.me/917023557846?text=${encodeURIComponent(
              `Hi, I'm interested in ${product.name}`
            )}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-maroon hover:bg-maroon-dark text-cream rounded-full py-2 sm:py-3 px-1 sm:px-4 flex items-center justify-center gap-1 sm:gap-2 transition-colors font-semibold text-[11px] sm:text-sm shadow-md hover:shadow-luxury transition-all duration-300 group/btn"
          >
            <FaWhatsapp className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#25D366] group-hover/btn:scale-110 transition-transform shrink-0" />
            <span className="truncate">Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

