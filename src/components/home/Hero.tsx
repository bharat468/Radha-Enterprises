import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download, MessageCircle, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ProductArt from "../common/ProductArt";

// Abstract art for floating background elements looks much cleaner than square photos
const floatingSeeds = [
  { type: "seed" as const, top: "12%", left: "8%", size: 70, seed: 3, delay: 0 },
  { type: "leaf" as const, top: "20%", left: "87%", size: 92, seed: 7, delay: 0.6 },
  { type: "berry" as const, top: "68%", left: "6%", size: 60, seed: 12, delay: 1.1 },
  { type: "drop" as const, top: "78%", left: "90%", size: 66, seed: 5, delay: 0.4 },
  { type: "candy" as const, top: "44%", left: "90%", size: 56, seed: 9, delay: 0.9 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.15),_transparent_38%),linear-gradient(120deg,_#fffdf8_0%,_#fff8e7_45%,_#f7ebc9_100%)]" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-maroon/10 blur-3xl" />

      <motion.div
        style={{ y: y2 }}
        className="absolute -right-1/4 top-0 w-[70%] h-full bg-maroon-gradient"
        initial={{ clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 100% 0)" }}
        animate={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 58% 100%)" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gold/70 blur-[1px]" />
      </motion.div>

      {floatingSeeds.map((s, i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:block pointer-events-none opacity-80"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, y: i % 2 === 0 ? y1 : y2 }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: s.delay, duration: 1 }}
        >
          <motion.div animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }} transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}>
            <ProductArt type={s.type} seed={s.seed} className="w-full h-full drop-shadow-xl" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-medium text-maroon tracking-wide">
                Family heritage &middot; Phogan, Sardarsahar, Churu
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-ink mb-5"
            >
              Premium Mukhwas, Paan <br />
              <span className="text-gradient-gold">&amp; Digestive Delights</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-base sm:text-lg text-ink/65 leading-relaxed mb-9 max-w-xl"
            >
              Crafted with traditional recipes, fresh ingredients and premium packaging for homes, gift hampers, and retail shelves across Rajasthan and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 bg-maroon-gradient text-cream px-6 py-3.5 rounded-full text-sm font-medium shadow-gold hover:shadow-luxury-lg hover:scale-[1.03] transition-all"
              >
                Explore Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-maroon/70 text-maroon px-6 py-3.5 rounded-full text-sm font-medium hover:bg-maroon/5 transition-colors"
              >
                <Download size={16} /> Request Catalogue
              </a>
              <a
                href="https://wa.me/917023557846"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-maroon px-3 py-3.5 text-sm font-medium hover:text-maroon-light transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { value: "100%", label: "Authentic Flavours" },
                { value: "65+", label: "Premium Products" },
                { value: "Fresh", label: "Crafted with Care" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl text-maroon">{stat.value}</p>
                  <p className="text-xs text-ink/55 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2.2rem] bg-gold/20 blur-3xl" />
            <div className="relative rounded-[2.2rem] border border-gold/25 bg-white/70 p-4 shadow-luxury backdrop-blur-xl">
              <div className="rounded-[1.75rem] border border-gold/20 bg-gradient-to-br from-cream via-white to-gold/10 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-maroon/70">Signature Range</p>
                    <p className="font-display text-xl text-ink">Crafted in Rajasthan</p>
                  </div>
                  <div className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-maroon">
                    Premium
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-maroon to-maroon-dark p-3 text-cream shadow-luxury flex flex-col group overflow-hidden">
                    <div className="h-40 sm:h-44 w-full rounded-[14px] overflow-hidden mb-4 relative shadow-inner">
                      <img src={new URL("../../assets/product-image/40.jpeg", import.meta.url).href} alt="Royal Rose Mukhwas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 border border-black/10 rounded-[14px]" />
                    </div>
                    <div className="px-1">
                      <p className="text-sm font-semibold tracking-wide">Royal Rose Mukhwas</p>
                      <p className="text-xs text-cream/70 mt-1 line-clamp-2 leading-relaxed">Sugar-crystal fennel with rose petals</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-gold/30 bg-[#fdfbf7] p-3 shadow-luxury flex flex-col group overflow-hidden">
                    <div className="h-40 sm:h-44 w-full rounded-[14px] overflow-hidden mb-4 relative shadow-sm">
                      <img src={new URL("../../assets/product-image/50.jpeg", import.meta.url).href} alt="Paan Digestive Candy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 border border-black/5 rounded-[14px]" />
                    </div>
                    <div className="px-1">
                      <p className="text-sm font-semibold text-ink tracking-wide">Paan Digestive Candy</p>
                      <p className="text-xs text-ink/60 mt-1 line-clamp-2 leading-relaxed">Foil-wrapped, festive finish, full flavour</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-gold/20 bg-ink/95 p-4 text-cream">
                  <div className="flex items-center gap-2">
                    <Sparkles size={15} className="text-gold" />
                    <p className="text-sm font-medium">Traditional recipes with a luxury finish.</p>
                  </div>
                  <p className="mt-2 text-xs text-cream/65">Every pouch, tin, and gift box is designed to feel indulgent from the first glance.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-maroon/60 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
