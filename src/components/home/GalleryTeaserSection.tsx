import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import ProductArt from "../common/ProductArt";

const galleryItems = [
  { type: "leaf" as const, seed: 31, span: "row-span-2", label: "Hand-rolled Paan" },
  { type: "seed" as const, seed: 32, span: "", label: "Roasted Saunf" },
  { type: "mix" as const, seed: 33, span: "", label: "Digestive Mix" },
  { type: "candy" as const, seed: 34, span: "row-span-2", label: "Gold Foil Candies" },
  { type: "berry" as const, seed: 35, span: "", label: "Sun-dried Amla" },
  { type: "nut" as const, seed: 36, span: "", label: "Sliced Supari" },
];

export default function GalleryTeaserSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Behind the Counter"
            title="A Glimpse Into Our"
            highlight="Craft"
            align="left"
            description="From the roasting floor to the festival hamper — a peek at how every pouch comes together."
          />
          <Link
            to="/gallery"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-maroon hover:gap-2 transition-all shrink-0"
          >
            View Full Gallery <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 auto-rows-[140px] sm:auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-maroon/5 to-gold/10 border border-gold/20 ${item.span}`}
            >
              <motion.div
                className="w-full h-full flex items-center justify-center p-6"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                <ProductArt type={item.type} seed={item.seed} className="w-full h-full" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-cream text-sm font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/gallery" className="inline-flex items-center gap-1 text-sm font-medium text-maroon">
            View Full Gallery <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
