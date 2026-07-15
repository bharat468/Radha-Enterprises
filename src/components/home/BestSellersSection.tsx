import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { getBestSellers } from "../../data/products";
import SectionHeading from "../common/SectionHeading";
import ProductCard from "../product/ProductCard";
import QuickViewModal from "../product/QuickViewModal";
import type { Product } from "../../data/types";

export default function BestSellersSection() {
  const bestSellers = getBestSellers();
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-cream to-gold/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Customer Favourites"
            title="Our Best"
            highlight="Sellers"
            align="left"
            description="The pouches and tins that leave our factory floor the fastest — tried, loved, and reordered."
          />
          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-maroon hover:gap-2 transition-all shrink-0"
          >
            View All Products <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickView} />
          ))}
        </div>
      </div>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
}
