import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ClientShowcase from '@/components/sections/ClientShowcase';
import CategoryGrid from '@/components/sections/CategoryGrid';
import RecommendedInfluencers from '@/components/sections/RecommendedInfluencers';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0a2e]">
      <Header />
      
      <main>
        <HeroSection />
        <ClientShowcase />
        <CategoryGrid />
        <RecommendedInfluencers />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  );
}
