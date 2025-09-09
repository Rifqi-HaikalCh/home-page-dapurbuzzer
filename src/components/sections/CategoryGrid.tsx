'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Sparkles, 
  Utensils, 
  Dumbbell, 
  Music, 
  Briefcase,
  Camera,
  Heart
} from 'lucide-react';

const CategoryGrid: React.FC = () => {
  // Data kategori influencer
  const categories = [
    {
      name: 'Gaming',
      icon: Gamepad2,
      count: '150+ Influencers',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Beauty & Fashion',
      icon: Sparkles,
      count: '200+ Influencers',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Food & Culinary',
      icon: Utensils,
      count: '120+ Influencers',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Fitness & Health',
      icon: Dumbbell,
      count: '80+ Influencers',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Music & Entertainment',
      icon: Music,
      count: '90+ Influencers',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Business & Finance',
      icon: Briefcase,
      count: '60+ Influencers',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Photography',
      icon: Camera,
      count: '70+ Influencers',
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Lifestyle',
      icon: Heart,
      count: '180+ Influencers',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Explore by 
            <span className="bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] bg-clip-text text-transparent ml-2">
              Category
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover influencers across various niches and find the perfect match for your brand
          </p>
        </motion.div>

        {/* Categories - Jadikan kategori sebagai list horizontal yang bisa di-swipe */}
        {/* Mobile: Horizontal scrolling pills */}
        <div className="block md:hidden relative">
          {/* Gradient fade pada edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#1a0a2e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#1a0a2e] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 px-2">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              
              return (
                <motion.div
                  key={category.name}
                  className="flex-shrink-0 group cursor-pointer tap-scale"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 flex items-center gap-3 min-w-0 hover:border-[#7124a8]/50 transition-all duration-300">
                    {/* Background gradient - hanya muncul saat tap/hover */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 group-active:opacity-15 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${category.color} p-1.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    {/* Category name */}
                    <span className="text-white font-medium text-sm whitespace-nowrap group-hover:text-[#9c4ed4] transition-colors duration-300">
                      {category.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Traditional grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-48 flex flex-col justify-between hover:border-[#7124a8]/50 transition-all duration-300 overflow-hidden">
                  {/* Background gradient - hanya muncul saat hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    </div>
                    
                    {/* Category name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9c4ed4] transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    {/* Count */}
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {category.count}
                    </p>
                  </div>
                  
                  {/* Hover effect - arrow */}
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-[#7124a8]/10 to-[#9c4ed4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-tr from-[#7124a8]/5 to-[#9c4ed4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
            Can&apos;t find your niche? We work with influencers across all categories.
          </p>
          <button className="text-[#9c4ed4] font-medium hover:text-[#7124a8] transition-colors duration-300 border-b border-[#9c4ed4] hover:border-[#7124a8] tap-scale text-sm md:text-base">
            View All Categories →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;