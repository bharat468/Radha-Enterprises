import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCtaSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] bg-maroon-gradient p-10 sm:p-14 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/15 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-cream text-3xl sm:text-4xl mb-3">
              Ready to Stock the <span className="text-gradient-gold">Radha Enterprises</span> Range?
            </h2>
            <p className="text-cream/70 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Whether you're a retailer, distributor, or planning a festive gift order — our team
              responds within the day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href="tel:+910000000000"
                className="inline-flex items-center gap-2 glass-panel text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-cream/10 transition-colors"
              >
                <Phone size={16} /> Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-gold/50 text-cream px-6 py-3.5 rounded-full text-sm font-medium hover:bg-gold/10 transition-colors"
              >
                Contact Form <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
