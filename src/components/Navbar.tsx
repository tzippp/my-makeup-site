'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const services = [
    { name: 'Permanent Makeup Eyebrows', href: '/services/permanent-makeup-eyebrows' },
    { name: 'Permanent Makeup Eyeliner', href: '/services/permanent-makeup-eyeliner' },
    { name: 'Permanent Makeup Lips', href: '/services/permanent-makeup-lips' },
    { name: 'Spray Tanning', href: '/services/spray-tanning' },
    { name: 'Scalp Micropigmentation', href: '/services/scalp-micropigmentation' },
    { name: 'Fine Line Tattoo', href: '/services/fine-line-tattoo' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" onClick={closeMenu}>
            <div className="flex flex-col items-start">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:from-rose-700 group-hover:via-pink-700 group-hover:to-purple-700 transition-all duration-300">
                Red Carpet
              </span>
              <span className="text-sm lg:text-base font-light text-gray-600 tracking-wide -mt-1">
                LUXURY SPA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-rose-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200 group/item"
                      >
                        <span className="font-medium group-hover/item:translate-x-1 transition-transform duration-200 inline-block">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group"
            >
              About Me
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Link>
            
            <Link 
              href="/care" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group"
            >
              Care
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Link>
            
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group"
            >
              Gallery
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Link>
            
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group"
            >
              FAQ
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Link>
            
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-rose-100">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200"
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${
                isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={closeMenu}
                    className="block px-4 py-2.5 text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200"
            >
              About Me
            </Link>
            
            <Link
              href="/care"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200"
            >
              Care
            </Link>
            
            <Link
              href="/gallery"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200"
            >
              Gallery
            </Link>
            
            <Link
              href="/faq"
              onClick={closeMenu}
              className="block px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-200"
            >
              FAQ
            </Link>
            
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block mx-4 text-center bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;