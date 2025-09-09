import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyDown,
  className = '',
  icon,
  autoFocus = false
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        className={`
          w-full px-4 py-3 ${icon ? 'pl-10' : ''} 
          bg-white/10 backdrop-blur-md 
          border border-white/20 rounded-lg 
          text-white placeholder-gray-300 
          focus:outline-none focus:ring-2 focus:ring-[#7124a8] focus:border-transparent
          transition-all duration-300
          ${className}
        `}
      />
    </div>
  );
};

export default Input;