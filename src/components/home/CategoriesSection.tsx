import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import SectionHeading from "../common/SectionHeading";
import ProductArt from "../common/ProductArt";

export default function CategoriesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Range"
          title="Ten Categories,"
          highlight="One Tradition"
          description="From the after-dinner mukhwas bowl to the festival gifting hamper — explore every category we craft."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
            >
              <Link
                to={`/products/category/${cat.slug}`}
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-maroon-dark to-maroon shadow-luxury hover:shadow-luxury-lg transition-shadow duration-500"
              >
                <div className="absolute inset-0 bg-noise opacity-20" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <ProductArt type={cat.art} seed={i + 1} className="w-2/3 h-2/3 opacity-90" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-cream text-base sm:text-lg leading-tight">{cat.name}</h3>
                  <p className="text-cream/60 text-[11px] mt-0.5 line-clamp-1">{cat.tagline}</p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gold/90 flex items-center justify-center text-ink text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
