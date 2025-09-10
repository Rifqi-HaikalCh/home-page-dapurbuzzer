import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ClientShowcase from '@/components/sections/ClientShowcase';
import CategoryGrid from '@/components/sections/CategoryGrid';
import RecommendedInfluencers from '@/components/sections/RecommendedInfluencers';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0618] w-full">
      <Header />
      
      <main className="w-full pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <ClientShowcase />
          <CategoryGrid />
          <RecommendedInfluencers />
          <Testimonials />
          <CTASection />
        </div>
      </main>
    </div>
  );
}
