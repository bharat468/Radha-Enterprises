import { motion } from "framer-motion";
import { Target, Eye, Factory, Package, Truck, Award } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import ProductArt from "../components/common/ProductArt";

const pillars = [
  { icon: Target, title: "Our Mission", text: "To bring the richness of Rajasthan’s traditional mouth fresheners and digestive delights to modern homes, festive gifting, and retail shelves with uncompromising quality." },
  { icon: Eye, title: "Our Vision", text: "To become a preferred name in premium mukhwas, paan, supari, candies and digestive products — trusted for flavour, finish, and family values." },
];

const operations = [
  { icon: Factory, title: "Manufacturing", text: "Our operations in Churu district blend traditional roasting, mixing and finishing methods with strict batch quality checks from start to finish." },
  { icon: Package, title: "Packaging", text: "From daily-use pouches to premium festive boxes, every pack is designed to preserve freshness while elevating the gifting experience." },
  { icon: Truck, title: "Distribution", text: "We serve retail stores, wholesalers and distributors across Rajasthan and beyond, delivering consistent quality at scale." },
  { icon: Award, title: "Quality Standards", text: "Our processes are built around ingredient care, hygiene, freshness and trust — the same standards that shaped our family recipes." },
];

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-28 pb-24">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-gold/10" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-gold-muted mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-6"
          >
            A Family Recipe, <span className="text-gradient-gold">Reimagined for Today</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ink/65 leading-relaxed max-w-2xl mx-auto"
          >
            Starting this month, Radha Enterprises brings the authentic flavours of Rajasthan directly to your homes. What began as cherished family recipes—hand-finished flavours and a deep respect for the rituals of hospitality—is now a premium brand. We are excited to craft mukhwas, paan, supari, candies, and digestive products with the same warmth and care that made them special in the first place.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gold/20 shadow-luxury"
            >
              <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center mb-4">
                <p.icon size={22} className="text-maroon" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{p.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-maroon-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-[200px_1fr] gap-10 items-center">
          <div className="w-44 h-44 rounded-full bg-gold/15 border-2 border-gold/40 mx-auto flex items-center justify-center p-8">
            <ProductArt type="leaf" seed={50} className="w-full h-full" />
          </div>
          <div>
            <p className="text-gold-pale text-xs uppercase tracking-wider mb-2">Founder's Note</p>
            <h3 className="font-display text-cream text-2xl mb-3">Built on a Mother's Recipe</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              "Every product on our shelf starts with a family recipe and a promise of care. We are beginning this journey to bring our household traditions into your homes, ensuring that every pouch, tin, and festive box carries our signature warmth, freshness, and attention to detail."
            </p>
            <p className="font-display text-gold-muted mt-4">— Founder, Radha Enterprises</p>
          </div>
        </div>
      </section>

      {/* Operations grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="From Raw Ingredient"
            highlight="to Retail Shelf"
            description="Every stage of our process is designed to protect freshness, flavour, and consistency."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {operations.map((op, i) => (
              <motion.div
                key={op.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gold/20 shadow-luxury text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <op.icon size={22} className="text-gold-muted" />
                </div>
                <h3 className="font-display text-ink text-base mb-2">{op.title}</h3>
                <p className="text-ink/55 text-xs leading-relaxed">{op.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
