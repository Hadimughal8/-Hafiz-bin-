import React, { useState, useEffect } from 'react';
import { BHLogo } from './BHLogo';
import { TikTokButton, WhatsAppButton, WhatsAppIcon } from './SocialIcons';
import { WHATSAPP_LINK } from '../data/products';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'men-dressing', 'women-dressing', 'watches', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Men Dressing', href: '#men-dressing', id: 'men-dressing' },
    { name: 'Women Dressing', href: '#women-dressing', id: 'women-dressing' },
    { name: 'Watches', href: '#watches', id: 'watches' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#000000]/90 via-[#000000]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <BHLogo size={46} showGlow={isScrolled} />
            <div className="flex flex-col">
              <span className="font-serif-luxury font-bold text-lg sm:text-xl text-white tracking-wider group-hover:text-[#f3e5ab] transition-colors">
                BIN HAFIZ MALL
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#d4af37] -mt-1 uppercase">
                House of Brands
              </span>
            </div>
          </a>

          {/* Desktop Menu Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full relative ${
                    isActive
                      ? 'text-[#f3e5ab] font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] rounded-full shadow-[0_0_8px_#d4af37]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <TikTokButton size="sm" label="TikTok" />
            <WhatsAppButton size="sm" label="WhatsApp" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#25D366] hover:bg-[#1DA851] rounded-full shadow-md transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors border border-[#d4af37]/30"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6 text-[#d4af37]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e]/98 border-b border-[#d4af37]/30 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-[#d4af37]/15 text-[#f3e5ab] border border-[#d4af37]/40 font-semibold'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3">
            <TikTokButton fullWidth size="sm" label="TikTok" />
            <WhatsAppButton fullWidth size="sm" label="WhatsApp" />
          </div>
        </div>
      )}
    </header>
  );
};
