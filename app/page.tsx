import BannerSection from "@/components/sections/bannerSection";
import BlogSection from "@/components/sections/blogSection";
import BrandBanner from "@/components/sections/brandBanner";
import ContactSection from "@/components/sections/contactSection";
import HeroSection from "@/components/sections/heroSection";
import PerformanceSection from "@/components/sections/performanceSection";
import PricingSection from "@/components/sections/pricingSection";
import ServiceSection from "@/components/sections/serviceSection";
import StakeholderSection from "@/components/sections/stakeholderSection";
import StatsSection from "@/components/sections/starSection";
import TestimonialSection from "@/components/sections/testimonialSection";
 

export default function Home() {
  return (
    <>
       <HeroSection />
      <BrandBanner />
      <StakeholderSection />
      <ServiceSection/>
      <PerformanceSection/>
      <BannerSection/>
      <TestimonialSection/>
      <PricingSection/>
      <BlogSection/>
      <ContactSection/>
      <StatsSection/>
    </>
  );
}
