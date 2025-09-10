'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ClientShowcase: React.FC = () => {
  // Data klien menggunakan gambar advertise.jpg sebagai contoh brand showcase
  const clients = [
    { name: 'DANA', logo: '/advertise.jpg' },
    { name: 'Shopee', logo: '/advertise.jpg' },
    { name: 'Gojek', logo: '/advertise.jpg' },
    { name: 'MS GLOW', logo: '/advertise.jpg' },
    { name: 'Tokopedia', logo: '/advertise.jpg' },
    { name: 'OVO', logo: '/advertise.jpg' },
    { name: 'Blibli', logo: '/advertise.jpg' },
    { name: 'Traveloka', logo: '/advertise.jpg' }
  ];

  // Duplikasi array untuk seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Title - lebih compact untuk mobile */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Join hundreds of successful brands that have amplified their reach with our influencer network
          </p>
        </motion.div>
        
        {/* Ubah showcase klien menjadi marquee auto-scroll */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays untuk fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#1a0a2e] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#1a0a2e] to-transparent z-10" />
          
          {/* Scrolling marquee */}
          <motion.div
            className="flex items-center gap-8 md:gap-12"
            animate={{
              x: [0, -1200]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative w-20 h-10 md:w-28 md:h-14 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#7124a8]/50 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7124a8]/0 to-[#9c4ed4]/0 group-hover:from-[#7124a8]/10 group-hover:to-[#9c4ed4]/10 transition-all duration-300" />
                </div>
                
                {/* Client name - visible on hover/tap */}
                <div className="text-center mt-2 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                  <span className="text-xs md:text-sm text-gray-300 font-medium">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom stats - lebih compact untuk mobile */}
        <motion.div
          className="mt-8 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full px-6 md:px-8 py-6">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-[#9c4ed4]">98%</div>
              <div className="text-xs text-gray-300">Client Satisfaction</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="block md:hidden w-8 h-px bg-white/20" />
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-[#9c4ed4]">2.5x</div>
              <div className="text-xs text-gray-300">Average ROI</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="block md:hidden w-8 h-px bg-white/20" />
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-[#9c4ed4]">24h</div>
              <div className="text-xs text-gray-300">Response Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientShowcase;