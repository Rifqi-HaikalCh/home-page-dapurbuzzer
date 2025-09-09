'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import InfluencerCard from '@/components/composites/InfluencerCard';

const RecommendedInfluencers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Data influencer dengan foto asli
  const influencers = [
    {
      id: 1,
      name: 'Sarah Gaming',
      image: '/influencer.jpg',
      followers: '1.2M',
      rating: 4.9,
      category: 'Gaming',
      price: 'Rp 2.5M'
    },
    {
      id: 2,
      name: 'Beauty Bella',
      image: '/influencer.jpg',
      followers: '850K',
      rating: 4.8,
      category: 'Beauty',
      price: 'Rp 1.8M'
    },
    {
      id: 3,
      name: 'Chef Andi',
      image: '/influencer.jpg',
      followers: '650K',
      rating: 4.7,
      category: 'Culinary',
      price: 'Rp 1.5M'
    },
    {
      id: 4,
      name: 'Fit Fiona',
      image: '/influencer.jpg',
      followers: '920K',
      rating: 4.9,
      category: 'Fitness',
      price: 'Rp 2.0M'
    },
    {
      id: 5,
      name: 'Music Mike',
      image: '/influencer.jpg',
      followers: '1.1M',
      rating: 4.8,
      category: 'Music',
      price: 'Rp 2.2M'
    },
    {
      id: 6,
      name: 'Fashion Faye',
      image: '/influencer.jpg',
      followers: '1.5M',
      rating: 5.0,
      category: 'Fashion',
      price: 'Rp 3.0M'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (influencers.length - 2));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, influencers.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? influencers.length - 3 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (influencers.length - 2));
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-black/20 to-transparent"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured 
            <span className="bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] bg-clip-text text-transparent ml-2">
              Influencers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of top-performing influencers ready to amplify your brand
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#7124a8] hover:border-[#7124a8] transition-all duration-300 -ml-6"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#7124a8] hover:border-[#7124a8] transition-all duration-300 -mr-6"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel content */}
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 24}px)`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {influencers.map((influencer, index) => (
                <motion.div
                  key={influencer.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <InfluencerCard
                    name={influencer.name}
                    image={influencer.image}
                    followers={influencer.followers}
                    rating={influencer.rating}
                    category={influencer.category}
                    price={influencer.price}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: influencers.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#7124a8] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            View All Influencers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendedInfluencers;