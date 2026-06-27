import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import ProductArt from "../components/common/ProductArt";

type GalleryFilter = "all" | "factory" | "products" | "packaging" | "ingredients" | "wholesale";

const galleryItems: { type: "leaf" | "seed" | "drop" | "spiral" | "grain" | "berry" | "candy" | "nut" | "mix" | "roast"; seed: number; label: string; filter: GalleryFilter; tall?: boolean }[] = [
  { type: "leaf", seed: 101, label: "Hand-Rolled Paan Station", filter: "factory", tall: true },
  { type: "seed", seed: 102, label: "Roasted Saunf Batch", filter: "products" },
  { type: "mix", seed: 103, label: "Digestive Mix Blending", filter: "ingredients" },
  { type: "candy", seed: 104, label: "Gold Foil Candy Wrapping", filter: "packaging", tall: true },
  { type: "berry", seed: 105, label: "Sun-Dried Amla Sorting", filter: "ingredients" },
  { type: "nut", seed: 106, label: "Supari Slicing Floor", filter: "factory" },
  { type: "spiral", seed: 107, label: "Churan Grinding Unit", filter: "factory" },
  { type: "drop", seed: 108, label: "Mukhwas Shot Sachets", filter: "products", tall: true },
  { type: "roast", seed: 109, label: "Roasted Seed Mix Trays", filter: "products" },
  { type: "grain", seed: 110, label: "Bulk Pallet — Wholesale", filter: "wholesale" },
  { type: "leaf", seed: 111, label: "Festive Hamper Packing", filter: "packaging" },
  { type: "nut", seed: 112, label: "Wholesale Crates Loading", filter: "wholesale", tall: true },
];

const filters: { key: GalleryFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "factory", label: "Factory" },
  { key: "products", label: "Products" },
  { key: "packaging", label: "Packaging" },
  { key: "ingredients", label: "Ingredients" },
  { key: "wholesale", label: "Wholesale" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryItems.filter((g) => activeFilter === "all" || g.filter === activeFilter);

  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const showPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <div className="bg-cream min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Behind the Scenes"
          title="Our"
          highlight="Gallery"
          description="Factory floors, packaging lines, ingredients, and wholesale operations — a window into how every product is made."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f.key
                  ? "bg-maroon text-cream shadow-gold"
                  : "bg-white text-ink/60 border border-gold/20 hover:border-gold/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[160px] sm:auto-rows-[200px]">
          {filtered.map((item, i) => (
            <motion.button
              key={`${item.label}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => setLightboxIndex(i)}
              className={`group relative rounded-2xl overflow-hidden border border-gold/20 bg-gradient-to-br from-gold/5 to-maroon/5 text-left ${
                item.tall ? "row-span-2" : ""
              }`}
            >
              <motion.div
                className="absolute inset-0 p-6"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.5 }}
              >
                <ProductArt type={item.type} seed={item.seed} className="w-full h-full" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-cream text-xs sm:text-sm font-medium">{item.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/90 flex items-center justify-center p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream hover:bg-white/20"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-cream hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-cream hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRightIcon size={22} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="text-center"
            >
              <div className="w-72 sm:w-96 h-72 sm:h-96 mx-auto">
                <ProductArt
                  type={filtered[lightboxIndex].type}
                  seed={filtered[lightboxIndex].seed}
                  className="w-full h-full"
                />
              </div>
              <p className="text-cream font-display text-lg mt-4">{filtered[lightboxIndex].label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
