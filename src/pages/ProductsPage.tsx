import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/product/ProductCard";
import QuickViewModal from "../components/product/QuickViewModal";
import SectionHeading from "../components/common/SectionHeading";
import type { Product } from "../data/types";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";
  const [query, setQuery] = useState("");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const setCategory = (slug: string) => {
    if (slug === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Full Catalogue"
          title="Explore Our"
          highlight="Products"
          description="Browse our complete range of premium mukhwas, paan, supari, candies and digestive products — filter by category or search by name."
        />

        {/* Search + filter toggle (mobile) */}
        <div className="mt-10 flex items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white border border-gold/25 rounded-full pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold shadow-sm"
            />
          </div>
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="lg:hidden flex items-center gap-2 bg-white border border-gold/25 rounded-full px-4 py-3 text-sm text-maroon shrink-0"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          {/* Filters sidebar */}
          <aside className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
            <div className="bg-white rounded-2xl border border-gold/20 p-5 shadow-luxury sticky top-28">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <p className="font-display text-ink">Categories</p>
                <button onClick={() => setFiltersOpen(false)}>
                  <X size={18} className="text-ink/50" />
                </button>
              </div>
              <p className="hidden lg:block font-display text-ink mb-4">Categories</p>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setCategory("all")}
                  className={`text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                    activeCategory === "all" ? "bg-maroon text-cream" : "text-ink/70 hover:bg-gold/10"
                  }`}
                >
                  All Products
                  <span className="float-right text-xs opacity-60">{products.length}</span>
                </button>
                {categories.map((c) => {
                  const count = products.filter((p) => p.category === c.slug).length;
                  return (
                    <button
                      key={c.slug}
                      onClick={() => setCategory(c.slug)}
                      className={`text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                        activeCategory === c.slug ? "bg-maroon text-cream" : "text-ink/70 hover:bg-gold/10"
                      }`}
                    >
                      {c.name}
                      <span className="float-right text-xs opacity-60">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            <p className="text-sm text-ink/50 mb-5">{filtered.length} products found</p>
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-ink/50">
                No products match your search. Try a different keyword or category.
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
              >
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} onQuickView={setQuickView} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}
