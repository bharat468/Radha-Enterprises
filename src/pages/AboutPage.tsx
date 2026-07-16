import { motion } from "framer-motion";
import { Target, Eye, Factory, Package, Truck, Award, MessageCircle } from "lucide-react";
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

      {/* Founders Section */}
      <section className="py-24 bg-cream text-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            
            {/* Founder 1 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side */}
              <div className="relative group">
                <div className="aspect-[4/5] overflow-hidden rounded-md relative mix-blend-multiply">
                  <img 
                    src="/src/assets/product-image/Founder.jpeg" 
                    alt="Hariom Pareek" 
                    className="w-full h-full object-cover transition-all duration-700" 
                    onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Hariom+Pareek&background=7A1F1F&color=FFFDF8&size=512'; }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-dark/95 to-transparent pt-32 pb-8 px-8">
                    <h3 className="text-2xl text-white font-medium mb-1">Hariom Pareek</h3>
                    <p className="text-gold-muted text-xs uppercase tracking-[0.2em]">Founder & Creative Director</p>
                  </div>
                </div>
              </div>
              
              {/* Text side */}
              <div className="flex flex-col">
                <p className="text-gold-muted text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-gold-muted/50"></span>
                  The Founder
                  <span className="w-8 h-px bg-maroon/30"></span>
                </p>
                <h2 className="font-display text-5xl sm:text-6xl text-maroon-dark mb-8">
                  Hariom <span className="italic text-gold font-light">Pareek</span>
                </h2>
                
                <div className="space-y-6 text-ink/80 text-sm leading-relaxed mb-10 max-w-lg">
                  <p>
                    Born with an innate passion for rich traditions and authentic flavours, Hariom Pareek founded Radha Enterprises with a singular vision — to bring the legacy of Rajasthan's finest mukhwas and digestives to discerning households across India.
                  </p>
                  <p>
                    With years of dedication to quality and a deep understanding of premium ingredients, Hariom ensures every product embodies the highest standards of taste, hygiene, and cultural heritage. Headquartered in Churu, Rajasthan, we blend the rich cultural heritage of Rajputana with modern standards.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-maroon/10 flex flex-wrap justify-between items-end gap-6 max-w-lg">
                  <div>
                    <h4 className="text-lg text-maroon-dark font-medium mb-1">Hariom Pareek</h4>
                    <p className="text-gold-muted text-xs uppercase tracking-widest">Founder, Radha Enterprises</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded border border-ink/15 flex items-center justify-center text-ink/70 hover:text-gold hover:border-gold transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded border border-ink/15 flex items-center justify-center text-ink/70 hover:text-gold hover:border-gold transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://wa.me/918160949160" target="_blank" rel="noreferrer" className="w-10 h-10 rounded border border-ink/15 flex items-center justify-center text-ink/70 hover:text-[#25D366] hover:border-[#25D366] transition-colors">
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side - order-first on mobile, order-last on desktop for alternating layout */}
              <div className="relative group lg:order-last">
                <div className="aspect-[4/5] overflow-hidden rounded-md relative mix-blend-multiply">
                  <img 
                    src="/src/assets/product-image/co-FOunder .jpeg" 
                    alt="Madhuwan Pareek" 
                    className="w-full h-full object-cover transition-all duration-700" 
                    onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Madhuwan+Pareek&background=7A1F1F&color=FFFDF8&size=512'; }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-dark/95 to-transparent pt-32 pb-8 px-8">
                    <h3 className="text-2xl text-white font-medium mb-1">Madhuwan Pareek</h3>
                    <p className="text-gold-muted text-xs uppercase tracking-[0.2em]">Co-Founder</p>
                  </div>
                </div>
              </div>
              
              {/* Text side */}
              <div className="flex flex-col">
                <p className="text-gold-muted text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-gold-muted/50"></span>
                  The Co-Founder
                  <span className="w-8 h-px bg-maroon/30"></span>
                </p>
                <h2 className="font-display text-5xl sm:text-6xl text-maroon-dark mb-8">
                  Madhuwan <span className="italic text-gold font-light">Pareek</span>
                </h2>
                
                <div className="space-y-6 text-ink/80 text-sm leading-relaxed mb-10 max-w-lg">
                  <p>
                    Committed to operational excellence and uncompromising quality, Madhuwan Pareek oversees the meticulous process of crafting our signature blends. From selecting raw ingredients to final packaging, his attention to detail ensures consistency in every batch.
                  </p>
                  <p>
                    Madhuwan brings modern processes to traditional recipes, scaling operations while maintaining the authentic homemade touch that defines the Radha Enterprises experience.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-maroon/10 flex flex-wrap justify-between items-end gap-6 max-w-lg">
                  <div>
                    <h4 className="text-lg text-maroon-dark font-medium mb-1">Madhuwan Pareek</h4>
                    <p className="text-gold-muted text-xs uppercase tracking-widest">Co-Founder, Radha Enterprises</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded border border-ink/15 flex items-center justify-center text-ink/70 hover:text-gold hover:border-gold transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded border border-ink/15 flex items-center justify-center text-ink/70 hover:text-gold hover:border-gold transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://wa.me/919606094081" target="_blank" rel="noreferrer" className="w-10 h-10 rounded border border-ink/15 flex items-center justify-center text-ink/70 hover:text-[#25D366] hover:border-[#25D366] transition-colors">
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
