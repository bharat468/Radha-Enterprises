import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";

const milestones = [
  { year: "1999", title: "A Small Beginning", text: "Started as a single roasting unit in Bikaner, serving local mithai shops." },
  { year: "2006", title: "First Branded Pouch", text: "Launched our first packaged mukhwas line under the Radha Enterprises name." },
  { year: "2013", title: "Expanded Manufacturing", text: "Moved into a dedicated facility, adding churan, candies, and supari lines." },
  { year: "2019", title: "Pan-India Reach", text: "Crossed 500 retail partners across Rajasthan, Gujarat, and Delhi NCR." },
  { year: "2024", title: "Premium Gifting Line", text: "Introduced festive hampers and gold-foil packaging for the gifting season." },
];

export default function OurJourneySection() {
  return (
    <section className="relative py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="A Journey Built On"
          highlight="Family Recipes"
          description="From one roasting drum to a name shelves across the country recognise."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold to-gold/10 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className={`relative flex sm:items-center gap-5 sm:gap-0 ${
                  i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 top-1 w-3 h-3 rounded-full bg-gold border-2 border-cream shadow-gold -translate-x-1/2 z-10" />
                <div
                  className={`ml-12 sm:ml-0 sm:w-[44%] ${
                    i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                  }`}
                >
                  <span className="inline-block font-display text-gold-muted text-xl mb-1">{m.year}</span>
                  <h3 className="font-display text-ink text-lg mb-1">{m.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
