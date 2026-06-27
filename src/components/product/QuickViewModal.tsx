import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../../data/types";
import { getCategory } from "../../data/categories";
import ProductArt from "../common/ProductArt";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const category = product ? getCategory(product.category) : undefined;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-cream rounded-3xl overflow-hidden max-w-2xl w-full shadow-luxury-lg grid grid-cols-1 sm:grid-cols-2 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-ink hover:bg-gold transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="bg-gradient-to-br from-gold/10 to-maroon/5 p-0 flex items-center justify-center">
              {product.image ? (
                <img src={product.image} alt={product.imageAlt ?? product.name} className="h-full w-full object-cover" />
              ) : (
                <div className="p-8 flex items-center justify-center w-full">
                  <ProductArt type={category?.art ?? "leaf"} seed={product.artSeed} className="w-full h-auto max-w-[220px]" />
                </div>
              )}
            </div>

            <div className="p-6 sm:p-7 flex flex-col">
              <p className="text-[11px] uppercase tracking-wider text-gold-muted font-medium mb-1">
                {category?.name}
              </p>
              <h3 className="font-display text-2xl text-ink mb-2">{product.name}</h3>
              <p className="text-sm text-ink/65 leading-relaxed mb-4">{product.description}</p>

              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-maroon font-semibold mb-2">Pack Sizes</p>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((p) => (
                    <span key={p.label} className="text-xs px-3 py-1.5 rounded-full bg-maroon/5 border border-maroon/15 text-maroon">
                      {p.label}
                      {p.price ? ` • ${p.price}` : ""}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-2 pt-2">
                <a
                  href={`https://wa.me/910000000000?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle size={16} /> Inquire on WhatsApp
                </a>
                <Link
                  to={`/products/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 border-2 border-maroon text-maroon px-4 py-2.5 rounded-full text-sm font-medium hover:bg-maroon/5 transition-colors"
                >
                  View Full Details <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
