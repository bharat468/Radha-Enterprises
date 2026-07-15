import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Leaf, ShieldCheck, Factory, Truck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    icon: Leaf,
    title: "Fresh, Traditional Ingredients",
    description: "Every batch starts with hand-sorted seeds, fruit, and spice sourced from trusted regional growers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description: "FSSAI-certified processes and strict quality checks at every stage, from roasting to packing.",
  },
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description: "Our own facility in Bikaner controls every step — no outsourcing, no compromise on recipe.",
  },
  {
    icon: Truck,
    title: "Freshly Delivered",
    description: "Every product is packed fresh and delivered carefully to ensure the best taste and aroma reaches your home.",
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Radha Enterprises"
          title="Crafted With Care,"
          highlight="Uncompromising Quality"
          light
          description="What separates a tin of mukhwas you keep on the table from one you forget — it's in the detail."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel-dark rounded-2xl p-6 hover:bg-gold/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
                <f.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-cream text-lg mb-2">{f.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Counters strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-t border-gold/15 pt-10">
          {[
            { value: 100, suffix: "%", label: "Authentic Ingredients" },
            { value: 65, suffix: "+", label: "Premium Products" },
            { value: 100, suffix: "%", label: "Quality Assurance" },
            { value: 0, suffix: "", label: "Compromise" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-gradient-gold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-cream/55 text-xs mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
