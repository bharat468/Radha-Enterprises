import Hero from "../components/home/Hero";
import CategoriesSection from "../components/home/CategoriesSection";
import BestSellersSection from "../components/home/BestSellersSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import OurJourneySection from "../components/home/OurJourneySection";
import GalleryTeaserSection from "../components/home/GalleryTeaserSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FaqSection from "../components/home/FaqSection";
import ContactCtaSection from "../components/home/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <BestSellersSection />
      <WhyChooseUsSection />
      <OurJourneySection />
      <GalleryTeaserSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
