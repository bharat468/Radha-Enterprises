import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { categories } from "../../data/categories";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream/80 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-maroon/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gold/20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 rounded-full bg-maroon-gradient flex items-center justify-center text-gold font-display text-lg">
                R
              </span>
              <span className="font-display text-xl text-cream">
                Radha <span className="text-gold-muted">Enterprises</span>
              </span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-sm">
              Premium mukhwas, paan, supari, candies and digestive products — crafted with family recipes and premium packaging for gifting and everyday indulgence.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-gold-muted mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">All Products</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold-muted mb-4 text-sm tracking-wider uppercase">Categories</h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link to={`/products/category/${c.slug}`} className="hover:text-gold transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold-muted mb-4 text-sm tracking-wider uppercase">Stay Connected</h4>
            <ul className="space-y-3 text-sm mb-5">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                Phogan, Sardarsahar, Churu, Rajasthan - 331402
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <span>Madhuwan Pareek: +91 9606094081</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <span>Hariom Pareek: +91 8160949160</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <span>sales@radhaenterprises.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} Radha Enterprises. All rights reserved.</p>
          <p>Crafted with tradition, served with pride.</p>
        </div>
      </div>
    </footer>
  );
}
