'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '@/components/composites/TestimonialCard';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Data testimonial dengan foto asli
  const testimonials = [
    {
      quote: "Dapur Buzzer membantu brand kami mencapai target audience dengan sangat efektif. ROI yang kami dapatkan melebihi ekspektasi!",
      author: "Amanda Sari",
      role: "Marketing Director",
      company: "DANA",
      avatar: "/influencer.jpg"
    },
    {
      quote: "Platform yang luar biasa untuk mencari influencer berkualitas. Prosesnya mudah dan hasilnya selalu memuaskan.",
      author: "Budi Santoso",
      role: "Brand Manager",
      company: "Shopee",
      avatar: "/influencer.jpg"
    },
    {
      quote: "Kolaborasi dengan influencer melalui Dapur Buzzer selalu menghasilkan konten yang autentik dan engaging. Highly recommended!",
      author: "Lisa Wijaya",
      role: "Creative Director",
      company: "MS GLOW",
      avatar: "/influencer.jpg"
    },
    {
      quote: "Tim support yang responsif dan influencer yang profesional. Dapur Buzzer adalah solusi terbaik untuk influencer marketing.",
      author: "Rizky Pratama",
      role: "Digital Marketing Lead",
      company: "Gojek",
      avatar: "/influencer.jpg"
    }
  ];

  // Auto-play testimonials - hanya untuk desktop
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    // Disable auto-play pada mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Ganti slider testimoni menjadi bisa di-swipe manual oleh user
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  return (
    <section 
      className="py-12 md:py-20 bg-gradient-to-b from-transparent to-black/30"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            What Our 
            <span className="bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] bg-clip-text text-transparent ml-2">
              Clients Say
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from brands that have experienced success with our platform
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows - hanya untuk desktop */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white hover:bg-[#7124a8] hover:border-[#7124a8] transition-all duration-300 -ml-16"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white hover:bg-[#7124a8] hover:border-[#7124a8] transition-all duration-300 -mr-16"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <TestimonialCard
                quote={testimonials[currentTestimonial].quote}
                author={testimonials[currentTestimonial].author}
                role={testimonials[currentTestimonial].role}
                company={testimonials[currentTestimonial].company}
                avatar={testimonials[currentTestimonial].avatar}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 tap-scale ${
                  index === currentTestimonial
                    ? 'bg-[#7124a8] scale-125 shadow-lg shadow-[#7124a8]/30'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Swipe indicator untuk mobile */}
          <div className="flex md:hidden justify-center mt-4">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
              <span className="text-xs text-gray-300">
                Swipe to navigate
              </span>
            </div>
          </div>

          {/* Auto-play indicator - hanya untuk desktop */}
          <div className="hidden md:flex justify-center mt-6">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'} animate-pulse`} />
              <span className="text-sm text-gray-300">
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#7124a8]/30 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#9c4ed4] mb-2">4.9/5</div>
            <div className="text-gray-300 text-sm md:text-base">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#7124a8]/30 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#9c4ed4] mb-2">250%</div>
            <div className="text-gray-300 text-sm md:text-base">Average ROI Increase</div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#7124a8]/30 transition-colors duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#9c4ed4] mb-2">500+</div>
            <div className="text-gray-300 text-sm md:text-base">Successful Campaigns</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;