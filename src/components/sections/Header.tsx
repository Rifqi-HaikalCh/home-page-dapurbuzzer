'use client';

import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/elements/Logo';
import SearchBar from '@/components/composites/SearchBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Fungsi untuk toggle menu mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Fungsi untuk toggle search modal mobile
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>
          
          {/* Mobile Controls - Di mobile, ganti search bar dengan ikon untuk hemat ruang */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleSearch}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors tap-scale"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors tap-scale"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white hover:text-[#9c4ed4] transition-colors font-medium">
              Explore
            </a>
            <a href="#" className="text-white hover:text-[#9c4ed4] transition-colors font-medium">
              Categories
            </a>
            <a href="#" className="text-white hover:text-[#9c4ed4] transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-white hover:text-[#9c4ed4] transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pt-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-3">
                <a 
                  href="#" 
                  className="text-white hover:text-[#9c4ed4] transition-colors font-medium py-3 tap-scale"
                  onClick={toggleMenu}
                >
                  Explore
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-[#9c4ed4] transition-colors font-medium py-3 tap-scale"
                  onClick={toggleMenu}
                >
                  Categories
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-[#9c4ed4] transition-colors font-medium py-3 tap-scale"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="text-white hover:text-[#9c4ed4] transition-colors font-medium py-3 tap-scale"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Mobile Search Modal - Full Screen */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Search Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h2 className="text-white font-medium">Search Influencers</h2>
                <button
                  onClick={toggleSearch}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors tap-scale"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Search Content */}
              <div className="flex-1 p-4">
                <div className="max-w-lg mx-auto pt-8">
                  <SearchBar autoFocus />
                  
                  {/* Search Suggestions atau Recent Searches bisa ditambahkan di sini */}
                  <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                      Search for influencers by name, category, or niche
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;