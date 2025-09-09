'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap } from 'lucide-react';
import Button from '@/components/elements/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black/30 to-[#1a0a2e]">
      <div className="container mx-auto px-4">
        {/* Background effects */}
        <div className="relative">
          {/* Glow effects */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-96 h-96 bg-[#7124a8]/20 rounded-full blur-3xl opacity-50" />
          </div>
          
          <div className="relative z-10">
            {/* Main CTA content */}
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Title */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Ready to 
                <span className="bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] bg-clip-text text-transparent">
                  {" "}Join Us?
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you&apos;re a brand looking to grow or an influencer ready to monetize your content, we have the perfect solution for you.
              </p>
              
              {/* CTA Buttons - Susun tombol CTA secara vertikal agar mudah di-tap */}
              <motion.div
                className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 w-full max-w-md md:max-w-none mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Influencer CTA */}
                <motion.div
                  className="group w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 text-base md:text-lg bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] hover:from-[#8a2bb5] hover:to-[#b059e8] w-full md:w-auto tap-scale"
                  >
                    <Users size={20} className="md:w-6 md:h-6" />
                    Become an Influencer
                    <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
                
                <div className="text-gray-400 font-medium text-sm md:text-base">or</div>
                
                {/* Brand CTA */}
                <motion.div
                  className="group w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 text-base md:text-lg border-2 border-[#7124a8] text-[#7124a8] hover:bg-[#7124a8] hover:text-white w-full md:w-auto tap-scale"
                  >
                    <Zap size={20} className="md:w-6 md:h-6" />
                    Hire a Buzzer
                    <ArrowRight size={16} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Feature highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#7124a8]/30 transition-all duration-300 hover:scale-105 tap-scale">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="text-white" size={20} />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Quick Setup</h3>
                <p className="text-gray-400 text-xs md:text-sm">Get started in just 5 minutes with our streamlined onboarding process</p>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#7124a8]/30 transition-all duration-300 hover:scale-105 tap-scale">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="text-white" size={20} />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Verified Network</h3>
                <p className="text-gray-400 text-xs md:text-sm">All our influencers are verified and vetted for quality and authenticity</p>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#7124a8]/30 transition-all duration-300 hover:scale-105 tap-scale">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg className="text-white" width={20} height={20} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-400 text-xs md:text-sm">Round-the-clock customer support to help you succeed every step of the way</p>
              </div>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              className="text-center mt-8 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                Join thousands of satisfied users who trust Dapur Buzzer
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs md:text-sm">Secure payments</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs md:text-sm">No hidden fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs md:text-sm">Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;