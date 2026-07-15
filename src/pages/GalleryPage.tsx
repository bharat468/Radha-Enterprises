import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

type GalleryFilter = "all" | "mukhwas" | "paan" | "churan" | "candies" | "mixes";

const galleryItems: { img: string; label: string; filter: GalleryFilter; tall?: boolean }[] = [
  { img: new URL("../assets/product-image/40.jpeg", import.meta.url).href, label: "Premium Gulab Mukhwas", filter: "mukhwas", tall: true },
  { img: new URL("../assets/product-image/24.jpeg", import.meta.url).href, label: "Gulkand Paan", filter: "paan" },
  { img: new URL("../assets/product-image/55.jpeg", import.meta.url).href, label: "Gujrati Digestive Mix", filter: "mixes" },
  { img: new URL("../assets/product-image/50.jpeg", import.meta.url).href, label: "Paan Digestive Candy", filter: "candies", tall: true },
  { img: new URL("../assets/product-image/35.jpeg", import.meta.url).href, label: "Sweet Amla Candy", filter: "candies" },
  { img: new URL("../assets/product-image/13.jpeg", import.meta.url).href, label: "Anardana Goli", filter: "churan" },
  { img: new URL("../assets/product-image/75.jpeg", import.meta.url).href, label: "Jeera Goli", filter: "churan" },
  { img: new URL("../assets/product-image/16.jpeg", import.meta.url).href, label: "Mukhwas Shots", filter: "mukhwas", tall: true },
  { img: new URL("../assets/product-image/6.jpeg", import.meta.url).href, label: "Shahi Rajasthani Mukhwas", filter: "mukhwas" },
  { img: new URL("../assets/product-image/14.jpeg", import.meta.url).href, label: "Sugar Coated Saunf", filter: "mukhwas" },
  { img: new URL("../assets/product-image/27.jpeg", import.meta.url).href, label: "Imli Candy", filter: "candies" },
  { img: new URL("../assets/product-image/26.jpeg", import.meta.url).href, label: "Raseeli Supari", filter: "paan", tall: true },
];

const filters: { key: GalleryFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mukhwas", label: "Mukhwas" },
  { key: "paan", label: "Paan & Supari" },
  { key: "candies", label: "Candies" },
  { key: "churan", label: "Churan" },
  { key: "mixes", label: "Digestive Mixes" },
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
              <div className="absolute inset-0 p-0 overflow-hidden">
                <motion.div className="w-full h-full" whileHover={{ scale: 1.08 }} transition={{ duration: 0.7 }}>
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
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
              <div className="w-[85vw] max-w-xl aspect-square sm:w-96 sm:h-96 mx-auto rounded-xl overflow-hidden bg-white">
                <img
                  src={filtered[lightboxIndex].img}
                  alt={filtered[lightboxIndex].label}
                  className="w-full h-full object-contain"
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
