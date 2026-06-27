import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const faqs = [
  {
    q: "Do you offer bulk or wholesale orders?",
    a: "Yes, we supply bulk quantities to distributors, mithai shops, and retail chains across India. Reach out via WhatsApp or our contact form for wholesale pricing.",
  },
  {
    q: "What is the shelf life of your products?",
    a: "Most mukhwas, churan, and candy products have a shelf life of 6–9 months when stored in a cool, dry place. Exact dates are printed on every pack.",
  },
  {
    q: "Are your products suitable for gifting?",
    a: "Absolutely — our premium hampers and gold-foil gift tins are designed specifically for festivals, weddings, and corporate gifting.",
  },
  {
    q: "Do you ship pan-India?",
    a: "Yes, we work with distributors and logistics partners to ship across India. For large orders, delivery timelines are confirmed at the time of inquiry.",
  },
  {
    q: "Can I request a custom flavour or pack size?",
    a: "For wholesale and corporate clients, we do take custom flavour and packaging requests. Contact our team to discuss feasibility and minimum order quantities.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gold/5 to-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Got Questions"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you might want to know before placing an order or inquiry."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-white rounded-2xl border border-gold/20 overflow-hidden shadow-luxury"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
              >
                <span className="flex items-center gap-3 font-display text-ink text-sm sm:text-base">
                  <HelpCircle size={18} className="text-gold-muted shrink-0" />
                  {faq.q}
                </span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}>
                  <Plus size={18} className="text-maroon shrink-0" />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="px-5 sm:px-6 pb-5 text-sm text-ink/60 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
