import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick 
}) => {
  // Base styles untuk button
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#7124a8] to-[#9c4ed4] text-white hover:from-[#8a2bb5] hover:to-[#b059e8] shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-[#7124a8] border-2 border-[#7124a8] hover:bg-[#7124a8] hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#7124a8]'
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;