import React from 'react';
import { BHLogo } from './BHLogo';
import { TikTokButton, WhatsAppButton } from './SocialIcons';
import { WHATSAPP_NUMBER, LOCATION_TEXT } from '../data/products';
import { MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Men Dressing', href: '#men-dressing' },
    { name: 'Women Dressing', href: '#women-dressing' },
    { name: 'Watches', href: '#watches' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-[#d4af37]/30 pt-16 pb-8 relative overflow-hidden">
      
      {/* Subtle Ambient Bottom Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-40 bg-[#d4af37]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Cols 1 - 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BHLogo size={54} showGlow={true} />
              <div>
                <h3 className="font-serif-luxury font-bold text-xl sm:text-2xl text-white tracking-wider">
                  BIN HAFIZ MALL
                </h3>
                <p className="text-xs font-semibold tracking-[0.3em] text-[#d4af37] uppercase">
                  HOUSE OF BRANDS
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              TO MAKE BIN HAFIZ THE MOST TRUSTED BRAND. Offering high-end men's, women's apparel, couture, and luxury timepieces with direct store access in Safdarabad.
            </p>

            {/* Address & Phone */}
            <div className="pt-2 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>📍 {LOCATION_TEXT}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>📞 {WHATSAPP_NUMBER}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Cols 6 - 8) */}
          <div className="md:col-span-4">
            <h4 className="font-serif-luxury text-base font-bold text-[#f3e5ab] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="text-gray-400 hover:text-[#f3e5ab] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-[#d4af37] text-xs">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Buttons & Connect (Cols 9 - 12) */}
          <div className="md:col-span-3">
            <h4 className="font-serif-luxury text-base font-bold text-[#f3e5ab] uppercase tracking-wider mb-4">
              Connect With Us
            </h4>
            <div className="flex flex-col space-y-3">
              <WhatsAppButton size="md" label="WhatsApp Support" fullWidth />
              <TikTokButton size="md" label="TikTok Channel" fullWidth />
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Bin Hafiz Mall. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>House of Brands • Safdarabad</span>
            <span className="text-[#d4af37]">|</span>
            <span>Premium Luxury Theme</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
