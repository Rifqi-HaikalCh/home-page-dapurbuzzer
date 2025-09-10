'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/elements/Button';

const HeroSection: React.FC = () => {
  return (
    // Gunakan min-height yang fleksibel dengan padding konsisten
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background gradient yang bergerak */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7124a8]/20 to-[#9c4ed4]/20 animate-pulse" />
      </div>
      
      {/* Particle effect background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#7124a8] rounded-full opacity-30 animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Hero headline dengan animasi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
            <span className="bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] bg-clip-text text-transparent">
              Amplify
            </span>
            <br />
            <span className="text-white">Your Brand,</span>
            <br />
            <span className="text-[#9c4ed4]">Instantly.</span>
          </h1>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Connect with Indonesia&apos;s top influencers and transform your brand&apos;s digital presence with authentic, engaging content.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button size="lg" className="text-xl px-10 py-4">
            Explore Influencers
          </Button>
        </motion.div>
        
        {/* Stats atau highlight numbers */}
        <motion.div
          className="mt-20 md:mt-24 grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#9c4ed4] mb-2">1000+</div>
            <div className="text-gray-300 text-sm md:text-base">Active Influencers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#9c4ed4] mb-2">500+</div>
            <div className="text-gray-300 text-sm md:text-base">Satisfied Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#9c4ed4] mb-2">50M+</div>
            <div className="text-gray-300 text-sm md:text-base">Total Reach</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;