import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, MessageCircle, Download, ChevronDown } from "lucide-react";
import { categories } from "../../data/categories";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`glass-panel rounded-2xl flex items-center justify-between px-4 sm:px-6 transition-all duration-500 ${
            scrolled ? "py-2 shadow-luxury" : "py-3"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-full bg-maroon-gradient flex items-center justify-center text-gold font-display text-lg shadow-gold">
              R
            </span>
            <span className="font-display text-lg sm:text-xl text-maroon tracking-wide">
              Radha <span className="text-gold-muted">Enterprises</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 font-body text-sm">
            {navLinks.map((link) =>
              link.label === "Products" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 transition-colors hover:text-maroon ${
                        isActive ? "text-maroon font-semibold" : "text-ink/80"
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                  </NavLink>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] glass-panel rounded-2xl p-5 shadow-luxury-lg grid grid-cols-2 gap-2"
                      >
                        {categories.map((c) => (
                          <Link
                            key={c.slug}
                            to={`/products/category/${c.slug}`}
                            className="rounded-xl px-3 py-2 hover:bg-gold/15 transition-colors"
                          >
                            <p className="font-display text-maroon text-sm">{c.name}</p>
                            <p className="text-ink/60 text-xs">{c.tagline}</p>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-maroon ${
                      isActive ? "text-maroon font-semibold" : "text-ink/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gold/15 transition-colors text-ink/70">
              <Search size={18} />
            </button>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gold/15 transition-colors text-ink/70"
              aria-label="Download catalogue"
              title="Download Catalogue"
            >
              <Download size={18} />
            </a>
            <a
              href="https://wa.me/917023557846"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-maroon-gradient text-cream px-4 py-2 rounded-full text-sm font-medium shadow-gold hover:scale-105 transition-transform"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-maroon"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-4 mt-2 glass-panel rounded-2xl overflow-hidden shadow-luxury"
          >
            <div className="p-5 flex flex-col gap-4 font-body">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-base ${isActive ? "text-maroon font-semibold" : "text-ink/80"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://wa.me/917023557846"
                className="flex items-center justify-center gap-2 bg-maroon-gradient text-cream px-4 py-3 rounded-full text-sm font-medium mt-2"
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
