import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import SectionHeading from "../components/common/SectionHeading";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-cream min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We'd Love To"
          highlight="Hear From You"
          description="Wholesale inquiries, gifting orders, or a simple question about our products — reach out anytime."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Address", text: "Phogan, Sardarsahar, Churu, Rajasthan - 331402" },
              { icon: Phone, title: "Sales & Inquiry", text: "+91 7023557846" },
              { icon: Mail, title: "Email", text: "radha.enterprises@gmail.com" },
              { icon: Clock, title: "Business Hours", text: "Mon – Sat, 9:00 AM – 7:00 PM IST" },
            ].map((info) => (
              <div key={info.title} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gold/20 shadow-luxury">
                <div className="w-11 h-11 rounded-xl bg-maroon/10 flex items-center justify-center shrink-0">
                  <info.icon size={19} className="text-maroon" />
                </div>
                <div>
                  <p className="font-display text-ink text-sm mb-0.5">{info.title}</p>
                  <p className="text-ink/60 text-sm">{info.text}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/917023557846"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-maroon hover:bg-gold/10 transition-colors shrink-0"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold/20 h-48 bg-gradient-to-br from-maroon/10 to-gold/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-noise opacity-30" />
              <div className="text-center relative">
                <MapPin size={28} className="text-maroon mx-auto mb-2" />
                <p className="text-ink/50 text-sm">Serving Rajasthan with premium mouth fresheners and gifts</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-gold/20 shadow-luxury"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 size={48} className="text-gold mb-4" />
                <h3 className="font-display text-xl text-ink mb-2">Message Sent</h3>
                <p className="text-ink/60 text-sm max-w-xs">
                  Thank you for reaching out. Our team will get back to you within the day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-maroon font-semibold mb-2 block">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-cream border border-gold/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-maroon font-semibold mb-2 block">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91"
                      className="w-full bg-cream border border-gold/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-maroon font-semibold mb-2 block">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-cream border border-gold/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-maroon font-semibold mb-2 block">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-cream border border-gold/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold">
                    <option>General Inquiry</option>
                    <option>Wholesale / Distribution</option>
                    <option>Gifting / Bulk Order</option>
                    <option>Product Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-maroon font-semibold mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us a little about what you need..."
                    className="w-full bg-cream border border-gold/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-maroon-gradient text-cream px-5 py-3.5 rounded-full text-sm font-medium shadow-gold hover:shadow-luxury-lg hover:scale-[1.01] transition-all"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
