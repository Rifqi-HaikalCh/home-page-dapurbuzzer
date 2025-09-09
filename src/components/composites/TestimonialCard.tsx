import React from 'react';
import { Quote } from 'lucide-react';
import Avatar from '@/components/elements/Avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  company?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
  company,
  className = ''
}) => {
  return (
    <div className={`
      bg-white/5 backdrop-blur-md rounded-2xl p-8 
      border border-white/10 hover:border-[#7124a8]/30 
      transition-all duration-500 hover:scale-105 
      hover:shadow-2xl hover:shadow-[#7124a8]/10
      ${className}
    `}>
      {/* Icon kutipan */}
      <div className="mb-6">
        <Quote size={48} className="text-[#7124a8] opacity-80" />
      </div>
      
      {/* Teks testimonial */}
      <blockquote className="text-white text-lg leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      {/* Info pemberi testimonial */}
      <div className="flex items-center gap-4">
        <Avatar 
          src={avatar} 
          alt={author} 
          size="lg" 
        />
        <div>
          <h4 className="text-white font-bold text-xl">{author}</h4>
          <p className="text-gray-300 text-sm">
            {role}
            {company && (
              <span className="text-[#9c4ed4]"> • {company}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;