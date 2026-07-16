import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MessageCircle, Check, Sparkles, ZoomIn } from "lucide-react";
import { getProduct, getRelatedProducts } from "../data/products";
import { getCategory } from "../data/categories";
import ProductArt from "../components/common/ProductArt";
import ProductCard from "../components/product/ProductCard";
import QuickViewModal from "../components/product/QuickViewModal";
import type { Product } from "../data/types";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug ?? "");
  const [selectedPack, setSelectedPack] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);

  if (!product) return <Navigate to="/products" replace />;

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const thumbnails = product.image
    ? [product.image, product.image, product.image]
    : [product.artSeed, product.artSeed + 100, product.artSeed + 200];
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <div className="bg-cream min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-ink/50 text-xs mb-8 flex-wrap">
          <Link to="/" className="hover:text-maroon">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-maroon">Products</Link>
          <ChevronRight size={12} />
          <Link to={`/products/category/${category?.slug}`} className="hover:text-maroon">{category?.name}</Link>
          <ChevronRight size={12} />
          <span className="text-maroon">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div
              className="relative aspect-square rounded-3xl bg-gradient-to-br from-gold/10 to-maroon/5 border border-gold/20 p-2 cursor-zoom-in overflow-hidden"
              onClick={() => setZoomed(true)}
            >
              <motion.div
                key={activeThumb}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full"
              >
                {product.image && typeof thumbnails[activeThumb] === "string" ? (
                  <img
                    src={thumbnails[activeThumb]}
                    alt={product.imageAlt ?? product.name}
                    className="h-full w-full rounded-[1.4rem] object-cover"
                  />
                ) : (
                  <ProductArt type={category?.art ?? "leaf"} seed={thumbnails[activeThumb] as number} className="w-full h-full" />
                )}
              </motion.div>
              <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-maroon shadow-luxury">
                <ZoomIn size={16} />
              </div>
              {product.isBestSeller && (
                <span className="absolute top-4 left-4 bg-maroon-gradient text-cream text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-gold">
                  Best Seller
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {thumbnails.map((thumb, i) => (
                <button
                  key={`${thumb}-${i}`}
                  onClick={() => setActiveThumb(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors bg-gradient-to-br from-gold/5 to-maroon/5 ${activeThumb === i ? "border-gold" : "border-gold/15"
                    }`}
                >
                  {typeof thumb === "string" ? (
                    <img src={thumb} alt={`${product.name} view ${i + 1}`} className="h-full w-full object-cover" />
                  ) : (
                    <ProductArt type={category?.art ?? "leaf"} seed={thumb} className="w-full h-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gold-muted font-medium mb-2">
              {category?.name}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-ink mb-3">{product.name}</h1>
            <p className="text-ink/65 leading-relaxed mb-6">{product.description}</p>

            {/* Benefits */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-maroon font-semibold mb-3">Benefits</p>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((b) => (
                  <span
                    key={b}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gold/10 text-maroon border border-gold/30"
                  >
                    <Check size={12} className="text-gold-muted" /> {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-maroon font-semibold mb-3">Ingredients</p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span key={ing} className="text-xs px-3 py-1.5 rounded-full bg-ink/5 text-ink/70">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Pack sizes */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-maroon font-semibold mb-3">Available Pack Sizes</p>
              <div className="flex flex-wrap gap-2">
                {product.packSizes.map((pack, i) => (
                  <button
                    key={pack.label}
                    onClick={() => setSelectedPack(i)}
                    className={`text-sm px-4 py-2 rounded-full border-2 transition-colors ${selectedPack === i
                        ? "border-maroon bg-maroon text-cream"
                        : "border-maroon/20 text-maroon hover:border-maroon/50"
                      }`}
                  >
                    {pack.label}
                    {pack.price ? ` • ${pack.price}` : ""}
                  </button>
                ))}
              </div>
            </div>

            {/* Sticky-feeling inquiry card */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 shadow-luxury">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-gold" />
                <p className="font-display text-ink text-sm">
                  Selected: <span className="text-maroon">{product.packSizes[selectedPack].label}</span>
                  {product.packSizes[selectedPack].price ? <span className="ml-2 text-gold-muted">{product.packSizes[selectedPack].price}</span> : null}
                </p>
              </div>
              <a
                href={`https://wa.me/917023557846?text=${encodeURIComponent(
                  `Hi, I'm interested in ${product.name} (${product.packSizes[selectedPack].label})`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform w-full"
              >
                <MessageCircle size={17} /> Send Inquiry on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl text-ink mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Zoom lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-[70] bg-ink/90 flex items-center justify-center p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              className="w-full max-w-lg"
            >
              {product.image && typeof thumbnails[activeThumb] === "string" ? (
                <img src={thumbnails[activeThumb]} alt={product.imageAlt ?? product.name} className="h-full w-full rounded-[1.6rem] object-cover" />
              ) : (
                <ProductArt type={category?.art ?? "leaf"} seed={thumbnails[activeThumb] as number} className="w-full h-full" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}
