import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}) => {
  // Size configurations
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`
      ${sizeStyles[size]} 
      rounded-full overflow-hidden 
      border-2 border-[#7124a8] 
      shadow-lg hover:shadow-xl 
      transition-all duration-300 hover:scale-110
      ${className}
    `}>
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;