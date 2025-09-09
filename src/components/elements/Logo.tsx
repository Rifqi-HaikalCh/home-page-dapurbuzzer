import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  // Size configurations untuk gambar logo
  const sizeStyles = {
    sm: { width: 120, height: 32 },
    md: { width: 150, height: 40 },
    lg: { width: 180, height: 48 }
  };

  const logoSize = sizeStyles[size];

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/dapur-buzzer-logo.png"
        alt="Dapur Buzzer"
        width={logoSize.width}
        height={logoSize.height}
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;