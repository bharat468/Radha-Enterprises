import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import SectionHeading from "../common/SectionHeading";
import ProductArt from "../common/ProductArt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CategoriesSection() {
  return (
    <section className="relative pt-20 pb-8 sm:pt-28 sm:pb-12 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Range"
          title="Ten Categories,"
          highlight="One Tradition"
          description="From the after-dinner mukhwas bowl to the festival gifting hamper — explore every category we craft."
        />
      </div>

      <div className="mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          speed={800}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 16, centeredSlides: true },
            640: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
            1024: { slidesPerView: 5, spaceBetween: 24, centeredSlides: false },
          }}
          className="!pb-16"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={cat.slug}>
              <Link
                to={`/products/category/${cat.slug}`}
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-maroon-dark to-maroon shadow-luxury hover:shadow-luxury-lg transition-shadow duration-500"
              >
                <div className="absolute inset-0 bg-noise opacity-20 z-10" />
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <ProductArt type={cat.art} seed={i + 1} className="w-2/3 h-2/3 opacity-90" />
                    </div>
                  )}
                </motion.div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent z-10" />
                
                {/* Elegant info box without glass panel block */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-display text-cream text-base sm:text-lg leading-tight group-hover:text-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-cream/60 text-xs sm:text-sm mt-0.5 line-clamp-1">
                    {cat.tagline}
                  </p>
                </div>

                {/* Subtle arrow indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold/90 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #7A1F1F !important;
          opacity: 0.25;
        }
        .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
