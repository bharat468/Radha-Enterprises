import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { getCategory } from "../data/categories";
import { getProductsByCategory } from "../data/products";
import ProductCard from "../components/product/ProductCard";
import QuickViewModal from "../components/product/QuickViewModal";
import ProductArt from "../components/common/ProductArt";
import type { Product } from "../data/types";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategory(slug ?? "");
  const [quickView, setQuickView] = useState<Product | null>(null);

  if (!category) return <Navigate to="/products" replace />;

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* Banner */}
      <section className="relative pt-32 pb-20 bg-maroon-gradient overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 w-72 h-72 opacity-15"
        >
          <ProductArt type={category.art} seed={99} className="w-full h-full" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-cream/60 text-xs mb-4">
            <Link to="/products" className="hover:text-gold">Products</Link>
            <ChevronRight size={12} />
            <span className="text-gold-pale">{category.name}</span>
          </div>
          <h1 className="font-display text-cream text-4xl sm:text-5xl mb-3">{category.name}</h1>
          <p className="text-gold-pale font-display text-lg mb-3 italic">{category.tagline}</p>
          <p className="text-cream/70 text-sm sm:text-base max-w-xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
        <p className="text-sm text-ink/50 mb-5">{categoryProducts.length} products in this category</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickView} />
          ))}
        </div>
      </div>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}
