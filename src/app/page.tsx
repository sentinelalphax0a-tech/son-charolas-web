import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "@/components/layout/HeroSection";
import FeaturedProductsSection from "@/components/menu/FeaturedProductsSection";
import PromoBanner from "@/components/promo/PromoBanner";
import SucursalesSection from "@/components/sucursales/SucursalesSection";
import ReviewsSection from "@/components/landing/ReviewsSection";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedProductsSection />
        <PromoBanner />
        <SucursalesSection />
        <ReviewsSection />
      </main>
      <SiteFooter />
    </>
  );
}
