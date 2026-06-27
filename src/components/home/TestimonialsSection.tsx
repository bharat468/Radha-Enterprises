import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anjali Mehta",
    role: "Mithai Shop Owner, Jaipur",
    text: "The sweet mukhwas sells out before anything else on my counter. Customers ask for it by the Radha Enterprises name now, not just 'mukhwas'.",
    initials: "AM",
  },
  {
    name: "Suresh Patel",
    role: "Wholesale Distributor, Ahmedabad",
    text: "Consistent quality batch after batch. The packaging holds up well in transit and the gold foil tins move fast during festival season.",
    initials: "SP",
  },
  {
    name: "Rina Kapoor",
    role: "Home Chef & Food Blogger",
    text: "I order the digestive mix every month for dinner parties. The blend of dry fruit and seeds feels genuinely premium, not just sweetened filler.",
    initials: "RK",
  },
  {
    name: "Vikram Joshi",
    role: "Retail Chain Buyer, Delhi",
    text: "Their churan range has the best repeat-purchase rate on our digestive shelf. Tight quality control, and they never miss a delivery window.",
    initials: "VJ",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted by Many"
          title="What Our"
          highlight="Customers Say"
          description="From mithai shop counters to home dinner tables — words from the people who keep coming back."
        />
      </div>

      <div className="mt-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="glass-panel rounded-3xl p-7 h-full shadow-luxury flex flex-col">
                <Quote className="text-gold/40 mb-3" size={28} />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-ink/70 leading-relaxed mb-6 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-maroon-gradient flex items-center justify-center text-cream text-xs font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display text-sm text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </div>
              </div>
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
