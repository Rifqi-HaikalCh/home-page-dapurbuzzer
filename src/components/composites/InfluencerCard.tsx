'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Star } from 'lucide-react';
import Button from '@/components/elements/Button';

interface InfluencerCardProps {
  name: string;
  image: string;
  followers: string;
  rating: number;
  category: string;
  price: string;
  className?: string;
}

const InfluencerCard: React.FC<InfluencerCardProps> = ({
  name,
  image,
  followers,
  rating,
  category,
  price,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Optimalkan ukuran kartu influencer dan interaksi tap
    <div 
      className={`
        relative group bg-white/5 backdrop-blur-md 
        rounded-xl overflow-hidden border border-white/10 
        hover:border-[#7124a8]/50 transition-all duration-500 
        hover:scale-105 hover:shadow-2xl hover:shadow-[#7124a8]/20
        tap-scale cursor-pointer
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gambar influencer - responsif height untuk mobile */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradien */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Badge kategori */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#7124a8] text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        
        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs font-medium">{rating}</span>
        </div>
        
        {/* Info influencer - selalu terlihat di bagian bawah */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Users size={14} />
            <span>{followers} followers</span>
          </div>
          <div className="mt-2 text-[#9c4ed4] font-bold text-lg">
            {price}
          </div>
        </div>
      </div>
      
      {/* Tombol Book Now - selalu terlihat di mobile, hover di desktop */}
      <div className={`
        absolute inset-x-4 bottom-4 transition-all duration-300
        ${isHovered ? 'opacity-100 translate-y-0' : 'md:opacity-0 md:translate-y-2 opacity-100 translate-y-0'}
      `}>
        <Button size="sm" className="w-full">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default InfluencerCard;