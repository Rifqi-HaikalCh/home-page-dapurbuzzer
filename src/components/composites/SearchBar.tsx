'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Input from '@/components/elements/Input';
import Button from '@/components/elements/Button';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Cari influencer favorit kamu...",
  onSearch,
  className = '',
  autoFocus = false
}) => {
  const [query, setQuery] = useState('');

  // Fungsi untuk handle pencarian
  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`flex items-center gap-3 max-w-md ${className}`}>
      <div className="flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          icon={<Search size={18} />}
          autoFocus={autoFocus}
        />
      </div>
      <Button 
        size="md" 
        onClick={handleSearch}
        className="px-4"
      >
        <Search size={18} />
      </Button>
    </div>
  );
};

export default SearchBar;